import React from 'react'
import classes from "./Main.module.scss"
import Panel from './MessagesPanel/Panel'
import Sidebar from './Sidebar/Sidebar'

const Main = ()=>{ 
return (
    <div className={classes.Container}>
        <Sidebar/>
        <Panel/>
    </div>
) 
}


export default Main
