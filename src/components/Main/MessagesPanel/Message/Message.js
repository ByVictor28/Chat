import React from 'react'
import classes from "./Message.module.scss"

const Message = (props)=>{ 
return (
    <div className={classes.Message}>
        <div className={classes.Image}>
            <img src="/images/face_1.jpg" alt="user"/>
        </div> 
        <div className={classes.Data}>
            <div className={classes.Details}>
                <span>Victor Manuel Delfin Santos</span>
                <span>22 de abril de 2001</span>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde deserunt tempore dolores eveniet, illo doloremque molestias sed asperiores fugiat reprehenderit cum error itaque nesciunt velit ducimus accusantium, perspiciatis quidem odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis provident exercitationem eum consequatur officiis quidem cum nulla amet sit, corporis voluptas facilis iusto voluptatum voluptate dicta architecto earum esse molestias.</p>
        </div>
    </div>
) 
}

export default Message
