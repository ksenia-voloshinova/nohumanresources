"use client"
import React from 'react';

export default function ButtonRegister({styles, value}) {
    return (
        <>
            <div>
                <input className={`${styles} button`} type="submit" value={value}/>
            </div>
        </>
    )
        ;
}
