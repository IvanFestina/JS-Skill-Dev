//ПРИМИТИВЫ: string, number, boolean, null, underfined, NaN, Infinity, Symbol, BigInt
//Объекты: Array , Function, Set
// 1) Примитивы отличаются от объектов более сложной структурой
// 2) Это ссылочный тип данных

// typeof не является примым - для определения типов данных - он работает не интуитивно понятным образом
// оператор typeof возвращает строку, в консоли этого не видно, потому-что это особенности браузера
// (Array.isArray([])) если мы хотим провериться на массив, метод глобального объекта array is array
// Number.isNaN()  если мы хотим проверить на NaN
// Number.isFinite() - проверяет на конечное ли число
// user = {} - это не объект, это литерал объекта, это набор печатных объектов, его читает инерпретатор, в памяти создается объект, со сложной структурой. Он содержит уже пустой, много возможностей.
// объект - чемодан тяжелый, их как значения передовать тяжело, поэтому мы в переменную записываем ссылку на ячейку памяти, ссылку на объект.
// у нас могут быть одинаковые, но не одни и те же объекты
// не изменяя исходную структуру данных - неиммутабельным - мы будем работатт, чтобы не изменять содержание
// мы будем создавать копию и менять эту копию. Будем создавать точно такой же автомобиль, но с другим номером.
console.log(Array.isArray([]))

// const num = 35
// let nextNum = num // 35
// nextNum = 44

// const user = {} // #467
// const nextUser = user // #467
// nextUser.name = 'Bob'
// console.log(user)

// const user = {} // #5
// const nextUser = {} // #0004
// console.log({} === {}) // false - это два разных объекта, ссылки которых мы не сохранили, и они нигде нам не доступны.
// console.log(user === nextUser) //false
//
// в них лежат разные значения, разные объекты, это номерки от разных камер хранения и не могут быть равны.
const user = {
    name: 'Bob'
}
const userList = [{
    name:'Alex'
}]
const nextUserList = [user, ...userList]
nextUserList.push(user)
// если нам надо вносить изменения 1) создаем копию
// 2) вносим изменения
//копию с изменениями вносим в Реакт
const copyUser = {...user, age: 23, friends: [], name: 'Helen'}

const user = {
    age: 23,
    name: 'Helen',
    friends: ['Bob', 'Alex']
}
const copyUser = {...user}

copyUser.friends.push('Donald')

//поверхностная копия (без учета вложенности) и полная копия

const copyUser = {...user, friends: [...user.friends]} // это называется полное или глубокое копирование объекта user

const copy2 = JSON.parse(...user, friends: [...user.friends])


//Библиотека lodash - очень распространенная бибилиотека для глубокого копирования
// https://lodash.com/docs/4.17.15#cloneDeep
//  _.cloneDeep(value) - позволяет выполнить копирование любой сложности, влюбой вложенности.
//

const users = [
    {
    name: 'Alex',
    age: 23
    },
    {
    name: 'Bob',
    age: 26
    },
    {
    name: 'Mike',
    age: 19
    },
    {
    name: 'Helen',
    age: 18
    }
]

// массив - это разновидность объектов. значит есть функции, которые доступны от рождения
//map - отображение или преобразование в новый массив
//
// const mapUsers = users.map(user => {
//     if(user.name === 'Alex') {
//         return {...user, age: 24}
//     }
//     return user
// })

    const mapUsers = users.map(user => user.name === 'Alex' ? {...user, age: 24} : user)

    const greetings = users.map(u => `Hi! I'm ${user.name}. I'm ${u.age}`)