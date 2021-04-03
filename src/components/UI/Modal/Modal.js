import React,{useState} from 'react'
import { MdClose } from 'react-icons/md'
import classes from "./Modal.module.scss"

const Modal = ({show,toogle})=>{
    
return (
    <>
    {show&&
        <div className={classes.Back}>
            <div className={classes.Modal}>
                <div className={classes.Header}>
                    <h4>New channel</h4>
                    <MdClose onClick={toogle}/>
                </div>
                <form>
                    <input type="text" placeholder="Channel name"/>
                    <input type="text" placeholder="Channel Desciption"/>
                    <button className="button">Save</button>
                </form>
            </div>    
            
        </div>
    }
    </>
) 
}

export default Modal
