import React from "react";
import s from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";



const MessagesItem = (props) => {

    return (
        <div className={s.message}>{props.message}</div>
    )
}

const DialogsItem = (props) => {
    let link = "/dialogs/" + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={link} className={s.name}>{props.name}</NavLink>
        </div>
    )
}

const Dialogs = (props) => {

    let sendDialogElement = React.createRef();

    let sendMessage = () => { 
        let text = sendDialogElement.current.value;
        alert(text) 
    }


    let dialogsElements = props.state.dialogs.map(d => <DialogsItem id={d.id} name={d.name} />)
    let messagesElements = props.state.messages.map(m => <MessagesItem id={m.id} message={m.message} />)


    return (
        <div className={s.dialogsFull}>
            <div className={s.dialogs}>
                <div className={s.dialogItem}>
                    {dialogsElements}
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.messagesItem}>
                    {messagesElements}
                    <div className={s.textArea}>
                        <textarea ref={sendDialogElement}></textarea>
                    </div>
                    <div className={s.sendButton}>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs