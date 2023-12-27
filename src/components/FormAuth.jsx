"use client"
import React, {useState} from 'react';
import styles from "../styles/FormAuth.module.scss";
import {changePassword, login, register} from "../../app/api/admin/adminApi";
import { useCookies, Cookies } from "react-cookie"
import {TokenTypes} from "../../app/utils/auth";

const FormAuth = ({t, authBlock, formStyle, type}) =>  {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isChecked, setIsChecked] = useState(true);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (
            formData.password === ''
            || formData.password == null
            || formData.email === ''
            || formData.email === null
        ){
            alert("form data incomplete")
        }
        let res = null

        if (type === 'register') {
            res = await register(formData.email, formData.password)
        }
        if (type === 'login') {
            res = await login(formData.email, formData.password)
        }

        if (res === null || res.status !== 200) {
            alert("server error")
            return;
        }

        let token = (await res.json()).token

        let cookies = new Cookies();
        cookies.set('token', token)
        cookies.set('token_type', TokenTypes.REGISTER)
        window.location.href = 'admin'
    }

    return (
            <form onSubmit={handleSubmit} action="#" className={formStyle} method="POST">
                <div className={styles.wrap_input}>
                    <label className={styles.label} htmlFor="email">{t.labelEmail}</label>
                    <div className={styles.relative_input}>
                        <input onChange={handleChange} className={`${styles.input} ${styles.email}`} type="email" id="email"
                               name="email"
                               placeholder={t.inputPlaceholderEmail}
                        />
                        <svg className={styles.validity_icon} xmlns="http://www.w3.org/2000/svg" width="27" height="28"
                             viewBox="0 0 27 28" fill="none">
                            <path
                                d="M19.1132 11.6482L19.1132 11.6482L19.1172 11.6442C19.5661 11.1797 19.5718 10.4429 19.1132 9.9843C18.6568 9.52787 17.9057 9.52787 17.4493 9.9843L11.9025 15.5311L9.5507 13.1793C9.09428 12.7229 8.34322 12.7229 7.8868 13.1793C7.43037 13.6357 7.43037 14.3868 7.8868 14.8432L11.0705 18.027C11.2898 18.2463 11.5881 18.3721 11.9025 18.3721C12.2169 18.3721 12.5152 18.2463 12.7345 18.027L19.1132 11.6482ZM2.58333 14C2.58333 7.98535 7.48535 3.08333 13.5 3.08333C19.5147 3.08333 24.4167 7.98535 24.4167 14C24.4167 20.0147 19.5147 24.9167 13.5 24.9167C7.48535 24.9167 2.58333 20.0147 2.58333 14Z"
                                fill="#64C661" stroke="#64C661" strokeWidth="0.666667"/>
                        </svg>
                    </div>
                </div>
                <div className={styles.wrap_input}>
                    <label className={styles.label} htmlFor="password">{t.labelPassword}</label>
                    <div className={styles.relative_input}>
                        <input className={`${styles.input} border-black-input`} type={isChecked ? "password" : "text"}
                               id="password"
                               name="password" onChange={handleChange} placeholder={t.inputPlaceholderPassword}/>
                        <label>
                            <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}
                                   className={styles.passwordCheckbox}/>
                            {isChecked ?
                                <svg className={styles.input_icon} width="27px" height="27px" viewBox="0 0 24 24"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M4 10C4 10 5.6 15 12 15M12 15C18.4 15 20 10 20 10M12 15V18M18 17L16 14.5M6 17L8 14.5"
                                            stroke="#464455" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                                :
                                <svg className={styles.input_icon} xmlns="http://www.w3.org/2000/svg" width="27"
                                     height="27"
                                     viewBox="0 0 27 27" fill="none">
                                    <path
                                        d="M17.5277 13.4999C17.5277 15.7274 15.7277 17.5274 13.5002 17.5274C11.2727 17.5274 9.47266 15.7274 9.47266 13.4999C9.47266 11.2724 11.2727 9.47241 13.5002 9.47241C15.7277 9.47241 17.5277 11.2724 17.5277 13.4999Z"
                                        stroke="#909090" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path
                                        d="M13.5003 22.8037C17.4716 22.8037 21.1728 20.4637 23.7491 16.4137C24.7616 14.8275 24.7616 12.1612 23.7491 10.575C21.1728 6.525 17.4716 4.185 13.5003 4.185C9.52906 4.185 5.82781 6.525 3.25156 10.575C2.23906 12.1612 2.23906 14.8275 3.25156 16.4137C5.82781 20.4637 9.52906 22.8037 13.5003 22.8037Z"
                                        stroke="#909090" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            }
                        </label>
                    </div>
                    <a className={styles.link} href="#">{t.forgotPassword}</a>
                </div>
                {authBlock}
            </form>
    )
        ;
}

export default FormAuth;