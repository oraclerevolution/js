'use strict'
const person = {
    name: 'assia',
    age:999,
}
console.log(person)
person.age = 23
console.log(person)

const assia =  Object.freeze(person)
