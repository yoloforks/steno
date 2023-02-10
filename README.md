# @stenodb/writer [![](https://img.shields.io/npm/v/@stenodb/writer)](https://www.npmjs.org/package/@stenodb/writer)

> Specialized fast async file writer

**Steno** makes writing to the same file often/concurrently fast and safe.

_https://en.wikipedia.org/wiki/Stenotype_

## Features

- ⚡ Fast (see benchmark)
- 🐦 Lightweight (~6kb)
- 👍 ⚛️ Safe: No partial writes (writes are atomic)
- 👍 🏁 Safe: No race conditions (writes are ordered even if they're async)

## Usage

```javascript
import { Writer } from '@stenodb/writer'

// Create a singleton writer
const file = new Writer('file.txt')

// Use it in the rest of your code
async function save() {
  await file.write('some data')
}
```

## Benchmark

`npm run benchmark` (see `src/benchmark.ts`)

```
Write 1KB data to the same file x 1000
  fs     :   62ms
  steno  :    1ms

Write 1MB data to the same file x 1000
  fs     : 2300ms
  steno  :    5ms
```

_Steno uses a smart queue and avoids unnecessary writes._

## License

MIT - [Typicode](https://github.com/typicode)
