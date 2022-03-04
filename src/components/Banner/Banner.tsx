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
    <div className="-mt-24 z-0">
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
        className="h-[50rem]"
      >
        <SwiperSlide className="bg-[url('http://muzaddidul.com/Charity-sympathy/images/slider/3.jpg')] bg-no-repeat bg-cover banner flex items-center justify-center">
          <div className="text-white z-30 md:w-1/2 p-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quidem!
            </p>
            <h2 className="md:text-6xl text-4xl font-bold my-4">
              Help The <span className="text-red-700 ">Poor</span> People
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              praesentium recusandae voluptatum cumque iste eligendi repellendus
              error dolorem. Omnis dolore suscipit a iusto saepe magni libero
              facilis nulla esse alias.
            </p>
            <button className="bg-red-600 px-8 py-3 rounded-full mt-4">
              Join Us Today
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('http://muzaddidul.com/Charity-sympathy/images/slider/2.jpg')] bg-no-repeat bg-cover banner flex items-center justify-center">
          <div className="text-white z-30 p-4 md:w-1/2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quidem!
            </p>
            <h2 className="md:text-6xl text-4xl font-bold my-4">
              Help The <span className="text-red-700 ">Poor</span> People
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              praesentium recusandae voluptatum cumque iste eligendi repellendus
              error dolorem. Omnis dolore suscipit a iusto saepe magni libero
              facilis nulla esse alias.
            </p>
            <button className="bg-red-600 px-8 py-3 rounded-full mt-4">
              Join Us Today
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('http://muzaddidul.com/Charity-sympathy/images/slider/1.jpg')] bg-no-repeat bg-cover banner flex items-center justify-center">
          <div className="text-white z-30 p-4  md:w-1/2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quidem!
            </p>
            <h2 className="md:text-6xl text-4xl font-bold my-4">
              Help The <span className="text-red-700 ">Poor</span> People
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              praesentium recusandae voluptatum cumque iste eligendi repellendus
              error dolorem. Omnis dolore suscipit a iusto saepe magni libero
              facilis nulla esse alias.
            </p>
            <button className="bg-red-600 px-8 py-3 rounded-full mt-4">
              Join Us Today
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
