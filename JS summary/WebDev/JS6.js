
// noinspection JSAnnotator

/*function greet(name) {
    console.log(`Hello ${name}!`);
}

const API_URL = `${URL}/${path1}/${path2}/${path3}/`
console.log(API_URL)

function emailMessage(name, mail, status) {
    return `
    Hello ${name},
    Your email ${mail} has been ${status}!
    Thank you for subscription!
    `
}

const FUNC = () => {};

(a,b) => {
    let sum = a + b;
    return sum;
};

a => {
    let sum = a + 1
    return sum
};

() => {
    let sum = a + b;
return sum
};
a => a * 2;
(a, b) => a*b;

(() => {null})();

person = {
    userName: 'Jack',
    greet: function () {
        window.setTimeout(() => {
            console.log(this.userName, this);
    },1000);
};
    const names = ['Jack', 'Max', 'Leo'];
    for(let name in names) {
    console.log(name)};
    }
    for(let index in names) {
    console.log(name[index])
    }

const names = ['Jack', 'Max', 'Leo'];
for(let name of names) {
    console.log(name)
};
/*
let name = 'Jack';
let sex = 'male';
let age = 20;

let person = {
    name,
    sex,
    age,
    greet()  {
        console.log(`Hello ${this.name}`)
    },
    get password() {
        return this.name + this.age;
    },
}

person.name;
person['name'];

let firstName = 'name';
person[firstName];

person = {
    [firstName]: 'Max'
}
console.log(person)
class Task {
    constructor(title = Task.getDefaultTitle(), isCompleted = false) {
        this.title = title
        this.isCompleted = isCompleted
        Task.counter += 1
    }
    static getDefaultTitle() {
        return "Title text"
    }
    completed() {
        this.isCompleted = true;
    }
    get isCompleted() {
        return this._isCompleted === true ? 'task is completed' : 'task is not completed'
    }
}
Task.counter = 0;

let task = new Task('Learn ES6', false);
let task2 = new Task("Learn ReactJS", true);
let task3 = new Task('Learn ES6', false)
*/
/*
class Task {
constructor(title = '') {
    this.title = title,
    this.isCompleted = false
}
    completed() {
    this.isCompleted = true;
    }
}

class SubTask extends Task {
    constructor(title) {
        super(title);
    }
        completed() {
        super.completed();
        console.log(`task ${this.title} is completed!`)
    }
}

let task = new Task('Learn ReactJS');
let subTask = new SubTask('Learn ES6');

const people = ['Jack', 'Max', 'Leo'];

let [jack, max, leo] = ['Jack', 'Max', 'Leo'];

const rate = [1, 50, 100, [1000, 2000]];
let [low, middle, high, [higher, sup]] = rate

function calculate(a, b) {
console.log(a, b);
}
function calculate([a, b]) {
return [a,b]
}

let res = calculate([1,10])
console.log(res) */
/*
//Деструктивное присваивание объектов
let person = {
    name: 'Jack',
    age: 20,
    address: { city: 'Minsk'}
}
//let {name, age} = person
//let { name: personName, age: personAge} = person
//let {address: { city = 'Brest' } } = person
//console.log(city)

function getData({ name, age}) {
//console.log(name, age)
    return { name, age }
}
//let res = getData(person);
//console.log(res);

let {name, age} = getData(person);
console.log(name, age); */

//Символы - уникальное и неизменное значение (создать 2 одинаковых симбола невозможно, это новый примитивный тип данных), решающая проблему конфликта имен свойств объектов.
// let symbol = Symbol.for('mySymbol');
// let symbol2 = Symbol.for ('mySymbol');
// let symbolName = Symbol.keyFor(symbol)
// console.log(symbolName);

// let person = {
//     name: 'Jack',
//     age: 20,
//     [Symbol.for('password')]: "jack20",
//     [Symbol.for('nickname')]: "Freeman",
//
// }
// // console.log(person[Symbol.for('password')]);
// console.log(Object.getOwnPropertySymbols(person))

//PROMISE упрощение работы асинхронного (непоследовательно) кода, добавить понятный синтаксис.

// const promise = new Promise((resolve, reject) => {
//     throw new Error('some error...');
//     setTimeout(() => {
//         if (true) {
//             resolve('promise completed!');
//         } else {
//             reject();
//         }
//     }, 1000)
// })
//
// promise
//  .then(data => console.log(data))
//  .catch(error => console. log(error));
//
// fetch("")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .then(data => console.log('!!!', data))
//     // .then(data => render(data))
//     .catch(() => console.log('some error'))

// Async/Await легко взаимодействует с промисом и вводит синтаксис синхронного когда в асинхронный
//
// const fetchData = () => Promise.resolve({
//     data: ['Jack', 'Max', 'Leo']
// })
// const getNamesData = () => {
// fetchData()
//     .then(data => {
//         console.log(data);
//         return 'done';
//     })
// }
//
// const getNamesData2 = async () => {
//     console.log(await fetchData());
//     return 'done';
// }
//
// getNamesData();
// getNamesData2();
// console.log(getNamesData2());
//
// const fetchData = () => Promise.reject('some error...');
// const getNamesData = async () => {
//     try {
//         console.log(await fetchData());
//     } catch(error) {}
//
// }
// getNamesData()

// Итераторы объекты - можно перебрать все эелемнты один за другим

// let names = ['jack', 'max', 'leo'];
// for (let name of names) {
//     console.log(name);
// }
//
// let generateNumbers = {
//     start: 1,
//     end: 10,
//
// }
//
// generateNumbers[Symbol.iterator] = function () {
//     let current = this.start;
//     let last = this.end;
//
//     return {
//         next() {
//             if (current <= last) {
//                 return {
//                     done: false,
//                     value: current++
//                 }
//             } else {
//                 return {
//                     done: true
//                 }
//             }
//         }
//     }
// }
//
// for (let number of generateNumbers) {
//     console.log(number);
// }

