import React,{useState} from 'react'
import { MdArrowBack, MdCancel, MdExitToApp, MdFace, MdSettings } from 'react-icons/md'
import User from '../../UI/User/User'
import Group from './Group/Group'
import Inicio from './Inicio/Inicio'
import classes from "./Sidebar.module.scss"

const Sidebar = ({menuOpen,click})=>{ 
    const [visibilityMenu, setVisibilityMenu] = useState(false);
    const [showMembers, setShowMembers] = useState(false);
    
    const changeVisibility = () =>{
        setVisibilityMenu(!visibilityMenu);
    }
return (
    <div className={`${classes.Sidebar} ${menuOpen?classes.Open:""}`}>
        <div className={classes.CloseMenu}>
            <MdCancel size="2rem" onClick={click}/>
        </div>
        <div className={`${classes.Header} sombra`}>
            <MdArrowBack/>
            <h4>All channels</h4>
        </div>
        <div className={classes.Content}>
            {
                !showMembers?
                    <Inicio/>
                :
                    <Group/>
            }
        </div>
        <div className={classes.Footer}>
            <User/>
            <MdSettings onClick={changeVisibility} />
            <div className={classes.Menu} style={{visibility:`${visibilityMenu?"visible":"hidden"}`}}>    
                <a href="/login">
                    <MdFace/>
                    Social
                </a>
                <div className={classes.Divider}>                    
                </div>
                <a href="/login">
                    <MdExitToApp />
                    Logout
                </a>
            </div>
        </div>
    </div>
) 
}

export default Sidebar
