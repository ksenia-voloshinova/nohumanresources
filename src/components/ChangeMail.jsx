"use client"
import React, {useState} from 'react';
import styles from "../styles/FormEmail.module.scss";

function ChangeMail(props) {
    const [changeEmailOpen, setChangeEmailOpen] = useState(false)

    const handleChange = (e) => {
        e.preventDefault();
        setChangeEmailOpen(true)
    }
    const saveChange = (e) => {
        e.preventDefault();
        setChangeEmailOpen(false)
    }
    return (
        <div>
            {!changeEmailOpen ?
                <div className={`${styles.wrapp_label} ${styles.wrapp_label_second}`}>
                    <p>{props.info.mail}</p>
                    <button onClick={handleChange} className={`${styles.form__button}  button`}>{props.info.openChangeEmail}</button>
                </div>
                :
                <div className={styles.wrap_input}>
                    <input className={`${styles.input}`} type="password" id="password"
                           name="password" placeholder={props.info.changeEmail}/>
                    <button onClick={saveChange} className={`${styles.form__button} button`} type="submit">{props.info.changeEmailButton}</button>
                </div>
            }


        </div>
    );
}

export default ChangeMail;