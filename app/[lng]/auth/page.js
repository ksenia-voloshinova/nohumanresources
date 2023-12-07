import HeaderBack from "/src/components/HeaderBack";
import styles from "/src/styles/Auth.module.scss";
import { languages, fallbackLng } from '../../i18n/settings'
import {useTranslation} from "../../i18n";


const Page = async ({params: {lng}}) => {
    if (languages.indexOf(lng) < 0) lng = fallbackLng
    const {t} = await useTranslation(lng)
    return (
        <>
            <HeaderBack/>
            <main className={styles.mainAuth}>
                <div className={styles.wrapp}>
                    <h2>Войти</h2>
                    <form action="#" className={styles.login__form} method="POST">
                        <div className={styles.wrap_input}>
                            <label className={styles.label} htmlFor="email">Email</label>
                            <input className={`${styles.input} border-black-input`} type="email" id="email" name="email"
                                   placeholder="Email"/>
                        </div>
                        <div className={styles.wrap_input}>
                            <label className={styles.label} htmlFor="password">Пароль</label>
                            <input className={`${styles.input} border-black-input`} type="password" id="password"
                                   name="password" placeholder="Пароль"/>
                            <a href="#">Забыли пароль</a>

                        </div>
                        <div>
                            <input className={`${styles.form__button} button`} type="submit" value="Войти"/>
                        </div>

                    </form>
                </div>
            </main>
        </>

    )
}
export default Page;