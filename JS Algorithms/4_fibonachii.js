
function fibonachii (n) {
    console.log(n)
    if(n === 1 || n === 2) {
        return 1
    }
    return fibonachii(n-1) + fibonachii(n-2)
}

console.log(fibonachii(8))