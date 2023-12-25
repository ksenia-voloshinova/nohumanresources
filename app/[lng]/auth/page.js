import HeaderBack from "/src/components/HeaderBack";
import styles from "/src/styles/Auth.module.scss";
import { languages, fallbackLng } from '../../i18n/settings'
import {useTranslation} from "../../i18n";
import FormAuth from "../../../src/components/FormAuth";
import Link from "next/link";

import { getSession } from "next-auth/react";
import ButtonLogin from "../../../src/components/ButtonLogin";

const Page = async ({params: {lng}}) => {
    if (languages.indexOf(lng) < 0) lng = fallbackLng
    const { t } = await useTranslation(lng, 'auth');
    const loginBlock = <>
        <p className={styles.p}>Или зарегистрируйтесь с помощью</p>
        <div className={styles.wrapp__icons}>
            <Link href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_ID}`}
                  className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="39" viewBox="0 0 41 39" fill="none">
                    <path
                        d="M0.132966 18.7147C0.233855 17.9848 0.319908 17.2518 0.438602 16.5219C0.89854 13.6643 1.99349 11.059 3.6285 8.67919C6.1003 5.0798 9.41779 2.56052 13.5216 1.09762C16.308 0.10356 19.1893 -0.17537 22.1299 0.100593C25.7946 0.444805 29.0942 1.73857 32.0379 3.92847C35.6194 6.59314 38.0438 10.0857 39.3168 14.3587C40.1357 17.1035 40.3108 19.9106 39.9191 22.7385C39.1417 28.323 36.3672 32.7384 31.9251 36.136C30.3138 37.3675 28.5008 38.2488 26.5809 38.9046C25.6996 39.2043 25.1032 38.7829 25.1002 37.8541C25.0943 36.1242 25.1032 34.3912 25.0972 32.6613C25.0943 31.8007 25.0468 30.9343 24.6699 30.142C24.4504 29.6791 24.1447 29.2577 23.8747 28.8126C24.6047 28.6761 25.3969 28.5752 26.1655 28.3764C28.2011 27.8512 30.026 26.9491 31.2604 25.1598C32.1595 23.8601 32.575 22.3705 32.7589 20.8156C32.8984 19.6376 32.9399 18.4566 32.7114 17.2815C32.4592 15.9759 31.8954 14.8186 31.0201 13.8216C30.8628 13.6406 30.8361 13.4922 30.9132 13.2697C31.4889 11.6258 31.2663 10.0175 30.658 8.4329C30.6195 8.33498 30.4563 8.24299 30.3405 8.22815C29.6462 8.13023 28.9874 8.32607 28.3791 8.6139C27.3702 9.08868 26.3969 9.63764 25.3969 10.1332C25.2189 10.2222 24.9726 10.2786 24.7857 10.2311C21.67 9.45366 18.5602 9.4507 15.4445 10.2341C15.2605 10.2816 14.9994 10.2281 14.8362 10.1243C13.5661 9.31717 12.2279 8.67029 10.7679 8.2875C10.7442 8.28156 10.7175 8.26969 10.6937 8.26673C9.762 8.07088 9.59583 8.17474 9.32876 9.09165C8.91334 10.513 8.83916 11.9284 9.3347 13.3468C9.37625 13.4625 9.33767 13.6614 9.25755 13.7504C7.581 15.6584 7.20118 17.9136 7.42967 20.3498C7.5632 21.777 7.90148 23.1391 8.53946 24.4239C9.44153 26.231 10.9638 27.3379 12.8065 27.9758C13.9014 28.3556 15.0735 28.5129 16.21 28.7711C16.2694 28.7859 16.3317 28.7918 16.3406 28.7918C16.0498 29.32 15.7501 29.8423 15.4741 30.3794C15.3822 30.5604 15.3109 30.774 15.302 30.9728C15.2842 31.3942 15.0646 31.5841 14.6819 31.688C13.4148 32.0292 12.1596 32.2518 10.9489 31.5099C10.3139 31.1212 9.83915 30.5723 9.46527 29.9372C8.8896 28.958 8.08249 28.237 6.9905 27.9135C6.58695 27.7948 6.12403 27.8275 5.69377 27.8512C5.42967 27.866 5.34362 28.0797 5.52167 28.3022C5.69971 28.5218 5.87478 28.777 6.1092 28.9135C7.18041 29.5367 7.78278 30.5218 8.26646 31.6049C8.54242 32.2251 8.80058 32.8423 9.32283 33.3111C10.1626 34.0648 11.1774 34.3497 12.2605 34.4001C13.2012 34.4417 14.1448 34.409 15.1507 34.409C15.1507 34.9758 15.1477 35.6345 15.1507 36.2963C15.1537 36.8037 15.1685 37.3111 15.1685 37.8185C15.1655 38.7532 14.5483 39.2072 13.6641 38.9046C10.7086 37.8986 8.10919 36.3111 5.93116 34.0737C3.81841 31.9046 2.20417 29.412 1.20714 26.5337C0.643348 24.9017 0.313978 23.2251 0.183415 21.507C0.171545 21.3527 0.141865 21.2014 0.121094 21.05C0.132963 20.2785 0.132966 19.4981 0.132966 18.7147Z"
                        fill="white"/>
                </svg>
            </Link>
            <Link
                href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_ID}&redirect_uri=http://localhost:3000/api/auth/gmail&response_type=code&scope=email`}
                className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
                    <path
                        d="M19.6191 0C8.84936 0 0.119141 8.73022 0.119141 19.5C0.119141 30.2698 8.84936 39 19.6191 39C30.3889 39 39.1191 30.2698 39.1191 19.5C39.1191 8.73022 30.3889 0 19.6191 0ZM10.9005 10.7207H28.3263C28.566 10.7207 28.7971 10.7553 29.0196 10.8131C28.9907 10.842 28.956 10.8651 28.93 10.8969L21.1416 19.7369C20.7487 20.1818 20.2085 20.4273 19.6134 20.4273C19.0211 20.4273 18.478 20.1818 18.0851 19.7369L10.2187 10.8102C10.4383 10.7553 10.6636 10.7207 10.9005 10.7207ZM31.0245 23.5444C31.0245 26.1589 28.904 28.2793 26.2896 28.2793H12.9487C10.3343 28.2793 8.21381 26.1589 8.21381 23.5444V13.4131C8.21381 13.0376 8.29181 12.6793 8.43047 12.3529L16.3143 21.2998C17.1491 22.2473 18.3538 22.7904 19.6191 22.7904C20.8816 22.7904 22.0863 22.2473 22.9211 21.2998L30.7096 12.4627C30.7443 12.4222 30.7703 12.3818 30.7991 12.3384C30.9436 12.6678 31.0245 13.0289 31.0245 13.4131V23.5444Z"
                        fill="white"/>
                </svg>
            </Link>
        </div>
        <div>
            <ButtonLogin styles={styles.form__button} value={t("buttonSubmitForm")}/>
        </div>
    </>
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
                    }} authBlock={loginBlock} type={'login'} formStyle={styles.login__form}/>
                </div>
            </main>
        </>

    )
}
export default Page;