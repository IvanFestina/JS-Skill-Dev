const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32] // [0,1,1,2,3.......]
let count = 0

function selectionSort (arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i;
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[indexMin]) {
                indexMin = j
            }
            count += 1;
        }
        let tmp = arr[i];
        arr[i] = arr[indexMin];
        arr[indexMin] = tmp
    }
    return arr
}
//
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let minInd = i;
//         for (let j = i+1; j < arr.length ; j++) {
//         if(arr[j] < arr[minInd]) {
//             let tmp = arr[minInd];
//             arr[minInd] = arr[j];
//             arr[j] = tmp
//             console.log(minInd)
//         }
//         }
//     }
//     return arr
// }

console.log(selectionSort(arr))
console.log('count = ', count)