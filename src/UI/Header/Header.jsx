import React from "react";
import styles from "./Header.module.css"

const Header = () => {
    return(
        <header class={styles.header} id="header">
        <div class={styles.header__title}>
            <div class={styles.header__layer_main} style = {{color: "#FEF7EC"}}>
                Color Randomizer
            </div>
        </div>
        <div class={styles.header__suptitle}>* Press the Spacebar *</div>
        <div class={styles.header__advice}>
            <div class={styles.header__content}>
                <div class={styles.header__text}>
                    Click on the "#HEX" to copy to the clipboard
                </div>
            </div>
        </div>
    </header>
    )
}


export default Header;