import { cors } from "@elysiajs/cors";
import { Elysia } from "elysia";
import { automationRoutes } from "./routes/automations";
import { userRoutes } from "./routes/users";

const app = new Elysia()
  .use(cors())
  .use(automationRoutes)
  .use(userRoutes)
  .listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);