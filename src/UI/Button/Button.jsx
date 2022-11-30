import React, { createRef } from "react";
import styles from "./Button.module.css";
import lockedPadloc from "../../assets/lock-padloc.svg";
import unlockedPadloc from "../../assets/unlocked-padloc.svg";

const Button = ({data}) => {
    const imageElement = createRef();
    function isLock(){
        if(data.locked){
            data.locked = false;
            imageElement.current.src = lockedPadloc;
        } else{
            data.locked = true;
            imageElement.current.src = unlockedPadloc;
        }
    }

    return(
        <img src={unlockedPadloc} className={styles.Button} onClick={isLock} ref={imageElement}></img>
    )   
}


export default Button;
