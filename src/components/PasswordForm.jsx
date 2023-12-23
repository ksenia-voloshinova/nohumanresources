"use client"
import React, {useState} from 'react';
import styles from "../styles/PasswordForm.module.scss";
import {changePassword} from "../../app/api/admin/adminApi";

const PasswordForm = (props) => {
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        newRepeatPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(formData.oldPassword === props.password && formData.newPassword === formData.newRepeatPassword ){
            await changePassword(formData.newPassword)
            setFormData({
                oldPassword: '',
                newPassword: '',
                newRepeatPassword: '',
            })
        }
        else {
            alert("Неверный пароль")
            setFormData({
                oldPassword: '',
                newPassword: '',
                newRepeatPassword: '',
            })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}  action="#" className={`${styles.password__form} border-black`} method="POST">
                <h2>{props.text.changePassword}</h2>
                <div className={styles.wrap_input}>
                    <label className={styles.label} htmlFor="oldPassword">{props.text.oldPassword}</label>
                    <input onChange={handleChange} className={`${styles.input}`} type="password" id="oldPassword"
                           name="oldPassword" placeholder={props.text.oldPasswordInput}/>
                </div>
                <div className={styles.wrap_input}>
                    <label className={styles.label} htmlFor="newPassword">{props.text.newPassword}</label>
                    <input onChange={handleChange} className={`${styles.input}`} type="password" id="newPassword"
                           name="newPassword" placeholder={props.text.newPasswordInput}/>
                </div>
                <div className={styles.wrap_input}>
                    <label className={styles.label} htmlFor="newRepeatPassword">{props.text.newRepeatPassword}</label>
                    <input onChange={handleChange} className={`${styles.input}`} type="password" id="newRepeatPassword"
                           name="newRepeatPassword" placeholder={props.text.newRepeatPasswordInput}/>
                </div>


                <input  className={`${styles.form__button} button`} type="submit" value={props.text.changePasswordButton}/>

            </form>

        </>
    );
}

export default PasswordForm;