import React from "react"
import s from "./ProfileIHead.module.css"


const ProfileHead = (props) => {
    return (
        <div className={s.profileImg}>
            <img className={s.img}
                src='https://as2.ftcdn.net/v2/jpg/00/60/25/69/1000_F_60256950_YNDObnf2KWz7YO3Q4JdpM2VTsVreQy8p.jpg'
                alt="profile_img" />
        </div>
    )
}

export default ProfileHead