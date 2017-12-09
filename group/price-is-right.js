'use strict'

/*
 * Price is right
 * 1 can of soup is 650 FCFA
 * 3 can of soup is 1500 FCFA
 * 1 can of soup contains 500 ml
 *
 * Create a function `getCostCount` that takes a number of cans
 * and return the cost (and applying the 3 for 1500 FCFA discount)
 *
 * Create a function `getCostMl` that takes a quantity in milliliters
 * and return the cost (and applying the 3 for 1500 FCFA discount)
 */
const getCostCount = numberOfCans => {
  let calcul

  if (numberOfCans === 3) {
    calcul = 1500
  } else {
    calcul = numberOfCans * 650
  }

  return calcul
}

console.log(getCostCount(6))
console.log(getCostCount(10))

const getCostMl = quantity => {
  let result

  if (quantity === 1500) {
    result = 1500
  } else if (quantity != 1500) {
    const division = quantity / 500

    result = division * 650
  }

  return result
}

console.log(getCostMl(33))
console.log(getCostMl(500))
console.log(getCostMl(2000))
// You must write your own tests
//nos tests
const assert = require('assert')
//les tests de la premiere fonction

assert.strictEqual(typeof getCostCount, 'function')
assert.strictEqual(getCostCount.length, 1)
assert.strictEqual(getCostCount(3), 1500)
assert.strictEqual(getCostCount(0), 0)
assert.strictEqual(getCostCount(!0), false)

//les tests de la deuxieme fonction
throw Error('No tests !')
