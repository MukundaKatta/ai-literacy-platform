// Basic usage example for ai-literacy-platform
import { AiLiteracyPlatform } from "../src/core.js";

async function main() {
  const instance = new AiLiteracyPlatform({ verbose: true });

  console.log("=== ai-literacy-platform Example ===\n");

  // Run primary operation
  const result = await instance.learn({ input: "example data", mode: "demo" });
  console.log("Result:", JSON.stringify(result, null, 2));

  // Run multiple operations
  const ops = ["learn", "assess", "recommend];
  for (const op of ops) {
    const r = await (instance as any)[op]({ source: "example" });
    console.log(`${op}:`, r.ok ? "✓" : "✗");
  }

  // Check stats
  console.log("\nStats:", JSON.stringify(instance.getStats(), null, 2));
}

main().catch(console.error);
