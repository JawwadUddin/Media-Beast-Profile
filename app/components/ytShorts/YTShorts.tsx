import React from "react";
import styles from "./YTShorts.module.css";

interface YTShortsProps {
  imgUrl: string;
  imgAlt: string;
}

const YTShorts = ({ imgUrl, imgAlt }: YTShortsProps) => {
  return (
    <div className={styles.shortComponent}>
      <img src={imgUrl} alt={imgAlt} />
    </div>
  );
};

export default YTShorts;
