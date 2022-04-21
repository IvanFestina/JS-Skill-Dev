import s from './AnalogClock.module.css'
import {useEffect, useState} from "react";


export function AnalogClock() {
    const [time, setTime] = useState<Date>(new Date())

    useEffect(() => {

        const interval = setInterval(() => setTime(new Date()), 1000)


        let hr = time.getHours()
        const min = time.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
        const sec = time.getSeconds()

        const hourHand = document.getElementById('hourHand')
        const minuteHand = document.getElementById('minuteHand')
        const secondHand = document.getElementById('secondHand')
        const digital = document.getElementById('digital')

        //@ts-ignore
        hourHand.style.transform = `rotate(${hr * 30 + min * 0.5 - 180}deg)`
        //@ts-ignore
        minuteHand.style.transform = `rotate(${min * 6 - 180}deg)`
        //@ts-ignore
        secondHand.style.transform = `rotate(${sec * 6 - 180}deg)`
        //@ts-ignore
        digital.innerHTML = hr + ' : ' + min + ' ' + sec

        return () => {
            clearInterval(interval)
        }
    }, [time])

    return (
        <div>
            <div className={s.digital} id={'digital'}/>
            <div className={s.clock}>
                <div className={s.face}>
                    <div className={`${s.hand} ${s.second}`} id={'secondHand'}/>
                    <div className={`${s.hand} ${s.minute}`} id={'minuteHand'}/>
                    <div className={`${s.hand} ${s.hour}`} id={'hourHand'}/>
                    <div className={s.center}/>
                </div>

            </div>
        </div>
    )
}