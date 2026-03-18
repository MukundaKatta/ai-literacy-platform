import { describe, it, expect } from "vitest";
import { AiLiteracyPlatform } from "../src/core.js";

describe("AiLiteracyPlatform integration", () => {
  it("handles concurrent ops", async () => {
    const c = new AiLiteracyPlatform();
    await Promise.all([c.learn({a:1}), c.learn({b:2}), c.learn({c:3})]);
    expect(c.getStats().ops).toBe(3);
  });
  it("returns service name", async () => {
    const c = new AiLiteracyPlatform();
    const r = await c.learn();
    expect(r.service).toBe("ai-literacy-platform");
  });
  it("handles 100 ops", async () => {
    const c = new AiLiteracyPlatform();
    for (let i = 0; i < 100; i++) await c.learn({i});
    expect(c.getStats().ops).toBe(100);
  });
});
