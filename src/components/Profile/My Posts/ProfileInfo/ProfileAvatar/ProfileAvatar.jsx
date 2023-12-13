import React from "react"
import s from "./ProfileAvatar.module.css"
import ProfileDescription from "../Profile Description/ProfileDescription"




const ProfileAvatar = (props) => {
    return (
        <div className={s.descriptionBlock}>
            <div className={s.descriptionAvatar}><img className={s.avatarImg}
                src='https://vote.dem-alliance.org/wp-content/uploads/2015/10/Pavlovska_sc-600x600.jpg'
                alt='profile_img'></img>
            </div>
            <ProfileDescription />
        </div>
    )
}

export default ProfileAvatar