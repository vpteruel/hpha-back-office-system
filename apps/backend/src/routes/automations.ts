import { eq, sql } from "drizzle-orm";
import { Elysia } from "elysia";
import { db } from "../db";
import { automationRuns, automations, closedPositions, closedPositionsRuns } from "../db/schema";

export const automationRoutes = new Elysia({ prefix: '/automations' })
  .get("/closed-positions", async () => {
    return await db.select().from(closedPositions);
  })
  .get("/closed-positions/:id", async ({ params }) => {
    return await db.select().from(closedPositions)
      .where(eq(closedPositions.id, Number(params.id)));
  })
  .get("/", async () => {
    // Join with latest run info
    const results = await db.select({
      id: automations.id,
      name: automations.name,
      description: automations.description,
      isActive: automations.isActive,
      createdAt: automations.createdAt,
      lastRunStatus: sql<string | null>`(SELECT status FROM automation_runs WHERE automation_id = ${automations.id} ORDER BY started_at DESC LIMIT 1)`,
      lastRunAt: sql<string | null>`(SELECT started_at FROM automation_runs WHERE automation_id = ${automations.id} ORDER BY started_at DESC LIMIT 1)`
    }).from(automations);
    
    return results;
  })
  .get("/:id", async ({ params }) => {
    return await db.select().from(automations)
      .where(eq(automations.id, Number(params.id)));
  })
  .get("/:id/runs", async ({ params }) => {
    return await db.select().from(automationRuns)
      .where(eq(automationRuns.automationId, Number(params.id)));
  })
  .get("/:id/runs/:runId", async ({ params }) => {
    return await db.select().from(automationRuns)
      .where(eq(automationRuns.id, Number(params.runId)));
  })
  .get("/:id/runs/:runId/positions", async ({ params }) => {
    return await db.select().from(closedPositionsRuns)    
      .where(eq(closedPositionsRuns.automationRunId, Number(params.runId)));
  });