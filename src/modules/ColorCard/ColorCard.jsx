import React from "react";
import styles from "./ColorCard.module.css";
import Button from "../../UI/Button/Button";
import ColorText from "../../UI/ColorText/ColorText";
import PropTypes from "prop-types";

const ColorCard = ({data}) => {
    return(
        <div className={styles.ColorCard} style={{background: data.colorHex}}>
            <ColorText data={data}>{data.colorHex}</ColorText>
            <Button data={data}></Button> 
        </div>
    )
}

ColorCard.propTypes = {
    data: PropTypes.object
}


export default ColorCard;