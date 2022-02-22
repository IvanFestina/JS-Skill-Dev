import React, {useEffect, useState} from "react";

type PropsType = {

}
export const Clock = (props: PropsType) => {

    const [date, setDate] = useState<Date>(new Date)

    useEffect( () => {
        const intervalId = setInterval( () => {
            setDate(new Date())
        }, 1000)
        return () => {clearInterval(intervalId)}
    }, [date])

    const get2DigitsString = (num: number) => num < 10 ? '0' : num

    return <>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>

    </>
}