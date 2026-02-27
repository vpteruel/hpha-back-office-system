import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { automations } from "./automations";

export const automationRuns = sqliteTable("automation_runs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  automationId: integer("automation_id")
    .notNull()
    .references(() => automations.id),
  status: text("status", {
    enum: ["SUCCESS", "FAILED", "PARTIAL"],
  }).notNull(),
  startedAt: integer("started_at", { mode: "timestamp" }).notNull(),
  finishedAt: integer("finished_at", { mode: "timestamp" }),
  durationMs: integer("duration_ms"),
  summary: text("summary"),
  errorMessage: text("error_message"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});