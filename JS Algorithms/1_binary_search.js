const arr = [0,1,2,3,4,5,6,7,8,10,11,12,13,14,15]
let count = 0

function recursiveBinarySearch(arr, item, start, end) {
    let middle = Math.floor((start + end) / 2)
    count += 1
    if (item === arr[middle]) {
        return middle
    }
    if (item < arr[middle]) {
        return recursiveBinarySearch(arr, item, start, end -1)
    } else {
        return recursiveBinarySearch(arr, item, middle + 1, end)
    }
}

console.log(recursiveBinarySearch(arr, 12, 0, arr.length))
console.log(count)