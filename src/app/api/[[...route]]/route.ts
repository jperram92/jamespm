import { Hono } from "hono";
import { handle } from "hono/vercel";

import auth from "@/features/auth/server/route";

const app = new Hono().basePath("/api");

// Apply the route directly without storing it in a variable
app.route("/auth", auth);

export const GET = handle(app);
export const POST = handle(app);

// Export type from the app directly
export type AppType = typeof app;
