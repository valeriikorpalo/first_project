import React from "react";
import s from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";



const MessagesItem = (props) => {

    return (
        <div className={s.messageContainer}>
            <div className={s.dialogItems}>
                <div className={s.dialogItem}>
                    <img className={s.dialogAvatarItem}
                        src={props.img} />
                    <div className={s.dialogNameItem}>{props.userName}</div>
                </div>
            </div>
            <div className={s.message}><a>{props.message}</a></div>
        </div>
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
        props.addMessage(text)
        sendDialogElement.current.value = '';
    }


    let dialogsElements = props.state.dialogs.map(d => <DialogsItem id={d.id} name={d.name} />)
    let messagesElements = props.state.messages.map(m => <MessagesItem id={m.id} message={m.message} userName={m.username} img={m.img} />)


    return (
        <div className={s.dialogsFull}>
            <div className={s.dialogs}>
                <div className={s.dialogItem}>
                    {dialogsElements}
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.messagesItem}>
                    <div className={s.messageItem}>
                        {messagesElements}
                    </div>
                    <div className={s.textArea}>
                        <textarea className={s.textAreaItem} ref={sendDialogElement}></textarea>
                    </div>
                    <div className={s.sendButton}>
                        <button className={s.sendButtonItem} onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs