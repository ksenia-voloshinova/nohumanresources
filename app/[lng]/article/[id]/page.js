import HeaderBack from "/src/components/HeaderBack";
import styles from "/src/styles/Article.module.scss";
import {languages, fallbackLng} from '../../../i18n/settings'
import {useTranslation} from "../../../i18n";


const Page = async ({params: {lng}}) => {
    if (languages.indexOf(lng) < 0) lng = fallbackLng
    const {t} = await useTranslation(lng, 'auth');

    return (
        <>
            <HeaderBack t={t("back-to-home")}/>
            <div className={styles.section}>
                <div className="container">
                    <h1>Статья 1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </>

    )
}
export default Page;