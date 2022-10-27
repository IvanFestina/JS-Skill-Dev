const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32] // [0,1,1,2,3.......]
let count = 0

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j + 1] < arr[j]) {
//                 let tmp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = tmp
//             }
//             count += 1
//         }
//     }
//     return arr
// }
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                let tmp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = tmp
            }
                        count += 1
        }
    }
    return arr
}

console.log(bubbleSort(arr))
console.log('count = ', count)