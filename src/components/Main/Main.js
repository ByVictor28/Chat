import React,{useState} from 'react'
import classes from "./Main.module.scss"
import Panel from './MessagesPanel/Panel'
import Sidebar from './Sidebar/Sidebar'

const Main = ()=>{ 
    const [menuOpen, setMenuOpen] = useState(false);

    const toogleMenu = () =>{
        setMenuOpen(!menuOpen);
    }
return (
    <div className={classes.Container}>
        <Sidebar menuOpen={menuOpen} click={toogleMenu} />
        <Panel click={toogleMenu}/>
    </div>
) 
}


export default Main
