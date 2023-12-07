import React from 'react';
import styles from "../styles/HeaderBack.module.scss";

function HeaderBack(props) {
    return (
        <header className={styles.header}>
            <button className={`${styles.navButton} button`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M34 39C36.7614 39 39 36.7614 39 34L39 5C39 2.23857 36.7614 -1.95703e-07 34 -4.37114e-07L5 -2.97237e-06C2.23858 -3.21379e-06 3.21379e-06 2.23857 2.97237e-06 5L4.37114e-07 34C1.95703e-07 36.7614 2.23857 39 5 39L34 39ZM31 21.5L31 17.5L15 17.5L22 10.5L19.5 8L8 19.5L19.5 31L22 28.5L15 21.5L31 21.5Z" fill="white"/>
                </svg>
                Вернуться
            </button>
        </header>

    );
}

export default HeaderBack;