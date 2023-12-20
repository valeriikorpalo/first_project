import React from "react"
import s from "./ProfileIHead.module.css"


const ProfileHead = (props) => {
    return (
        <div className={s.container}>
            <div className={s.profileImg}>
                <img className={s.img}
                    src='https://i.pinimg.com/originals/9f/bf/a3/9fbfa33d37cb8fbf9e81b31b62331ba4.jpg'
                    alt="profile_img" />
            </div>
        </div>
    )
}

export default ProfileHead