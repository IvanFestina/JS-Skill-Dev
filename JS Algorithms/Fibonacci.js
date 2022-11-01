function fibonacci(n) {
    console.log(n)
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

// console.log(fibonacci(8))
//
// function calculateNthElement(n) {
//     const fibonacciArray = [1, 1]
//     while (fibonacciArray.length <= n) {
//         console.log(fibonacciArray)
//         fibonacciArray
//             .push(fibonacciArray[fibonacciArray.length - 2] + fibonacciArray[fibonacciArray.length - 1])
//     }
//     return fibonacciArray[n - 1]
// }

// console.log(calculateNthElement(5))

function fibN(n) {
    const numbers = [1, 1];
    let count = 0;
    for (let i = 2; i < n + 1; i++) {
        count++
        numbers.push(numbers[i - 2] + numbers[i - 1])
    }
    console.log(count)
    return numbers[n]

}
//T = 1 + 1 + 1 + n - 1 = 3 + n-1
console.log(fibN(5))
// Return the nth element of the Fibonacci sequence
// 1) Calculate the sequence up to the element we are looking for
// 2) Return that element