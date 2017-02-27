function someAction(x, y, someCallback) {
    return someCallback(x, y);
}

function calcProduct(x, y) {
    return x*y;
}

function calcSum(x, y) {
    return x + y;
}
// alerts 75, the product of 5 and 15
console.log(someAction(5, 15, calcProduct));
// alerts 20, the sum of 5 and 15
console.log(someAction(5, 15, calcSum));