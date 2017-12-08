'use strict'

/*
 * Create a function `total` that takes an array on numbers
 * and return it's total
 *
 * @next multiply
 */

const total = tableau => {
  let i = 0
  let sum = 0

  while (i < tableau.length) {
    sum += tableau[i]
    i++
  }

  return sum
}

console.log(total([ 1, 1, 4, 5 ]))
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof total, 'function')
assert.strictEqual(total.length, 1)
assert.deepStrictEqual(total([ 1, 1, 1 ]), 3)
assert.deepStrictEqual(total([ 10, 10, 10 ]), 30)
assert.deepStrictEqual(total([ 24, -10, 10, 0, 0, 100 ]), 124)
// End of tests */
