import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {

    return (
        <div>
            <div>
                <img className={s.img} src='https://img.freepik.com/free-photo/a-painting-of-a-mountain-lake-with-a-mountain-in-the-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699660800&semt=ais' alt="no img" />
            </div>
            <div className={s.descriptionBlock}>
                avatar + Description
            </div>
        </div>
    )
}

export default ProfileInfo