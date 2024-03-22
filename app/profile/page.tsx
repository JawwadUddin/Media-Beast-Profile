import React from "react";
import styles from "./Profile.module.css";
import ProfileCard from "../components/profileCard/ProfileCard";
import SocialCircles from "../components/socialCircles/SocialCircles";
import ButtonHeader from "../components/buttonHeader/ButtonHeader";
import ProfileBrief from "../components/profileBrief/ProfileBrief";
import MixCard from "../components/mixCard/MixCard";
import YTShorts from "../components/ytShorts/YTShorts";
import EventCard from "../components/eventCard/EventCard";
import CreateBloco from "../components/createBloco/CreateBloco";

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

        {/* Profile Brief section */}

        <div className={styles.container} style={{ marginBottom: "22px" }}>
          <ProfileBrief
            imgUrl="/images/1XTRA-image.png"
            imgAlt="1XTRA"
            text="BBC 1XTRA Radio Shows"
          />
        </div>
        <div className={styles.container} style={{ marginBottom: "22px" }}>
          <ProfileBrief
            imgUrl="/images/Youtube%20Image%20Profile.png"
            imgAlt="Youtube profile"
            text="DJ DAY DAY Youtube Channel"
          />
        </div>
        <div className={styles.container}>
          <ProfileBrief
            imgUrl="/images/Merchandise%20Shop.png"
            imgAlt="DJ DAY DAY Merchandise"
            text="DJ DAY DAY Mechandise"
          />
        </div>

        {/* Button Header - MIX */}

        <div
          className={styles.container}
          style={{ marginTop: "44px", marginBottom: "41px" }}
        >
          <ButtonHeader
            dotColour="#FF8600"
            text="NEW MIX LIVE - TAKE A LISTEN"
          />
        </div>

        {/* Mix Card section */}

        <div className={styles.container}>
          <MixCard
            imgUrl="/images/artworks-AjPHftHjPlxzkSxD-UuuZzg-t500x500.png"
            imgAlt="mixtape artwork"
            header="DJ DAY DAY"
            text="@DJDAYDAY_ / The Vibe Mixtape Vol 6 (R&B, Hip Hop, Bashment, Afro Beats + UK Rap)"
            time="19 hours ago"
          />
        </div>

        {/* Button Header - YT Shorts */}

        <div
          className={styles.container}
          style={{ marginTop: "36px", marginBottom: "42px" }}
        >
          <ButtonHeader dotColour="#FF0000" text="YOUTUBE SHORTS" />
        </div>

        {/* YT Shorts section */}
        <div className={styles.container}>
          <div className={styles.shortContainer}>
            <div className={styles.shortArrow}>
              <img src="/images/arrow-right.png" alt="right-arrow" />
            </div>
            <YTShorts imgUrl="/images/YT%20Short%201.png" imgAlt="Short 1" />
            <YTShorts imgUrl="/images/YT%20Short%202.png" imgAlt="Short 2" />
          </div>
        </div>

        {/* Button Header - Event */}

        <div
          className={styles.container}
          style={{ marginTop: "42px", marginBottom: "32px" }}
        >
          <ButtonHeader dotColour="#FFFFFF" text="LATEST EVENT" />
        </div>

        {/* Event Card section */}
        <div className={styles.container} style={{ marginBottom: "77px" }}>
          <EventCard
            imgUrl="/images/Event%20Card.png"
            date="FRI 29TH MAR"
            header="30 Years Of Day Day + Donae'O Live! Friday 29th March…"
            location="XOYO Birmingham"
            price="FROM £25.00"
          />
        </div>
      </div>

      {/* Create bloco section */}

      <CreateBloco />
    </div>
  );
};

export default Profile;
