
import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'
import  Header from '/src/components/Header'
import Footer from '/src/components/Footer'
import Feedback from "/src/components/Feedback";
import Articles from "/src/components/Articles";
import RatesSection from "/src/components/RatesSection";
import CallToAction from "/src/components/CallToAction";
import { cookies } from 'next/headers'


export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return { title: t('titleHead') }
}

export default async function Page({ params: { lng } }) {
    const cookieStore = cookies()
    const useDarkTheme = cookieStore.get('darkTheme')?.value === 'true'

    // switchDarkScheme(useDarkTheme)
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)
  return (
    <>
        <div className={useDarkTheme ? 'mainwrapper-dark' : 'mainwrapper'}>
            <Header t={t} darkTheme={useDarkTheme}/>
            <main >
                <CallToAction t={t}/>
                <RatesSection t={t}/>
                <Articles t={t}/>
                <Feedback t={t}/>
            </main>
            <Footer t={t}/>
        </div>

    </>
  )
}


