import './global.css'

import {dir} from 'i18next'
import {languages} from '../i18n/settings'
import {Montserrat} from 'next/font/google'
import WrappThemes from "../../src/components/WrappThemes";
import {SessionProvider} from "next-auth/react";

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin']
})

export async function generateStaticParams() {
    return languages.map((lng) => ({lng}))
}

export default function RootLayout({children, params: { lng, session}}) {
    return (
        <html lang={lng} dir={dir(lng)}>
        <head/>
        <body>
        <SessionProvider session={session}>
            <WrappThemes>

                {children}
            </WrappThemes>
        </SessionProvider>

        </body>
        </html>
    )
}
