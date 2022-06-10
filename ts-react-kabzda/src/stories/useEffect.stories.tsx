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

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [date])
    const localDate = date?.toLocaleTimeString()

    return <>
        {localDate}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('ResetEffectExample')

    useEffect(() => {
        console.log('Effect occurred')

        return () => {
            console.log('Reset occurred')
        }
    }, [])

    return <>
        Hello, counter: {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
    </>
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        };
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <div>
        Typed text: {text}
    </div>
}
