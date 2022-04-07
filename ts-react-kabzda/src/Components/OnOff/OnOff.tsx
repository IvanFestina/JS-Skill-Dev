import React, {MouseEvent} from "react";
import s from './OnOff.module.css'


type LightsType = {
    lights: boolean
    setLights: (lights: boolean) => void
}

export const OnOff = (props: LightsType) => {
    const onClassName = props.lights ? s.sqGreen : s.sq
    const offClassName = !props.lights ? s.sqRed : s.sq
    const littleButtonClassName = props.lights ? s.cirGreen : s.cirRed
    const setLightsTrue = (event: MouseEvent<HTMLDivElement>) => {
        props.setLights(true)
    }
    const setLightsFalse = (event: MouseEvent<HTMLDivElement>) => {
        props.setLights(false)
    }

    return (
        <div className={s.panel}>
            <div className={onClassName} onClick={setLightsTrue}>ON</div>
            <div className={offClassName} onClick={setLightsFalse}>OFF</div>
            <div className={littleButtonClassName}/>
        </div>
    )
}