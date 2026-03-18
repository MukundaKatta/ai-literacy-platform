# ai-literacy-platform

**Interactive platform for teaching AI literacy to non-technical professionals**

![Build](https://img.shields.io/badge/build-passing-brightgreen) ![License](https://img.shields.io/badge/license-proprietary-red)

## Install
```bash
npm install
```

## Quick Start
```typescript
import { AiLiteracyPlatform } from "./ai-literacy-platform";
const instance = new AiLiteracyPlatform()
const r = await instance.learn({ input: 'test' })
```

## CLI
```bash
npx tsx src/cli.ts status
npx tsx src/cli.ts run --input "data"
```

## API
| Method | Description |
|--------|-------------|
| `learn()` | Learn |
| `assess()` | Assess |
| `recommend()` | Recommend |
| `track_progress()` | Track progress |
| `generate_exercise()` | Generate exercise |
| `certify()` | Certify |

## Test
```bash
npx vitest
```

## License
(c) 2026 Officethree Technologies. All Rights Reserved.
