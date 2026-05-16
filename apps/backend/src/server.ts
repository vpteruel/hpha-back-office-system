import { cors } from "@elysiajs/cors";
import { Elysia } from "elysia";
import { authRoutes } from "./routes/auth";
import { automationRoutes } from "./routes/automations";
import { userRoutes } from "./routes/users";

const app = new Elysia()
  .use(cors())
  .use(authRoutes)
  .use(automationRoutes)
  .use(userRoutes)
  .listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);