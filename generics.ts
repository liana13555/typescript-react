function fill<I>(array: any[], value: I): I[] {
    return array.map(() => value)
}

const result = fill([1, 2, 3], 'a')
console.log(result);


const values = fill(['a', 'b', 'c'], 4)
console.log(values);
