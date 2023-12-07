"use client"
import styles from "../styles/Rate.module.css"
import {useEffect, useState} from "react";

const Rate = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 1180);
        };

        checkIsMobile();

        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return (
        <div className={`${styles.wrappCard} ${props.info.type === "active" ?"border-black" : "border-red" }`}>
            <div className={styles.title__flex} onClick={() => setIsActive(!isActive)}>
                <div className={styles.accordionTitle} >
                    <div className={styles.wrapp__title}>
                        <h2 className={styles.rateName}>{props.info.name}</h2>
                        <p className={styles.ratePriceMob}> {props.info.price}</p>
                    </div>
                    <p className={styles.rateDescription}>{props.info.description}</p>
                    <p className={styles.ratePrice}>{props.info.price}</p>
                </div>
                {isMobile && <svg className={` svg ${isActive ? styles.rotate : ""}`}
                      xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <g clipPath="url(#clip0_121_2612)">
                        <path
                            d="M24.9984 7.11487C24.9992 7.25197 24.9729 7.38786 24.9211 7.51478C24.8692 7.64169 24.7929 7.75713 24.6963 7.85446L16.1859 16.3649C15.7021 16.8499 15.1273 17.2347 14.4946 17.4973C13.8618 17.7599 13.1835 17.895 12.4984 17.895C11.8133 17.895 11.135 17.7599 10.5022 17.4973C9.86946 17.2347 9.29471 16.8499 8.8109 16.3649L0.300486 7.85446C0.203362 7.75734 0.12632 7.64203 0.0737568 7.51513C0.0211939 7.38824 -0.00585984 7.25223 -0.00585985 7.11488C-0.00585985 6.97752 0.0211939 6.84151 0.0737567 6.71462C0.12632 6.58772 0.203362 6.47242 0.300486 6.37529C0.397609 6.27817 0.512911 6.20113 0.639809 6.14856C0.766707 6.096 0.902716 6.06895 1.04007 6.06895C1.17742 6.06895 1.31343 6.096 1.44033 6.14856C1.56723 6.20113 1.68253 6.27817 1.77965 6.37529L10.2901 14.8857C10.876 15.4709 11.6703 15.7996 12.4984 15.7996C13.3265 15.7996 14.1208 15.4709 14.7067 14.8857L23.2172 6.37529C23.314 6.27766 23.4292 6.20016 23.5561 6.14728C23.6831 6.0944 23.8192 6.06717 23.9567 6.06717C24.0942 6.06717 24.2304 6.0944 24.3573 6.14728C24.4843 6.20016 24.5995 6.27766 24.6963 6.37529C24.7929 6.47263 24.8692 6.58806 24.9211 6.71497C24.9729 6.84189 24.9992 6.97778 24.9984 7.11487Z"
                            fill="#AE0000"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_121_2612">
                            <rect width="25" height="25" fill="white" transform="translate(0 25) rotate(-90)"/>
                        </clipPath>
                    </defs>
                </svg>}
            </div>
            <div className={`${styles.accordionContent} ${isActive ? styles.open : ""}`}>
                <p className={styles.listHead}>{props.info.headList}</p>
                <ul className={styles.rateList}>
                    <li className={styles.rateListItem}>{props.info.ListItems1}</li>
                    <li className={styles.rateListItem}>{props.info.ListItems2}</li>
                    <li className={styles.rateListItem}>{props.info.ListItems3}</li>
                    <li className={styles.rateListItem}>{props.info.ListItems4}</li>
                </ul>
                <button className={`${styles.rateButton} button`}>{props.info.buttonText}</button>
            </div>
        </div>
    );
}

export default Rate;