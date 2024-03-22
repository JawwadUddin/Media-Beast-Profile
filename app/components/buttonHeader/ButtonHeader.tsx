import React from "react";
import styles from "./ButtonHeader.module.css";

interface ButtonHeaderProps {
  dotColour: string;
  text: string;
}

const ButtonHeader = ({ dotColour, text }: ButtonHeaderProps) => {
  return (
    <div className={styles.buttonHeader}>
      <div style={{ backgroundColor: dotColour }} className={styles.dot}></div>
      <p>{text}</p>
    </div>
  );
};

export default ButtonHeader;
