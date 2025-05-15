import React from "react";
import styles from "./Button.module.css";

const Button=({children,dataTestId,...rest})=>{
    return(
        <button className={styles.button} data-testId={dataTestId} {...rest}>
        {children}
        </button>
    );
};

export default Button;