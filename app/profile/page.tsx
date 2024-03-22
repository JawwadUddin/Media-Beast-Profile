import React from "react";
import styles from "./Profile.module.css";
import ProfileCard from "../components/profileCard/ProfileCard";
import SocialCircles from "../components/socialCircles/SocialCircles";
import ButtonHeader from "../components/buttonHeader/ButtonHeader";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <div className={styles.profile}>
        {/* DayDay Logo section */}

        <div className={styles.logo}>
          <img
            className="w-full h-full object-cover"
            src="/images/DayDayLogoRebrand_2.png"
            alt="DayDay Logo Brand"
          />
        </div>

        {/* Profile card section */}

        <ProfileCard imgUrl="/images/Profile%20Image.png" />

        {/* Socials section */}

        <SocialCircles
          fbUrl="url"
          xUrl="url"
          instaUrl="url"
          ytUrl="url"
          tiktokUrl="url"
          whatsappUrl="url"
          snapchatUrl="url"
        />

        {/* Button Header - Award */}

        <div
          className={styles.container}
          style={{ marginTop: "28px", marginBottom: "34px" }}
        >
          <ButtonHeader
            dotColour="#FF4000"
            text="Award winning DJ & Radio Presenter"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
