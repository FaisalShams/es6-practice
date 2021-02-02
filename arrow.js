const doubleIt = num => num * 2;
//const result = doubleIt(50);
//console.log(result);

const add = (x, y) => x + y;
//const result = add(50, 70);
//console.log(result);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = doMath(7, 5);
console.log(result);