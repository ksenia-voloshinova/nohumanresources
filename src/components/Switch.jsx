"use client"
import React, {useState} from 'react';
import styles from "../styles/Switch.module.css"

const Switch = ( ) => {
    // const [value, setValue] = useState(false);

    // const handleToggle = () => {
    //     setValue(!value);
    // };

    return (
            <div className={styles.wrapp__switch}>
                <input
                    // checked={value}
                    // onChange={handleToggle}
                    className={styles.switchCheckbox}
                    id={`react-switch-new`}
                    type="checkbox"
                />
                <label
                    className={styles.switchLabel}
                    htmlFor={`react-switch-new`}
                >
                    <span className={styles.switchButton} />
                </label>
            </div>

    );
};

export default Switch;