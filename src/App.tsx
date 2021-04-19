import React, {ChangeEvent, useState} from 'react';
import {inject, observer} from "mobx-react";
import Modal from "./Modal/Modal";
import './app.scss'
import {AppType} from "./Types/types";


const App = inject('appStore')(
    observer(({appStore}: AppType) => {

        const storeName = appStore?.name
        const storeSurname = appStore?.surName

        const [modalActive, setModalActive] = useState<boolean>(false)

        const [name, setName] = useState<string>('')
        const [surname, setSurname] = useState<string>('')

        const [nameDirty, setNameDirty] = useState<boolean>(false)
        const [surnameDirty, setSurnameDirty] = useState<boolean>(false)
        const [errorName, setErrorName] = useState<string>('Name is required')
        const [errorSurName, setErrorSurName] = useState<string>('Surname is required')

        const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
            switch (event.target.name){
                case "name":
                    setNameDirty(true)
                    break
                case "surname":
                    setSurnameDirty(true)
                    break

            }
        }
        const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setErrorName('')
            setName(e.target.value)
        }
        const surNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setErrorSurName('')
            setSurname(e.target.value)
        }
        const onClickHandler = () => {
            if (name.trim() !== '' && surname.trim() !== '')
            {
                appStore?.setName(name)
                appStore?.setSurname(surname)
                setName('')
                setSurname('')
                setModalActive(true)
                setNameDirty(false)
            } else {
                setNameDirty(true)
                setSurnameDirty(true)
            }
        }
        const onClickModalHandler = () => {
            setModalActive(!modalActive)
            setNameDirty(true)
            setSurnameDirty(true)
            setErrorName('Name is required')
            setErrorSurName('Surname is required')
        }
        return (
            <>
                <div className="app">
                        <div className="form">
                            <div className="form-input">
                                <input onBlur={onBlurHandler} type="text" name={"name"} value={name} onChange={nameHandler} placeholder={'Name'}/>
                                {(nameDirty && errorName) && <div className="error-message">{errorName}</div>}
                            </div>
                            <div className="form-input">
                                <input onBlur={onBlurHandler} type="text" name={"surname"} value={surname} onChange={surNameHandler} placeholder={'Surname'}/>
                                {(surnameDirty && errorSurName) && <div className="error-message">{errorSurName}</div>}
                            </div>
                            <button className="form_btn" onClick={onClickHandler}>Готово</button>
                        </div>
                </div>
                <Modal modalActive={modalActive} onClickModalHandler={onClickModalHandler} name={storeName} surname={storeSurname}/>
            </>
        );
    }),
);

export default App;
