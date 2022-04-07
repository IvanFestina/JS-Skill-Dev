import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}
export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
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
        console.log('tick' + counter)
        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
    }, [])

    return <>
        Hello, counter: {counter}
    </>
}

export const ClockExample = () => {
    const [date, setDate] = useState<Date>()

    useEffect( () => {
        setInterval( () => {
            setDate(new Date())
        }, 1000)
    }, [date])
    const localDate = date?.toLocaleTimeString()

    return <>
        {localDate}
    </>
}