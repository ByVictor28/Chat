import React from 'react'
import classes from "./User.module.scss"

const User = (props)=>{ 
return (
    <div className={classes.User}>
        <img src="/images/face_1.jpg" alt="user"/>
        <span>Victor Manuelñ</span>
    </div>
) 
}

export default User
