import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'
import type { User, CreateUserDto } from '@shared/lib'

const app = new Elysia().get("/", () => "Hello Elysia").listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
