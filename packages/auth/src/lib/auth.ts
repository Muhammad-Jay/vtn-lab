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
            jwt: {
                // Ensure your issuer matches exactly
                issuer: "http://localhost:3000",
                audience: "http://localhost:5000",
                // Must be identical to the secret key inside appsettings.json
                secret: process.env.BETTER_AUTH_SECRET!
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