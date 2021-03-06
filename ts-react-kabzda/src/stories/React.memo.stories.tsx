import React, {useState} from "react";

export default {
    title: 'React.meme demo'
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)
// контейнерная компонента, которая вылезет из РеактМемод не будет перезапускать
// UsersSecret, если пропсы не изменились
export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem']);

    const addUser = () => {
    const newUsers = [ ...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}/>
        <button onClick={addUser} >add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}