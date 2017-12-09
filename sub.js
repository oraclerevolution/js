'use strict'

/*
 * Create a function `sub` that takes 2 arguments and substract them
 *
 * @notions Primitive and Operators, Functions
 * @next abs
 */

// Your code :
const sub = (nb1, nb2) => nb1 - nb2

console.log(sub(2, 2))
//* Begin of tests
const assert = require('assert')
const rand = Math.random()
for (var i=1; i <= 20; i++)
//{
//    if (i % 15 == 0)
//        console.log("FizzBuzz");
 //   else if (i % 3 == 0)
//        console.log("Fizz");
  //  else if (i % 5 == 0)
    //    console.log("Buzz");
    //else
      //  console.log(i);
//}
assert.strictEqual(typeof sub, 'function')
assert.strictEqual(sub.length, 2)
assert.strictEqual(sub(2, 2), 0)
assert.strictEqual(sub(-2, 2), -4)
assert.strictEqual(sub(rand, rand), rand - rand)
// End of tests */
