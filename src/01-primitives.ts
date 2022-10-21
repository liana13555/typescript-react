/* 
Примитивные типы
- Объявления типа number, string, boolean, null, undefined, any, object
- Множественные типы с type composition
*/

let age: number = 5
const name: string = 'mango'


// желательно не использовать
let value: any = 5
value = 'jhgfbh'

let user: object
user = {}

// composition
let id: string | number | boolean = 5
id = 'kjhk'
id = true



export { }