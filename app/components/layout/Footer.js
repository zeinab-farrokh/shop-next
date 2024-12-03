import React from "react";
import styles from "./footer.module.scss";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h3>درباره ما</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
      </div>
      <div className={styles.menu}>
        <h3>دسترسی سریع</h3>
        <ul>
          <li>صفحه اصلی</li>
          <li>کالکشن</li>
          <li>محصولات</li>
          <li>بلاگ</li>
        </ul>
      </div>
      <div className={styles.socialMedia}>
        <h3>شبکه های اجتماعی</h3>
        <ul>
          <li>
            <FaInstagram fontSize={25} className={styles.footerIcon} />
          </li>
          <li>
            <BiLogoFacebook fontSize={25} className={styles.footerIcon} />
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Footer;
