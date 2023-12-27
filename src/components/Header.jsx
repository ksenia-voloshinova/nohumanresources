import styles from "../styles/Header.module.scss"
import Menu from "../components/Menu";
import SwitchThemes from "../components/SwitchThemes";
import Image from "next/image";
import logoNav from "../static/logo-nav.svg"
import logoNavWhite from "../static/logo-nav-white.png"
import Link from "next/link";
import AuthButtons from "./AuthButtons";

const Header = ({t}) => {

    return (
        <nav className={`${styles.nav}`}>
            <div className="container">
                <div className={styles.wrapp}>
                    <Link href="/">
                        <Image className={`${styles.logo} ${styles.imgBlack}`} src={logoNav} loading="lazy"
                               alt="picture"/>
                        <Image className={`${styles.logo} ${styles.imgWhite}`} src={logoNavWhite} loading="lazy"
                               alt="picture"/>
                    </Link>

                    <Menu t={t}/>
                    <AuthButtons info={{
                        headerButtonLogin: t("headerButtonLogin"),
                        headerButtonRegister: t("headerButtonRegister"),
                        headerButtonOut: t("headerButtonOut"),
                        headerButtonLK: t("headerButtonLK")
                    }} />
                </div>
            </div>
        </nav>
    )
}
export default Header