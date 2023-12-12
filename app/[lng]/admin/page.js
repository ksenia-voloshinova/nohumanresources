import { languages, fallbackLng } from '../../i18n/settings'
import {useTranslation} from "../../i18n";
import styles from "/src/styles/Admin.module.scss";
import HeaderBack from "../../../src/components/HeaderBack";
import PasswordForm from "../../../src/components/PasswordForm";
import FormEmail from "../../../src/components/FormEmail";
import ActiveRate from "../../../src/components/ActiveRate";
import HistoryDeposits from "../../../src/components/HistoryDeposits";
import HistoryLog from "../../../src/components/HistoryLog";
const Page = async ({params: {lng}}) => {
    if (languages.indexOf(lng) < 0) lng = fallbackLng
    const { t } = await useTranslation(lng, 'admin')
    return (
        <>
            <HeaderBack  t={t("back-to-home")}/>
            <div className={styles.section}>
                <div className="container">
                    <div className={styles.grid_subscribe}>
                        <div className={`${styles.subscription} ${styles.card} border-red`}>
                            <h3>{t("subscriptionHead")}</h3>
                            <p>{t("active")} 23.07.24</p>
                        </div>
                        <div className={`${styles.score} ${styles.card} border-black`}>
                            <h3>{t("scoreHead")}</h3>
                            <p>0 {t("currency")}</p>
                            <button className={`${styles.button_score} button`}>{t("buttonScore")}</button>

                        </div>
                        <div className={`${styles.devices_wrap} ${styles.card} border-red`}>
                            <h3>{t("devicesHead")}</h3>
                           <ul className={styles.devices_list}>
                               <li>
                                   <div className={styles.wrapp_info_devices}>
                                       <p>Macbook pro</p>
                                       <p>14.02.2019, 22:03</p>
                                   </div>
                                   <button className={`${styles.button_devices} button`}>{t("buttonDevices")}</button>
                               </li>
                               <li>
                                   <div className={styles.wrapp_info_devices}>
                                       <p>Macbook pro</p>
                                       <p>14.02.2019, 22:03</p>
                                   </div>
                                   <button className={`${styles.button_devices} button`}>выйти</button>
                               </li>
                               <li>
                                   <div className={styles.wrapp_info_devices}>
                                       <p>Macbook pro</p>
                                       <p>14.02.2019, 22:03</p>
                                   </div>
                                   <button className={`${styles.button_devices} button`}>выйти</button>
                               </li>
                               <li>
                                   <div className={styles.wrapp_info_devices}>
                                       <p>Macbook pro</p>
                                       <p>14.02.2019, 22:03</p>
                                   </div>
                                   <button className={`${styles.button_devices} button`}>выйти</button>
                               </li>
                               <li>
                                   <div className={styles.wrapp_info_devices}>
                                       <p>Macbook pro</p>
                                       <p>14.02.2019, 22:03</p>
                                   </div>
                                   <button className={`${styles.button_devices} button`}>выйти</button>
                               </li>
                           </ul>
                        </div>
                        <a className={`${styles.link} ${styles.card}`} href="">{t("downloadApp")}</a>
                    </div>
                    <div className={styles.grid_form}>
                        <PasswordForm t={t} />
                        <FormEmail t={t}/>
                        <ActiveRate t={t}/>
                    </div>
                    <HistoryDeposits/>
                    <HistoryLog/>

                </div>
            </div>
        </>
    );
}

export default Page;