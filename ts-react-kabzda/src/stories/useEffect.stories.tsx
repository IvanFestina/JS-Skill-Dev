import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}
export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        debugger
        console.log('useEffect')
        document.title = counter.toString();
    }, [counter])
    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SetTimeoutExample')
    //через секунду обновить
    // useEffect(() => {
    //     setTimeout(( ) => {
    //             console.log('useEffect setTimeout')
    //     document.title = counter.toString();
    //      }, 5000)
    // }, [counter])
    //каждую секунду обновляй
    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [])

    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
    </>
}