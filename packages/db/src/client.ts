import {drizzle} from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as authSchema from "./schemas/auth-schema";

export const schema = {...authSchema};

const client = postgres({
    host: 'aws-0-eu-west-1.pooler.supabase.com',
    port: 5432, // Or 6543
    database: 'postgres',
    username: 'postgres.tdwsajgcydyoerlgsphk',
    password: 'J$ynC420042004', // Raw special characters are completely safe here
    prepare: false
});

export const db = drizzle(client, { schema });