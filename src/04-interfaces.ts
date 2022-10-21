/*
 * Интерфейсы   исп-ся для описания объекта
 *  - Конструкция `interface`
 *  - Необзательные поля с `key?: value`
 *  - readonly поля с `readonly key: value`
 *  - Ошибка при добавлении полей не существующих в интерфейсе
 * - Index signatures: объект произвольных количества свойств со значениями `[key: тип]: тип`
 * - Наследование интерфейсов с extends
 *  - [interface vs type](https://pawelgrzybek.com/typescript-interface-vs-type/)
 */

interface PluginConfig {
    readonly selector: string;
    perPage: number;
    startIndex?: number;
    draggable: boolean;
}

const config: PluginConfig = {
  selector: "#plugin-1",
  perPage: 2,
//   startIndex: 0,
  draggable: false,
}

// Index signatures
interface Employees2 {
  [key: string]: number[]
}

const employees2: Employees2 = {
  mango: [5, 5],
  poly: [3, 5, 2],
  ajax: [7, 5],
  wiki: [2, 5, 7],
}

interface Employees {
  [key: string]: number
}

const employees: Employees = {
  mango: 5,
  poly: 10,
  ajax: 15,
  wiki: 50,
}

const entries = Object.entries(employees)
let bestEmployeeName = ''
let bestEmployeeProIndex = 0

for (const [name, value] of entries) {
  if (bestEmployeeProIndex <= value) {
    bestEmployeeName = name
  }
}

console.log(bestEmployeeName);

export {}