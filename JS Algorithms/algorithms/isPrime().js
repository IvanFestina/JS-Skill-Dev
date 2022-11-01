// const isPrime = (n) => {
//     if(n === 2 || n === 3) return true
//     let check1 = n / 2;
//     let check2 = n / 3;
//     return !(Number.isInteger(check1) || Number.isInteger(check2))
// }
//
// console.log(isPrime(97 ))
// console.log(isPrime(11))

// const isPrime = (n) => {
//     let counter = 0
//     for (let i = 2; i < n; i++) {
//         if ((n / i) % 1 === 0) {
//         counter++
//         }
//     }
//     return counter === 0
// }

const isPrime = (n) => {
    for (let i = 2; i < Math.sqrt(n); i++) {
        if( n % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(97))
console.log(isPrime(11))
