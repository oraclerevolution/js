'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 * @next jaden-case
 */
//function Premiere(chaine){
//    return chaine.substr(0,1).toUpperCase()+	chaine.substr(1,chaine.length).toLowerCase()		}
//
//alert(Premiere('dfEZRZSDGFSD4E'))
const capitalize = firstCharacter => firstCharacter.charAt(0).toUpperCase() + firstCharacter.substr(1, firstCharacter.length)

console.log(capitalize('oracle'))
console.log(capitalize('yoann'))
console.log(capitalize('xavier'))
console.log(capitalize('clem'))
// You must write your own tests
throw Error('No tests !')
