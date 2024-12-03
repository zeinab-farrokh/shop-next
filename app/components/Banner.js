"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
// import css
import styles from "./banner.module.scss";
// import image
import slide1 from "../../public/images/banner-1.webp";
import slide2 from "../../public/images/banner-2.webp";
import slide3 from "../../public/images/banner-3.webp";
import slide4 from "../../public/images/banner-4.webp";
import slide5 from "../../public/images/banner-5.webp";
import slide6 from "../../public/images/banner-6.webp";
import { useRef } from "react";
const Banner = () => {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
  };
  return (
    <Slider {...settings}>
      <div className={styles.sliderItem}>
        <div>
          <Image src={slide3} alt="slider-picture" width="auto" height="auto" />
        </div>
        <div className={styles.bannerText}>
          <h1>کالکشن جدید</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
          </p>
          <button>دیدن محصولات</button>
        </div>
        <div>
          <Image src={slide4} alt="slider-picture" width="auto" height="auto" />
        </div>
      </div>
      <div className={styles.sliderItem}>
        <div>
          <Image src={slide1} alt="slider-picture" width="auto" height="auto" />
        </div>
        <div className={styles.bannerText}>
          <h1>کالکشن جدید</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
          </p>
          <button>دیدن محصولات</button>
        </div>
        <div>
          <Image src={slide2} alt="slider-picture" width="auto" height="auto" />
        </div>
      </div>

      <div className={styles.sliderItem}>
        <div>
          <Image src={slide5} alt="slider-picture" width="auto" height="auto" />
        </div>
        <div className={styles.bannerText}>
          <h1>کالکشن جدید</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
          </p>
          <button>دیدن محصولات</button>
        </div>
        <div>
          <Image src={slide6} alt="slider-picture" width="auto" height="auto" />
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
