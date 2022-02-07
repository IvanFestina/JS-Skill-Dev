import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo',
}
export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)
    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random()
            }
            resultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret')
    return <div>
        {props.users.map((u, i) => <div>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)
// контейнерная компонента, которая вылезет из Реакт.Мемо не будет перезапускать
// UsersSecret, если пропсы не изменились
export const ReactMemoHelper = () => {
    console.log('ReactMemoHelper')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem']);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}/>
        {counter}
        <Users users={newArray}/>
    </>
}


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'TS', 'CSS']);


    const memorisedAddBook = useMemo(() => {
        return () => {
        console.log(books)
        setBooks([...books, 'Angular ' + new Date().getTime()])
    }
    }, [books])


    const memorisedAddBook2 = useCallback(() => {
        console.log(books)
        setBooks([...books, 'Angular ' + new Date().getTime()])
    }, [books]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memorisedAddBook}/>
    </>
}
type BookSecretPropsType = {addBook: () => void}
const BooksSecret = (props: BookSecretPropsType) => {
    console.log('UsersSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}
const Book = React.memo(BooksSecret)