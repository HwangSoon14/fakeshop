import React from "react";
import "../css/Banner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import BannerItem from "./BannerItem";
import ModelPng from '../assets/model.png'
import Model2Png from '../assets/model2.png'
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Banner = () => {
  return (
    <div style={{ paddingTop: "10px" }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="banner"
      >
        <SwiperSlide>
          <BannerItem img="https://i.ibb.co/DG69bQ4/2.png" 
            title="AUTUMN COLLECTION"
            desc="DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem img="https://i.ibb.co/cXFnLLV/3.png" 
             title="LOUNGEWEAR LOVE"
            desc="DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem img={ModelPng} 
             title="SUMMER SALE"
            desc="DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS."
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerItem img={Model2Png} 
             title="WINTER SALE"
            desc="DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
