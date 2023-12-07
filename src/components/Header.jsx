import styles from "../styles/Header.module.css"
import Menu from "../components/Menu";
import SwitchThemes from "../components/SwitchThemes";
import Image from "next/image";
import logoNav from "../static/logo-nav.svg"

const Header = ({t}) => {

    return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.wrapp}>
                    <div> <Image className={styles.logo} src={logoNav}  loading="lazy" alt="picture"/></div>
                    <Menu t={t}/>
                    <div className={styles.buttons}>
                        <SwitchThemes/>
                        <button className={`${styles.navButton} button`}>{t("headerButtonLogin")}</button>
                        <button className={`${styles.navButton} ${styles.authButton} button`}>
                            {t("headerButtonRegister")}
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M5 0C2.23858 0 0 2.23858 0 5V34C0 36.7614 2.23858 39 5 39H34C36.7614 39 39 36.7614 39 34V5C39 2.23858 36.7614 0 34 0H5ZM8 17.5V21.5H24L17 28.5L19.5 31L31 19.5L19.5 8L17 10.5L24 17.5H8Z"
                                      fill="white"/>
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Header