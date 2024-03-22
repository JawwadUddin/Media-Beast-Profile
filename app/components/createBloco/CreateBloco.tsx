import React from "react";
import styles from "./CreateBloco.module.css";

const CreateBloco = () => {
  return (
    <div className={styles.createBloco}>
      <div className={styles.imgContainer}>
        <img src="/images/Shape.png" alt="Bloco logo" />
      </div>
      <div>
        <p className={styles.text}>CREATE A BLOCO.ME</p>
      </div>
    </div>
  );
};

export default CreateBloco;
