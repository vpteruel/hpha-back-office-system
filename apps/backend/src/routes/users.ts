import type { CreateUserDto } from "@shared/lib";
import { Elysia, t } from "elysia";
import { db } from "../db";
import { users } from "../db/schema/users";

export const userRoutes = new Elysia({ prefix: '/users' })
  .get("/", async () => {
    return await db.select({ id: users.id, name: users.name, email: users.email }).from(users);
  })
  .post("/", async ({ body, set }) => {
    const { name, email, password } = body as CreateUserDto;
    const hashedPassword = await Bun.password.hash(password);

    const [user] = await db
      .insert(users)
      .values({ name, email, password: hashedPassword })
      .returning({ id: users.id, name: users.name, email: users.email });

    set.status = 201;
    return user;
  });