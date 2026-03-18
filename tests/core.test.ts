import { describe, it, expect } from "vitest";
import { AiLiteracyPlatform } from "../src/core.js";
describe("AiLiteracyPlatform", () => {
  it("init", () => { expect(new AiLiteracyPlatform().getStats().ops).toBe(0); });
  it("op", async () => { const c = new AiLiteracyPlatform(); await c.learn(); expect(c.getStats().ops).toBe(1); });
  it("reset", async () => { const c = new AiLiteracyPlatform(); await c.learn(); c.reset(); expect(c.getStats().ops).toBe(0); });
});
