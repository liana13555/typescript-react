/*
 * Массивы
 *  - Нотации `тип[]` и `Array<тип>`
 *  - `(тип | тип)[]`
 *  - `readonly` и `ReadonlyArray<тип>`
 *  - Tuple `[тип, тип]`, например массив координат
 */

const temps: number[] = [30, 31, 27, 28, 32]   // Или:    const temps: Array<number> = [30, 31, 27, 28, 32]
temps.push(35)

const values: (number | string)[] = [30, 31, 27, 28, 32, 'apple']

const counts: readonly number[] = [30, 31, 27, 28, 32]  

// Tuple
const coords: [number, number] = [50.4501, 30.5234];
const coords2: [number, number, string] = [50.4501, 30.5234, 'mango'];
const rgb: [number, number, number] = [255, 0, 100]

const arrA = [1, 2, 3, 5]
const arrB = [...arrA]


const entries: [string, number][] = Object.entries({a: 1, b: 10, c: 5})

export { }