import React from "react";
import Banner from "./components/Banner";
import GroupImage from "./components/GroupImage";
import Instagram from "./components/Instagram";
import LatestProduct from "./components/LatestProduct";
import SliderAnimation from "./components/SliderAnimation";

const Home = () => {
  return (
    <div>
      <Banner />
      <SliderAnimation />
      <LatestProduct />
      <GroupImage />
      <Instagram />
    </div>
  );
};

export default Home;
