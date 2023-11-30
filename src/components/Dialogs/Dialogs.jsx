import React from "react";
import s from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";



const DialogItem = (props) => {
    let path = "/dialogs/"

    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
   
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogsFull}>
            <div className={s.dialogs}>
                <div className={s.dialogItem}>
                    <DialogItem name='Robert' id='1' />
                    <DialogItem name='Robert' id='2' />
                    <DialogItem name='Robert' id='3' />
                    <DialogItem name='Robert' id='4' />
                    <DialogItem name='Robert' id='5' />
                    <DialogItem name='Robert' id='6' />
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.messagesItem}>
                    <Message message='Hi' />
                    <Message message='How Are U?' />
                    <Message message='Tnx I fine, U?' />
                </div>
            </div>
        </div>
    )
}

export default Dialogs