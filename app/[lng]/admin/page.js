import {languages, fallbackLng} from '../../i18n/settings'
import {useTranslation} from "../../i18n";
import styles from "/src/styles/Admin.module.scss";
import HeaderBack from "../../../src/components/HeaderBack";
import PasswordForm from "../../../src/components/PasswordForm";
import FormEmail from "../../../src/components/FormEmail";
import ActiveRate from "../../../src/components/ActiveRate";
import HistoryDeposits from "../../../src/components/HistoryDeposits";
import HistoryLog from "../../../src/components/HistoryLog";
import {getDataUser} from "../../api/admin/adminApi";


const Page = async ({params: {lng}, repo}) => {

    const data = await getDataUser()

    if (languages.indexOf(lng) < 0) lng = fallbackLng
    const {t} = await useTranslation(lng, 'admin')
    return (
        <>
            <HeaderBack t={t("back-to-home")}/>
            <div className={`${styles.section}`}>
                <div className="container">
                    {data ?
                        <>
                            <div className={styles.grid_subscribe}>
                                <div className={`${styles.subscription} ${styles.card} border-red`}>
                                    <h3>{t("subscriptionHead")}</h3>
                                    <p>{t("active")} </p>
                                </div>
                                <div className={`${styles.score} ${styles.card} border-black`}>
                                    <h3>{t("scoreHead")}</h3>
                                    <p>0 {t("currency")}</p>
                                    <button className={`${styles.button_score}  button`}>{t("buttonScore")}</button>
                                </div>
                                <a className={`${styles.link} ${styles.card}`} href="">{t("downloadApp")}</a>
                                <div className={`${styles.devices_wrap} ${styles.card} border-red`}>
                                    <h3>{t("devicesHead")}</h3>
                                    <ul className={styles.devices_list}>
                                        <li>
                                            <div className={styles.wrapp_info_devices}>
                                                <p>Macbook pro</p>
                                                <p>14.02.2019, 22:03</p>
                                            </div>

                                            <button
                                                className={`${styles.button_devices} button`}>{t("buttonDevices")}</button>
                                            {/*<button className={`${styles.button_devices} ${data.disabled ? styles.disabled : "" } button`}>{t("buttonDevices")}</button>*/}
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div className={styles.grid_form}>
                                <PasswordForm
                                    password={data.password}
                                    text={{
                                    changePassword: t("changePassword"),
                                    oldPassword: t("oldPassword"),
                                    oldPasswordInput: t("oldPasswordInput"),
                                    newPassword: t("newPassword"),
                                    newPasswordInput: t("newPasswordInput"),
                                    newRepeatPassword: t("newRepeatPassword"),
                                    newRepeatPasswordInput: t("newRepeatPasswordInput"),
                                    changePasswordButton: t("changePasswordButton"),
                                }}/>
                                <FormEmail t={t} mail={data.email}/>
                                <ActiveRate t={t}/>
                            </div>
                            <HistoryDeposits text={{
                                historyDeposits: t("historyDeposits"),
                                depositButton: t("depositButton"),
                            }}/>
                            <HistoryLog  text={{
                                historyLogs: t("historyLogs"),
                                depositButton: t("depositButton"),
                            }}/>
                        </>
                        :
                        <div className={`${styles.score_card} border-black`}>
                            <h3>{t("scoreHead")}</h3>
                            <p>0 {t("currency")}</p>
                            <button className={`${styles.button_score}  button`}>{t("buttonScore")}</button>
                        </div>
                    }


                </div>
            </div>
        </>
    )

}

export default Page;