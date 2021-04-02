import React,{useState} from 'react'
import classes from "./Login.module.scss"
import {MdSend} from "react-icons/md"
import {Link} from "react-router-dom"
const Login = ()=>{ 
    const [userName, setUserName] = useState("")
    
    const submitHandler = (e) =>{
        e.preventDefault()
    }

return (
    <div className={classes.Container}>
        <div className={`${classes.Login} sombra`}>
            <h2>Login</h2>
            <form className={classes.Form} onSubmit={submitHandler}>
                
                <input type="text" name="user" id="user" placeholder="User" onChange={(event) => setUserName(event.target.value)}/>
                
                <Link className="button" to={`/main?user=${userName}`}><MdSend size="1.8rem" color="white" /></Link>

            </form>
        </div>
    </div>
) 
}

export default Login
