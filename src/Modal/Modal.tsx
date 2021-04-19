import React, { SyntheticEvent } from "react";
import { ModalType } from "../Types/types";
import './modall.scss'



const Modal = ({modalActive, onClickModalHandler, name, surname}: ModalType) => {
    const btnHandler = (e: SyntheticEvent) => {
        e.stopPropagation()
        onClickModalHandler()
    }
    const openNodal = () => onClickModalHandler()
    return (
        <div className={modalActive ? 'modal active' : 'modal'} onClick={openNodal}>
            <div className="modal_content">
                <button onClick={btnHandler} className="button">x</button>
                <p className="text">{`Здравствуйте, ${name} ${surname}`}</p>
            </div>
        </div>
    )
}

export default Modal
