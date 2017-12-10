'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */
const cutFirst = string1 => string1.substr(2, string1.length)
const cutLast = string2 => string2.substr(0, string2.length - 2)
const cutFistLast = string => 
console.log(cutFirst('BONJOUR'))
console.log(cutFirst('oracle'))
console.log(cutLast('ORACLE'))
console.log(cutFistLast('ORACLE'))
// You must write your own tests
throw Error('No tests !')

