import React,{useState} from 'react'
import { MdArrowBack, MdExitToApp, MdFace, MdSettings, MdSettingsInputComposite } from 'react-icons/md'
import User from '../../UI/User/User'
import classes from "./Sidebar.module.scss"

const Sidebar = ()=>{ 
    const [visibilityMenu, setVisibilityMenu] = useState(false);

    const changeVisibility = () =>{
        setVisibilityMenu(!visibilityMenu)
    }
return (
    <div className={classes.Sidebar}>
        <div className={`${classes.Header} sombra`}>
            <MdArrowBack/>
            <h4>All channels</h4>
        </div>
        <div className={classes.Content}>
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
