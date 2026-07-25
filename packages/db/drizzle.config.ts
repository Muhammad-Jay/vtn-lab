import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';
import path = require("node:path");

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is missing!");
}

export default defineConfig({
    schema: './src/schemas/auth-schema.ts',
    out: './src/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    verbose: true,
    strict: false,
    schemaFilter: ["public"],
    tablesFilter: ["user", "account", "session", "verification", "jwks"],
});
