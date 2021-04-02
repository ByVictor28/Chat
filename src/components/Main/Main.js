import React from 'react'
import classes from "./Main.module.scss"
import Sidebar from './Sidebar/Sidebar'

const Main = ()=>{ 
return (
    <div className={classes.Container}>
        <Sidebar/>
    </div>
) 
}

export default Main
