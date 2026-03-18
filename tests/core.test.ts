import { describe, it, expect } from "vitest";
import { LiteracyPlatform } from "../src/literacyPlatform.js";

describe("LiteracyPlatform", () => {
  it("initializes", () => {
    const instance = new LiteracyPlatform();
    expect(instance.getStats().totalOps).toBe(0);
  });

  it("tracks operations", async () => {
    const instance = new LiteracyPlatform();
    await instance.getcurriculum();
    expect(instance.getStats().totalOps).toBe(1);
  });

  it("resets state", async () => {
    const instance = new LiteracyPlatform();
    await instance.getcurriculum();
    instance.reset();
    expect(instance.getStats().totalOps).toBe(0);
  });
});
