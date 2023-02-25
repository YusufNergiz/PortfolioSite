import React from "react";
import styles from "./styles.module.css";

const LogoRight = ({icon, description, color}) => {
    return (
        <div className={`row ${styles.skillContainer}`}>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <h5>{description}</h5>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <h1 style={{color: color}}>{icon}</h1>
            </div>
        </div>
    );
}

export default LogoRight;