import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import ecommadmin from "../../img/ecommadmin.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import foodweb from "../../img/foodweb.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>
 {/* slider */}
 <Swiper
        spaceBetween={60}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
      <img src={foodweb} alt="" />
    </SwiperSlide>
      <SwiperSlide>
      <img src={ecommadmin} alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={Sidebar} alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={MusicApp} alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={HOC} alt="" />
    </SwiperSlide>
  </Swiper>
    </div>
  );
};

export default Portfolio;
