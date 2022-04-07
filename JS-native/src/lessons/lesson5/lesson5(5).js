
// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

let someObj = {
    name: 'Eugene',
    age: 32
}

 function greeting () {
    return `My name is ${this.name}. I am ${this.age}`
}
someObj.greeting = greeting
console.log(someObj.greeting())


