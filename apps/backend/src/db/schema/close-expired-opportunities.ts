import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { closeExpiredOpportunitiesRuns } from "./close-expired-opportunities-runs";

export const closeExpiredOpportunities = sqliteTable("close_expired_opportunities", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  runId: integer("run_id")
    .notNull()
    .references(() => closeExpiredOpportunitiesRuns.id),
  title: text("title").notNull(),
  requisition: text("requisition"),
  location: text("location"),
  postedDate: text("posted_date"),
  closedDate: text("closed_date"),
  applicationsCount: integer("applications_count").notNull(),
});