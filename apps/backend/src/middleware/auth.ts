import { Elysia } from "elysia";
import { jwt } from "@elysiajs/jwt";

const JWT_SECRET = process.env.JWT_SECRET || "super-secret-jwt-key-change-in-production";

export const authGuard = new Elysia()
  .use(
    jwt({
      name: "jwt",
      secret: JWT_SECRET,
      exp: "24h",
    })
  )
  .derive({ as: "scoped" }, async ({ headers, jwt, set }) => {
    const authHeader = headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      set.status = 401;
      return { user: null, isAuthenticated: false };
    }

    const token = authHeader.slice(7);
    const payload = await jwt.verify(token);

    if (!payload) {
      set.status = 401;
      return { user: null, isAuthenticated: false };
    }

    return {
      user: { id: payload.sub as number, email: payload.email as string },
      isAuthenticated: true,
    };
  })
  .onBeforeHandle(({ isAuthenticated, set }) => {
    if (!isAuthenticated) {
      set.status = 401;
      return { error: "Unauthorized" };
    }
  });
