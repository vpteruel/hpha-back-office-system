import { integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { automationRuns } from "./automation-runs";

export const closedPositionsRuns = sqliteTable(
  "closed_positions_runs",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    automationRunId: integer("automation_run_id")
      .notNull()
      .references(() => automationRuns.id),
    positionsClosed: integer("positions_closed").notNull(),
    totalApplications: integer("total_applications").notNull(),
  }
);