import React, {useState} from "react";
import s from './OnOff.module.css'
// type LightsType = {lights: boolean}

export const OnOff = (props: any) => {

    let [lights, setLights] = useState<boolean>(true)

    return (
        <div className={s.panel}>
            <div className={lights ? s.sqGreen : s.sq} onClick={() => setLights(true)}>
                ON
            </div>
            <div className={!lights ? s.sqRed : s.sq} onClick={() => setLights(false)}>
                OFF
            </div>
            <div className={lights ? s.cirGreen : s.cirRed}/>
        </div>
    )
}