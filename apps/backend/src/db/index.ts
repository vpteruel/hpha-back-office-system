import { Database } from "bun:sqlite";
import { BunSQLiteDatabase, drizzle } from "drizzle-orm/bun-sqlite";
import * as schema from "./schema";

const sqlite = new Database("sqlite.db");

export const db: BunSQLiteDatabase<typeof schema> = drizzle(sqlite, { schema });