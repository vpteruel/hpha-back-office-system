import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { closedPositionsRuns } from "./closed-positions-runs";

export const closedPositions = sqliteTable("closed_positions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  runId: integer("run_id")
    .notNull()
    .references(() => closedPositionsRuns.id),
  title: text("title").notNull(),
  requisition: text("requisition"),
  location: text("location"),
  postedDate: text("posted_date"),
  closedDate: text("closed_date"),
  applicationsCount: integer("applications_count").notNull(),
});