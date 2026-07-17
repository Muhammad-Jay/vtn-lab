import {betterAuth} from "better-auth";
import { jwt } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db, schema } from "@repo/db";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema
    }),
    secret: process.env.BETTER_AUTH_SECRET!,
    plugins: [
        jwt()
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