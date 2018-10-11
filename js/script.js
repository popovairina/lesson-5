'use strict';

let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(i+1);
}

console.log(arr);
arr.forEach(function (item) {
    if (isPrime(item)) {
        console.log('Делители этого числа 1 и ' + item);
    }
});

function isPrime(num) {
    if (num === 0 || num === 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}