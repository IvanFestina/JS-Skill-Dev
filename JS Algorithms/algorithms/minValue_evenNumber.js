const minValue = (arr) => {
    if (arr.length < 1) return 'wrong array'
    let minVal = arr[0]  // 1
    for (let i = 0; i < arr.length; i++) { // 1
        if (arr[i] < minVal) { // n
            minVal = arr[i] // 0 {Best Case), n - 1 {Worst Case}
        }
    }
    return minVal // 1
}

//Best Case: [1, 2, 3] O(n) with Asymptotic analysis
//Worst Case: [3, 2, 1] O(n)
//Average Case: [2, 1, 3] O(n)

console.log(minValue([5, 2, 6, 33, 6, 23, 45, 1, -5, 10]))

const evenNum = (n) => n % 2 === 0

console.log(evenNum(3))

// Constant Time Complexity