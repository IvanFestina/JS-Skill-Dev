//
// const factorial = (n) => {
//     if(n <= 1) return n;
//     return n * factorial(n-1)
// }
//
// console.log(factorial(10))

const factorial = (n) => {
    let num = 1
    for (let i = 2; i <= n; i++) {
        num *= i
    }
    return num
}

console.log(factorial(10))