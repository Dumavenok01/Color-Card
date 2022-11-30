import PropTypes from "prop-types";
import React, { useEffect } from "react";
import styles from "./ColorText.module.css";
import chroma from "chroma-js";


const ColorText = ({children, data}) => {
    const HexText = React.createRef();
    const HintCopy = React.createRef();

    function copyHexText(){
        return navigator.clipboard.writeText(HexText.current.innerHTML);
    }

    function setHexColor(){
        const luminance = chroma(data.colorHex).luminance();
        HexText.current.style = luminance > 0.6 ? "color: black" : "color: white";
    }

    useEffect(() => {
        setHexColor();
    })

    return(
        <h3 className={styles.ColorText}>
            <p className={styles.Paragraph} ref={HexText} onClick={copyHexText}>{children}</p>
            <div className={styles.Copy} ref={HintCopy}>* Copied *</div>
        </h3>
    )
}

ColorText.propTypes = {
    data: PropTypes.object.isRequired
}


export default ColorText;