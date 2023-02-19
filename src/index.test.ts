import fs from 'fs'
import os from 'os'
import path from 'path'
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import { Writer } from './index.js'

test('@stenodb/writer', async () => {
  const max = 1000
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'steno-test-'))
  const file = path.join(dir, 'tmp.txt')

  const writer = new Writer(file)
  const promises = []

  // Test race condition
  for (let i = 1; i <= max; ++i) {
    promises.push(writer.write(String(i)))
  }

  // All promises should resolve
  await Promise.all(promises)
  assert.equal(parseInt(fs.readFileSync(file, 'utf-8')), max)
})

test.run()
