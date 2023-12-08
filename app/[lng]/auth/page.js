import HeaderBack from "/src/components/HeaderBack";
import styles from "/src/styles/Auth.module.scss";
import { languages, fallbackLng } from '../../i18n/settings'
import {useTranslation} from "../../i18n";


const Page = async ({params: {lng}}) => {
    if (languages.indexOf(lng) < 0) lng = fallbackLng
    const { t } = await useTranslation(lng, 'auth')
    return (
        <>
            <HeaderBack t={t("back-to-home")}/>
            <main className={styles.mainAuth}>
                <div className={styles.wrapp}>
                    <h2>{t("heading")}</h2>
                    <form action="#" className={styles.login__form} method="POST">
                        <div className={styles.wrap_input}>
                            <label className={styles.label} htmlFor="email">{t("labelEmail")}</label>
                            <input className={`${styles.input} border-black-input`} type="email" id="email" name="email"
                                   placeholder={t("inputPlaceholderEmail")}/>
                        </div>
                        <div className={styles.wrap_input}>
                            <label className={styles.label} htmlFor="password">{t("labelPassword")}</label>
                            <input className={`${styles.input} border-black-input`} type="password" id="password"
                                   name="password" placeholder={t("inputPlaceholderPassword")}/>
                            <a href="#">{t("forgotPassword")}</a>

                        </div>
                        <div className="wrapp__methods_register">
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                                    <g clipPath="url(#clip0_73_9850)">
                                        <path d="M39 19.5C39 8.73022 30.2698 0 19.5 0C8.73022 0 0 8.73022 0 19.5C0 29.2327 7.12978 37.3013 16.4522 38.7631V25.1362H11.5007V19.5H16.4522V15.2042C16.4522 10.3162 19.3642 7.618 23.8189 7.618C25.9538 7.618 28.184 7.99933 28.184 7.99933V12.7978H25.7256C23.3018 12.7978 22.5478 14.3 22.5478 15.8427V19.5H27.9558L27.092 25.1362H22.5478V38.7631C31.8702 37.3013 39 29.2327 39 19.5Z" fill="#010201"/>
                                        <path d="M27.0884 25.1364L27.9522 19.5002H22.5471V15.8428C22.5471 14.3002 23.3011 12.7979 25.7249 12.7979H28.1833V7.9995C28.1833 7.9995 25.9531 7.61816 23.8182 7.61816C19.3636 7.61816 16.4516 10.3164 16.4516 15.2044V19.5002H11.5V25.1364H16.4516V38.7633C17.4453 38.9193 18.4622 39.0002 19.4993 39.0002C20.5364 39.0002 21.5533 38.9193 22.5471 38.7633V25.1364H27.0884Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_73_9850">
                                            <rect width="39" height="39" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="currentColor" className="bi bi-github" viewBox="0 0 39 39">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>

                            </a>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                                    <g clip-path="url(#clip0_74_9855)">
                                        <path d="M19.5 0C8.72678 0 0 8.72678 0 19.5C0 30.2732 8.72678 39 19.5 39C30.2732 39 39 30.2732 39 19.5C39 8.72678 30.2732 0 19.5 0ZM10.785 10.7262H28.215C28.4502 10.7262 28.6855 10.7615 28.9089 10.8203C28.8736 10.8438 28.8501 10.8673 28.8148 10.9026L21.0289 19.7352C20.6408 20.1821 20.0998 20.4291 19.5 20.4291C18.9119 20.4291 18.3592 20.1821 17.971 19.7352L10.1028 10.8085C10.3145 10.7497 10.5498 10.7262 10.785 10.7262ZM30.9083 23.5458C30.9083 26.1568 28.7913 28.2856 26.1686 28.2856H12.8314C10.2204 28.2856 8.09168 26.1686 8.09168 23.5458V13.4195C8.09168 13.0431 8.174 12.6903 8.30338 12.361L16.1834 21.3112C17.0184 22.2639 18.218 22.8049 19.4882 22.8049C20.7467 22.8049 21.9581 22.2639 22.7931 21.3112L30.579 12.4786C30.6143 12.4433 30.6378 12.3963 30.6731 12.3492C30.8142 12.6785 30.8966 13.0431 30.8966 13.4195V23.5458H30.9083Z" fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_74_9855">
                                            <rect width="39" height="39" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>

                        </div>
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