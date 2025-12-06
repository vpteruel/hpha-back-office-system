import { cors } from "@elysiajs/cors";
import type { CreateUserDto, User } from "@shared/lib";
import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia").listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
