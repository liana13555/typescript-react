// type Salutation = {
//     greeting: string,
//     name: string
// }

// function greet({greeting, name}: Salutation ){
//     return `${greeting}, ${name} `
// }

// const message: string = greet({greeting: 'Hello', name: 'John'})




/* Work with DOM Elements in TypeScript using Type Assertions */

// const input: HTMLInputElement = document.getElementById('input') as HTMLInputElement

// input.autofocus = true

// input.addEventListener('input', event => {
//     const i = event.currentTarget as HTMLInputElement
//     console.log(i.value)
// })





/* Use Type Definitions for Popular Projects on npm with @types  */

import _ from 'lodash'
console.log(_.uniq([1, 1, 2]));

_.add()


