
import HeaderBack from "/src/components/HeaderBack";
import styles from "/src/styles/Auth.module.scss";
import { languages, fallbackLng } from '../../i18n/settings'
import {useTranslation} from "../../i18n";
import FormAuth from "../../../src/components/FormAuth";
import ButtonRegister from "../../../src/components/ButtonRegister";

const Page = async ({params: {lng}}) => {
    if (languages.indexOf(lng) < 0) lng = fallbackLng
    const {t} = await useTranslation(lng, 'register')

    const buttonRegister = <div>
        <ButtonRegister styles={styles.form__button} value={t("buttonSubmitForm")}/>
    </div>;

    return (
        <>
            <HeaderBack t={t("back-to-home")}/>
            <main className={styles.mainAuth}>
                <div className={styles.wrapp}>
                    <h2>{t("heading")}</h2>
                    <FormAuth t={{
                        labelEmail: t("labelEmail"),
                        inputPlaceholderEmail: t("inputPlaceholderEmail"),
                        labelPassword :t("labelPassword"),
                        inputPlaceholderPassword: t("inputPlaceholderPassword"),
                        forgotPassword: t("forgotPassword")
                    }} authBlock={buttonRegister} formStyle={styles.login__form} type={'register'}/>
                </div>
            </main>
        </>
    )
}
export default Page;