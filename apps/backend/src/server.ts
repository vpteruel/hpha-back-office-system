import { cors } from "@elysiajs/cors";
import type { CreateUserDto, User } from "@shared/lib";
import { Elysia } from "elysia";

import { db } from "./db/schema";
import { users } from "./db/schema/users";

const app = new Elysia();

app.get("/", () => "Hello Elysia");

app.get("/users", async () => {
  return db.select().from(users);
});

app.post("/users", async ({ body }) => {
  return db.insert(users).values(body as CreateUserDto).returning();
});

app.listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);