import { Elysia } from "elysia";
import { db } from "../db";
import { automations } from "../db/schema/automations";

export const automationRoutes = new Elysia({ prefix: '/automations' })
  .get("/", async () => {
    return await db.select().from(automations);
  });