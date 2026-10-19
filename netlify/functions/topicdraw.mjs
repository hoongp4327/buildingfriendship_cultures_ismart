// Shared topic-draw state: the LED screen writes it, group laptops poll it.
import { getStore } from "@netlify/blobs";

const KEY = "ismart-3010";

export default async (req) => {
  const store = getStore({ name: "topicdraw", consistency: "strong" });
  if (req.method === "POST") {
    if (req.headers.get("x-draw-key") !== KEY) return new Response("forbidden", { status: 403 });
    const body = await req.json();
    if (!Array.isArray(body.order) || !Array.isArray(body.owner)) return new Response("bad request", { status: 400 });
    await store.setJSON("state", { order: body.order, owner: body.owner, ts: Date.now() });
    return Response.json({ ok: true });
  }
  const state = await store.get("state", { type: "json" });
  return Response.json(state || {}, { headers: { "cache-control": "no-store" } });
};

export const config = { path: "/api/topicdraw" };
