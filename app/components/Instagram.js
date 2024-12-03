import React from "react";
import styles from "./instagram.module.scss";
import { CiInstagram } from "react-icons/ci";
import { IoArrowBackOutline } from "react-icons/io5";

import Link from "next/link";

const Instagram = () => {
  return (
    <div className={styles.container}>
      <h2>اینستاگرام ما</h2>

      <div className={styles.itemsContainer}>
        <div className={styles.instagramItems}>
          <div className={styles.instagramImg}>
            <img
              src={"/images/insta-1.webp"}
              alt="insta-img"
              width="auto"
              height="auto"
            />
            <CiInstagram className={styles.instagram} fontSize={32} />
          </div>
          <div className={styles.instagramText}>
            <h3>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <Link href="">
              دیدن جزئیات
              <IoArrowBackOutline className={styles.arrow} fontSize={18} />
            </Link>
          </div>
        </div>

        <div className={styles.instagramItems}>
          <div className={styles.instagramImg}>
            <img
              src={"/images/insta-2.webp"}
              alt="insta-img"
              width="auto"
              height="auto"
            />
            <CiInstagram className={styles.instagram} fontSize={32} />
          </div>
          <div className={styles.instagramText}>
            <h3>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <Link href="">
              دیدن جزئیات
              <IoArrowBackOutline className={styles.arrow} fontSize={18} />
            </Link>
          </div>
        </div>

        <div className={styles.instagramItems}>
          <div className={styles.instagramImg}>
            <img
              src={"/images/insta-3.webp"}
              alt="insta-img"
              width="auto"
              height="auto"
            />
            <CiInstagram className={styles.instagram} fontSize={32} />
          </div>
          <div className={styles.instagramText}>
            <h3>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <Link href="">
              دیدن جزئیات
              <IoArrowBackOutline className={styles.arrow} fontSize={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
