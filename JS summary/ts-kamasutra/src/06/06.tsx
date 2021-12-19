import React, {ChangeEvent, MouseEvent} from "react";

const callback = () => {
    alert('hey')
:
    12;
}
window.setTimeout(callback, 1000)

export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget
        alert('user deleted')
    }
    const saveUser = () => {
        alert('user have been saved')
        // doctor.help();
        // teacher.teach();
    }
    const onNameChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('age changed: ' + event.currentTarget.value)
        console.log('name changed')
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }
    return <div><textarea
        onChange={onNameChanged}
        onBlur={focusLostHandler}>Dimych</textarea>
        <input/>
        <button name='delete' tabIndex={2} onClick={deleteUser}>delete</button>
        <button name='save' tabIndex={0} onClick={saveUser}>save</button>
    </div>
}