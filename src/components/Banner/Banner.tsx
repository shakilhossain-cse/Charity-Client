import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const Banner: React.FC = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[52rem]"
      >
  
        <SwiperSlide className="bg-[url('http://muzaddidul.com/Charity-sympathy/images/slider/3.jpg')] bg-no-repeat bg-cover banner">
        </SwiperSlide>
        <SwiperSlide className="bg-[url('http://muzaddidul.com/Charity-sympathy/images/slider/2.jpg')] bg-no-repeat bg-cover banner">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="bg-[url('http://muzaddidul.com/Charity-sympathy/images/slider/1.jpg')] bg-no-repeat bg-cover banner">
          Slide 3
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
