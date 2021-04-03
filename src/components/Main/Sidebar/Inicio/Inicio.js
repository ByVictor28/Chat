import React,{useState} from 'react'
import { MdAdd, MdSearch } from 'react-icons/md'
import Group from '../../../UI/Group/Group'
import Modal from '../../../UI/Modal/Modal'
import classes from "./Inicio.module.scss"

const Inicio = (props)=>{ 
    const [showModal, setShowModal] = useState(false);
    const toogleShowModal = () => {
        setShowModal(showModal => !showModal);
    }
return (
    <>
        <div className={classes.Search}>
            <MdSearch size="2rem"/>
            <input type="text" name="" placeholder="Search"/>
        </div>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
        <button className="button" onClick={toogleShowModal}><MdAdd size="3rem" color="white"/></button>
        <Modal show={showModal} toogle={toogleShowModal}/>
    </>
) 
}

export default Inicio
