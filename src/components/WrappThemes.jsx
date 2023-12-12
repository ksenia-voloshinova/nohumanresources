import React from 'react';
import {cookies} from "next/headers";

function WrappThemes({children}) {
    const cookieStore = cookies()
    const useDarkTheme = cookieStore.get('darkTheme')?.value === 'true'
    return (
        <div className={`mainwrapper ${useDarkTheme ? 'dark' : ''}`}>
            {children}
        </div>
    );
}

export default WrappThemes;