import type { LoginDto } from "@shared/lib";
import { Elysia, t } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { eq } from "drizzle-orm";
import { db } from "../db";
import { users } from "../db/schema/users";

const JWT_SECRET = process.env.JWT_SECRET || "super-secret-jwt-key-change-in-production";

export const authRoutes = new Elysia({ prefix: "/auth" })
  .use(
    jwt({
      name: "jwt",
      secret: JWT_SECRET,
      exp: "24h",
    })
  )
  .post(
    "/login",
    async ({ body, jwt, set }) => {
      const { email, password } = body as LoginDto;

      const [user] = await db.select().from(users).where(eq(users.email, email));

      if (!user) {
        set.status = 401;
        return { error: "Invalid email or password" };
      }

      const valid = await Bun.password.verify(password, user.password);

      if (!valid) {
        set.status = 401;
        return { error: "Invalid email or password" };
      }

      const token = await jwt.sign({ sub: user.id, email: user.email });

      return {
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      };
    },
    {
      body: t.Object({
        email: t.String(),
        password: t.String(),
      }),
    }
  );
