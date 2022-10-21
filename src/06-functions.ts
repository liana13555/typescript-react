/*
 * Функции
 *  - Типизация параметров и возвращаемого значения
 *  - Необязательные параметры
 *  - rest-параметры
 *  - Функция без явного возврата: тип void
 *  - Типизация подписи функции
 *    - черерз тип
 *    - через интерфейс
 *  - Типизация методов объекта в интерфейсе
 *    - ключ: () => тип;
 *    - ключ() : тип;
 *  - Необязательные методы в интерфейсе
 */

type AddFn = (a: number, b: number) => number; // для всех ф-й, не только стрелочных

const addExpression: AddFn = function (x, y) {
    return x + y;
}
addExpression(2, 3)
// const addExpression = function (x: number, y: number): number {
//     return x + y;
// }

const addArrow: AddFn = (x, y) => {
    return x + y;
}
// const addArrow = (x: number, y: number): number => {
//     return x + y;
// }
addArrow(2, 3)

type Fn = (a: number, b: number, c: number, ...restParams: number[]) => number;

const fn: Fn = (a, b, c, ...restParams) => {
    return 5;
}
// const fn = (a: number, b: number, c: number, ...restParams: number[]) => {}
fn(1, 2, 3, 4, 5)

/* через interface
interface IAddFn {
    (a: number, b: number): number
}

const addExpression: IAddFn = function (x, y) {
    return x + y;
}
addExpression(2, 3)
*/

// Функция без явного возврата: тип void
type LogFn = (m: string) => void;
const log: LogFn = (message) => {
    console.log(message);    
}

// const log = (message: string): void => { }
log('hello!');


/* *  - Типизация методов объекта в интерфейсе
 *    - ключ: () => тип;
 *    - ключ() : тип;
 *  - Необязательные методы в интерфейсе */

enum PizzaSize {
    Small = "s",
    Medium = "m",
    Large = "l",
}

interface IPizza {
    size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;
    toppings: string[];
    logSize?(): void;  // современный синтаксис
    // logSize:() => void;         Необязательные методы:  logSize?:() => void;
    getSize(): string;
    addTopping(topping: string): void;
}

const pizza: IPizza = {
    size: PizzaSize.Small,
    toppings: ['sause', 'mushrooms'],
    logSize() {
        console.log(this.size);        
    },
    getSize() {
        return this.size;
    },
    addTopping(topping) {
        this.toppings.push(topping)
    },
}

console.log(pizza);

export{}
