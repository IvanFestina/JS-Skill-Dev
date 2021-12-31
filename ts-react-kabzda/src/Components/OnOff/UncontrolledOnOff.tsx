import React, {MouseEvent, useState} from "react";
import s from './OnOff.module.css'
// type LightsType = {lights: boolean}

type UncontrolledOnOffPropsType = {
    onChange: (lights: boolean) => void
}

export const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {

    let [lightsOn, setLightsOn] = useState<boolean>(true)

    const onClassName = lightsOn ? s.sqGreen : s.sq
    const offClassName = !lightsOn ? s.sqRed : s.sq
    const littleButtonClassName = lightsOn ? s.cirGreen : s.cirRed
    const setLightsTrue = (event: MouseEvent<HTMLDivElement>) => {
        setLightsOn(true)
        props.onChange(true)
    }
    const setLightsFalse = (event: MouseEvent<HTMLDivElement>) => {
        setLightsOn(false)
        props.onChange(false)

    }

    return (
        <div className={s.panel}>
            <div className={onClassName} onClick={setLightsTrue}>ON</div>
            <div className={offClassName} onClick={setLightsFalse}>OFF</div>
            <div className={littleButtonClassName}/>
        </div>

    )
}