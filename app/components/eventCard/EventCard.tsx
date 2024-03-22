import React from "react";
import styles from "./EventCard.module.css";

interface EventCardProps {
  imgUrl: string;
  date: string;
  header: string;
  location: string;
  price: string;
}

const EventCard = ({
  imgUrl,
  date,
  header,
  location,
  price,
}: EventCardProps) => {
  return (
    <div
      className={styles.eventCard}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>{header}</div>
        <div className={styles.contentBottom}>
          <div className={styles.location}>{location}</div>
          <div className={styles.price}>{price}</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
