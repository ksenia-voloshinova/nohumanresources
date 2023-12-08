import styles from "../styles/Feedback.module.css"
import ListContacts from "../components/ListContacts";
const Feedback = ({t}) => {

    return (
        <div className={styles.section__feedback}>
            <div className="container">
                <h1 className="heading">{t("FeedBackSectionHead")}</h1>
                <div className={styles.grid}>
                    <div className={`${styles.communicMethodsWrapp} border-red `}>
                        <h2 className={styles.communicMethodsHead}>{t("FeedBackMethodsHeading")}</h2>
                        <p className={styles.communicMethodsDescription}>{t("FeedBackMethodsSubheading")}</p>
                        <ListContacts  color="black"
                                       head1={t("FeedBackMethod1.heading")}
                                       content1={t("FeedBackMethod1.content")}
                                       head2={t("FeedBackMethod2.heading")}
                                       content2={t("FeedBackMethod2.content")}
                                       head3={t("FeedBackMethod3.heading")}
                                       content3={t("FeedBackMethod3.content")}
                         />
                    </div>
                    <form className={`${styles.form} border-black `} action="#">
                        <div className={styles.inputBox}>
                            <input className='border-black-input' type="email" placeholder="Email" />
                        </div>
                        <div className={styles.inputBox}>
                            <input className='border-black-input'  type="text" placeholder={t("FeedBackInputPlaceholderHeading")} />
                        </div>
                        <div className={styles.inputBox}>
                            <textarea className='border-black-input' placeholder={t("FeedBackInputPlaceholderMessage")}></textarea>
                        </div>
                        <button className={`${styles.buttonForm} button`}>
                            {t("FeedBackButtonText")}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Feedback;