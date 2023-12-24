"use client"
import React, {useState} from 'react';
import styles from "../styles/FormAuth.module.scss";

function InputPassword({t, onChange}) {
    const [isChecked, setIsChecked] = useState(true);

    return (
        <>
            <input className={`${styles.input} border-black-input`} type={isChecked ? "password" : "text"} id="password"
                   name="password" onChange={onChange} placeholder={t}/>
            <label>
                <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}
                       className={styles.passwordCheckbox}/>
                {isChecked ?
                    <svg className={styles.input_icon} width="27px" height="27px" viewBox="0 0 24 24" fill="none"
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
                    <svg className={styles.input_icon} xmlns="http://www.w3.org/2000/svg" width="27" height="27"
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
        </>

    );
}

export default InputPassword;