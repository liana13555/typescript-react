/*
 * Классы
 *  - объявление и типизация свойств
 *  - дефолтные значения свойств
 *  - публичные и приватные свойства и методы
 *  - readonly свойства
 *  - parameter properties +-
 *  - Статические свойства и методы
 *  - Интерфейс класса с implements
 */

interface Params {
    size: string,
    toppings: string[]
}

interface IPizza {
    size: string                             // приватные св-ва не могут находиться в интерфейсе, геттеры и сеттеры тоже
    addTopping(topping: string): void
}

class Pizza implements IPizza{
    public size: string          // В TS в классе св-ва нужно объявить, чтобы потом в конструкторе им написать значения. Св-ва по умолчанию публичные
    private toppings: string[] 

    constructor({ size, toppings = [] }: Params) {
        this.size = size 
        this.toppings = toppings
    }

    private validateTopping(topping: string): boolean {
        console.log(topping)
        // валидация

        return true       
    }

    public addTopping(topping: string) {
        this.toppings.push(topping)
    }
}

const pizza: IPizza = new Pizza({size: 'medium', toppings: ['cheese']})
console.log(pizza);

// const x = pizza.addTopping('qweqwe')
// console.log(x);



export{}