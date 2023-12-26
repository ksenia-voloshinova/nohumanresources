import React from 'react';
import {cookies} from "next/headers";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin']
})
function WrappThemes({children}) {

    const cookieStore = cookies()
    const useDarkTheme = cookieStore.get('darkTheme')?.value === 'true'
    return (
        <div className={`mainwrapper ${useDarkTheme ? 'dark' : ''} ${montserrat.variable}`}>
            {children}
        </div>
    );
}

export default WrappThemes;