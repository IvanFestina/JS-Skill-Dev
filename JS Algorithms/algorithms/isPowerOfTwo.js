
// const isPowerOfTwo = (n) => {
//     if(n < 1) {
//         return false
//     }
//     let dividedByTwo = n
//     while(dividedByTwo !== 1) {
//         if(dividedByTwo % 2 !== 0) {
//             return false
//         }
//         dividedByTwo = dividedByTwo / 2
//     }
//     return true
// }

//Best case: number = 13 => O(1);
//Worst case: 1,123,899,906,842,624 => O(log n);
//Average Case: O(log n);

// console.log(isPowerOfTwo(8))

// BITWISE MAGIC!

const isPowerOfTwoBitWise = (n) => {
    if(n < 1) {
        return false;
    }
    return (n & (n-1)) === 0
}
console.log(isPowerOfTwoBitWise(7))
