import React, {useState} from "react";

export default {
    title: 'useState demo'
}

function generateData() {
    console.log('generateData')
    return 32832234;
}

export const Example1 = () => {
    console.log('Example1');
    const [counter, setCounter] = useState(generateData) //делаем так кодга у нас сложный синхронный подсчет

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}