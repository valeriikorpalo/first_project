import React from "react"
import s from "./ProfileDescription.module.css"


const ProfileDescription = (props) => {
  
    return (
        <div className={s.descriptionsProfile}>
            <div className={s.descriptionItem}>
                <h2 className={s.nameProfile}>Jill Valentine <span className={s.status}></span></h2>
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

export default ProfileDescription