import React from 'react'
import User from '../../../UI/User/User'
import classes from "./Group.module.scss"

const Group = (props)=>{ 
return (
    <>
        <h4>FRONT-END DEVELOPERS</h4>
        <p>
            Pellentesque sagittis elit enim, 
            Sit amet ultrices tellus accumsan 
            quis, In gravida mollis purus, at 
            interdum arcu tempor non 
        </p>
        <h4>MEMBERS</h4>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
    </>
) 
}

export default Group
