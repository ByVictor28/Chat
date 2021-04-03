import React from 'react'
import { MdSend } from 'react-icons/md'
import Date from './DateMessage/Date'
import Message from './Message/Message'
import classes from "./Panel.module.scss"

const Panel = ()=>{ 
return (
    <div className={classes.Panel}>
        <div className={`${classes.Header}`}>
            <h4>FRONTEND-DEVELOPERS</h4>
        </div>
        <div className={classes.Content}>
            <Message/>
            <Message/>
            <Date/>
            <Message/>
            <Message/>            
        </div>
        <div className={classes.Footer}>
            <input type="text" name="mesage" placeholder="Type a message here"/>
            <button className={"button"}>
                <MdSend color="white" size="2rem"/>
            </button>
        </div>
    </div>
) 
}

export default Panel
