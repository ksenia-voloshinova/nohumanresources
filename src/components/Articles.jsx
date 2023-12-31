import styles from "../styles/Articles.module.scss"
import article_img1 from "../static/article_img1.png"
import article_img2 from "../static/article_img2.png"
import article_img3 from "../static/article_img3.png"
import article_img4 from "../static/article_img4.png"
import Image from "next/image";
import Link from "next/link";
const Articles = ({t}) => {
    return (
        <div id="articles" className={styles.section}>
            <div className="container">
                <h1 className={`${styles.headingRed} heading`}>{t("ArticlesSectionHead")}</h1>
                <div className={styles.grid__articles}>
                    <Link href="/article/1" className={`${styles.card_article} border-black`}>
                        <div className={styles.wrapp__content}>
                            <h2>{t("ArticleItem1.heading")}</h2>
                            <p className={styles.description}>{t("ArticleItem1.subheading")}</p>
                            <p className={styles.number}>{t("ArticleItem1.number")}</p>
                            <p className={styles.description__bold}>{t("ArticleItem1.description")}</p>
                        </div>
                        <Image className={`${styles.img} ${styles.img_mob1}`} src={article_img1}  loading="lazy" alt="picture"/>
                    </Link>
                    <Link href="/article/2"className={`${styles.card_article} border-red `}>
                        <Image className={styles.img} src={article_img2}  loading="lazy" alt="picture"/>
                        <p className={styles.description}>{t("ArticleItem2.subheading")}</p>
                        <h3>{t("ArticleItem2.heading")}</h3>
                        <button className={`${styles.button__article} button`}>{t("ArticleItem2.buttonText")}</button>
                    </Link>
                </div>
                <div className={styles.grid__articles}>
                    <Link href="/article/3" className={`${styles.secondRow__card_article} border-red`}>
                        <div className={styles.wrapp__content}>
                            <p className={styles.description}>{t("ArticleItem3.subheading")}</p>
                            <h3>{t("ArticleItem3.heading")}</h3>
                            <button className={`${styles.button__article} button`}>{t("ArticleItem3.buttonText")}</button>
                        </div>
                        <Image className={styles.img} src={article_img3}  loading="lazy" alt="picture"/>
                    </Link>
                    <Link href="/article/4" className={`${styles.secondRow__card_article}  border-black`}>
                        <div className={styles.wrapp__content}>
                            <p className={styles.description}>{t("ArticleItem4.subheading")}</p>
                            <h3>{t("ArticleItem4.heading")}</h3>
                            <button className={`${styles.button__article} button`}>{t("ArticleItem4.buttonText")}</button>
                        </div>
                        <Image className={styles.img} src={article_img4}  loading="lazy" alt="picture"/>

                    </Link>

                </div>
            </div>

        </div>
    );
}

export default Articles;