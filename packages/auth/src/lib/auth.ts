import { jwt } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db, schema } from "@repo/db";
import {betterAuth} from "better-auth";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema
    }),
    secret: process.env.BETTER_AUTH_SECRET!,
    plugins: [
        jwt({
            jwks: {
                // 1. ALGORITHM: Crucial for C# compatibility
                // .NET natively expects RSA keys. Setting this forces Better Auth
                // to generate RSA keys instead of EdDSA, preventing the IDX10500 error.
                keyPairConfig: {
                    alg: "RS256",
                    modulusLength: 2048
                },
                // 2. KEY ROTATION: Security best practice
                // Automatically creates a new key every 30 days and keeps the old one
                // valid for 7 days so active users don't suddenly get disconnected.
                rotationInterval: 60 * 60 * 24 * 30,
                gracePeriod: 60 * 60 * 24 * 7,
            },
            jwt: {
                // 3. SECURITY CONTEXT: Ensures tokens are only used where intended
                issuer: "http://localhost:3000",
                audience: "http://localhost:5000",
                expirationTime: "1h", // Keep JWT lifespans short for security

                // 4. PAYLOAD OPTIMIZATION: Keep the token lightweight
                // By default, Better Auth stuffs the entire user object into the token.
                // This makes the JWT huge. We only need the essentials for C#.
                definePayload: ({ user }) => {
                    return {
                        sub: user.id,       // C# maps 'sub' to NameIdentifier automatically
                        email: user.email,
                        name: user.name
                    };
                }
            }
        })
    ],
    account: {
        accountLinking: {
            enabled: true,
            trustedProviders: ["github", "google", "atlassian", "apple", "slack"],
        }
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }
    },
});