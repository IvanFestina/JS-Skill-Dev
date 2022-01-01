import React, {ChangeEvent, useRef, useState} from 'react';
import {Action} from "@storybook/addon-actions/dist/ts3.9/components/ActionLogger/style";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledInput',
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    return <> <input onChange={onChange}/> - {value} </>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return <> <input ref={inputRef}/>
        <button onClick={save}>save</button>
        - {value}
    </>
}
export const ControlledInput = () => {
    const [parentValue, setParrentValue] = useState<string>('')
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParrentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeInputHandler}/>
}
export const ControlledCheckbox = () => {
    const [parentValue, setParrentValue] = useState<boolean>(true)
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParrentValue(e.currentTarget.checked)
    }
    return <input type={'checkbox'} checked={parentValue} onChange={onChangeInputHandler}/>
}
export const ControlledSelect = () => {
    const [parentValue, setParrentValue] = useState<string | undefined>('')
    const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParrentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeSelectHandler}>
        <option>none</option>
        <option value={1}>Minsk</option>
        <option value={2}>Moscow</option>
        <option value={3}>Kiev</option>
    </select>
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>

