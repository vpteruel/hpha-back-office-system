import { eq } from "drizzle-orm";
import { Elysia } from "elysia";
import { db } from "../db";
import { automationRuns, automations, closedPositionsRuns } from "../db/schema";

export const automationRoutes = new Elysia({ prefix: '/automations' })
  .get("/", async () => {
    return await db.select().from(automations);
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