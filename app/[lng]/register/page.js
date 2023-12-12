
import HeaderBack from "/src/components/HeaderBack";
import styles from "/src/styles/Auth.module.scss";
import { languages, fallbackLng } from '../../i18n/settings'
import {useTranslation} from "../../i18n";
import FormAuth from "../../../src/components/FormAuth";

const Page = async ({params: {lng}}) => {
    if (languages.indexOf(lng) < 0) lng = fallbackLng
    const { t } = await useTranslation(lng, 'register')
    return (
        <>
            <HeaderBack t={t("back-to-home")}/>
            <main className={styles.mainAuth}>
                <div className={styles.wrapp}>
                    <h2>{t("heading")}</h2>
                    <form action="#" className={styles.login__form} method="POST">
                       <FormAuth t={t}/>
                        <div>
                            <input className={`${styles.form__button} button`} type="submit" value={t("buttonSubmitForm")}/>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}
export default Page;