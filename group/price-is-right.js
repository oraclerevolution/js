'use strict'

/*
 * Price is right
 * 1 can of soup is 650 FCFA
 * 3 can of soup is 1000 FCFA
 * 1 can of soup contains 500 ml
 *
 * Create a function `getCostCount` that takes a number of cans
 * and return the cost (and applying the 3 for 1000 FCFA discount)
 *
 * Create a function `getCostMl` that takes a quantity in milliliters
 * and return the cost (and applying the 3 for 1000 FCFA discount)
 */
const getCostCount = numberOfCans => {
  let calcul

  if (numberOfCans === 3) {
    calcul = '1000 francs'
  } else {
    calcul = numberOfCans * 650
  }

  return calcul + ' francs'
}

console.log(getCostCount(5))
console.log(getCostCount(3))

const getCostMl = quantity => {
  let result

  if (quantity === 1500) {
    result = '1000'
  } else if (quantity != 1500) {
    const division = quantity / 500

    result = division * 650
  }

  return result + ' francs'
}

console.log(getCostMl(1500))
console.log(getCostMl(500))
console.log(getCostMl(2000))
// You must write your own tests

throw Error('No tests !')
