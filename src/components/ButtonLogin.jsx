"use client"
import React from 'react';

import styles from "../styles/FormAuth.module.scss";
import InputPassword from "./InputPassword";

export default function ButtonLogin({styles, value}) {
    return (
        <>
            <div>
                <input className={`${styles} button`}  type="submit" value={value}/>
            </div>
        </>
    );
}
