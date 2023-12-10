import React from "react";
import s from './ProfileInfo.module.css';

const ProfileHead = (props) => {
    return (
        <div className={s.profileImg}>
            <img className={s.img}
                src='https://as2.ftcdn.net/v2/jpg/00/60/25/69/1000_F_60256950_YNDObnf2KWz7YO3Q4JdpM2VTsVreQy8p.jpg'
                alt="profile_img" />
        </div>
    )
}

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

const ProfileDescription = (props) => {
    return (
        <div className={s.descriptionsProfile}>
            <div className={s.descriptionItem}>
                <h2 className={s.nameProfile}>Jessica Decay <span className={s.status}></span></h2>
            </div>
            <div className={s.bioItems}>
            <div className={s.bioItem}>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className={s.bioItem}>Age: 32</div>
            <div className={s.bioItem}>Country/City: USA, Washington DC </div>
            <div className={s.bioItem}>Hobbies: Sports, Travels, TV Shows, Video Games</div>
            </div>
        </div>
    )
}

const ProfileInfo = (props) => {

    return (
        <div>
            <ProfileHead />
            <ProfileAvatar />
        </div>
    )
}

export default ProfileInfo