import React from "react";
import styles from "./groupImage.module.scss";
import Image from "next/image";

import group1 from "../../public/images/group-1.webp";
import group2 from "../../public/images/group-2.webp";
import group3 from "../../public/images/group-3.webp";

const GroupImage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstImgPart}>
        <Image src={group1} alt="group-img" width="auto" height="auto" />
      </div>
      <div className={styles.secondImgPart}>
        <div className={styles.thirdtextPart}>
          <h1>کالکشن جدید</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
          </p>
        </div>
        <div className={styles.fourthImgPart}>
          <div>
            <Image src={group2} alt="group-img" width="auto" height="auto" />
          </div>
          <div>
            <Image src={group3} alt="group-img" width="auto" height="auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupImage;
