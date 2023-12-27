"use client"
import React, {useEffect, useState} from 'react';
import styles from "../styles/Header.module.scss";
import Link from "next/link";
import {Cookies} from "react-cookie";
import {isAuthorized} from "../../app/utils/auth";

function AuthButtons({info}) {
    let cookies = new Cookies();
    const [auth, setAuth] = useState(false)

    useEffect( () => {
        const token = cookies.get('token')
        const tokenType = cookies.get('token_type')
        const authorized = isAuthorized(token, tokenType);
        authorized.then((value) => (
            setAuth(value)            )
        )

    }, []);

    const removeCookies = () => {
        cookies.remove("token", null)
        cookies.remove("token_type", null)
        setAuth(false)
    }

    return (
        <>
            {
                auth ?
                    <div className={styles.buttons}>
                        <button onClick={removeCookies} className={`${styles.navButton} button`}>{info.headerButtonOut}</button>
                        <Link href="/admin" className={`${styles.navButton}  ${styles.adminButton} button`}>{info.headerButtonLK}</Link>
                    </div>
                    :
                    <div className={styles.buttons}>
                        <Link href="/auth" className={`${styles.navButton} button`}>{info.headerButtonLogin}</Link>
                        <Link href="/register" className={`${styles.navButton} ${styles.authButton} button`}>
                            {info.headerButtonRegister}
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M5 0C2.23858 0 0 2.23858 0 5V34C0 36.7614 2.23858 39 5 39H34C36.7614 39 39 36.7614 39 34V5C39 2.23858 36.7614 0 34 0H5ZM8 17.5V21.5H24L17 28.5L19.5 31L31 19.5L19.5 8L17 10.5L24 17.5H8Z"
                                      fill="white"/>
                            </svg>
                        </Link>
                    </div>

            }

        </>
    );
}

export default AuthButtons;