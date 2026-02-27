import type { CreateUserDto } from "@shared/lib";
import { Elysia, t } from "elysia";
import { db } from "../db";
import { users } from "../db/schema/users";

export const userRoutes = new Elysia({ prefix: '/users' })
  .get("/", async () => {
    return await db.select().from(users);
  })
  .post("/", async ({ body }) => {
    return await db.insert(users).values(body as CreateUserDto).returning();
  });