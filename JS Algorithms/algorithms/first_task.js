
const array = [1,2,3,4,5,6,7,8,9]

const sumNum = (numArr) => {
    let sum = 0
    for (let i = 0; i < numArr.length; i++) {
        sum += numArr[i] //0 => n
    }
    return sum
    // return numbers.reduce((sum, curNum) => sum + curNum, 0)
}

console.log(sumNum(array))

// Time Complexity O(n)
//T = 3 + n = 3 + 1*n
//T = 1*n //remove coefficient
//T = n => Linear Time Complexity