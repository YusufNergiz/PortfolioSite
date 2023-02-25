import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import styles from "./styles.module.css";

const GlassmorphismCard = ({number, companyLogo, text, date, listItems}) => {
    
    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll("#glassCard"), {
            max: 25,
            speed: 400,

        });
    })

    return (
        <>
            <div className={styles.glassCard} id="glassCard">
                <h1 className={styles.hoverME}>Hover Me!</h1>
                <div className={styles.content}>
                    <h2>{number}</h2>
                    <img src={companyLogo} alt="Company Logo" />
                    <p>{text}</p>
                    <h5>{date}</h5>
                    <ul>
                        {listItems.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                    <a href="https://www.linkedin.com/in/yussuf-nergiz" target="_blank">Check On Linkedin</a>
                </div>
            </div>
        </>
    );
}
export default GlassmorphismCard;