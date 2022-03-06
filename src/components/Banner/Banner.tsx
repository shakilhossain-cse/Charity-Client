import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Fade, Zoom } from "react-awesome-reveal";
import { Autoplay, Pagination, Navigation } from "swiper";
const Banner: React.FC = () => {
  return (
    <div className="-mt-24 z-0">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[48rem]"
      >
        <SwiperSlide className="bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-no-repeat bg-cover banner flex items-center justify-center">
          <div className="text-white z-30 md:w-1/2 p-4">
            <Fade cascade>
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
              <button className="bg-red-600 hover:bg-transparent text-white border-2 border-solid border-red-600 hover:text-red-600 px-8 py-3 rounded-full mt-4 duration-700 ">
                Join Us Today
              </button>
            </Fade>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('http://muzaddidul.com/Charity-sympathy/images/slider/2.jpg')] bg-no-repeat bg-cover banner flex items-center justify-center">
          <div className="text-white z-30 p-4 md:w-1/2">
            <Fade cascade>
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
              <button className="bg-red-600 hover:bg-transparent text-white border-2 border-solid border-red-600 hover:text-red-600 px-8 py-3 rounded-full mt-4 duration-700 ">
                Join Us Today
              </button>
            </Fade>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('http://muzaddidul.com/Charity-sympathy/images/slider/1.jpg')] bg-no-repeat bg-cover banner flex items-center justify-center">
          <div className="text-white z-30 p-4  md:w-1/2">
            <Fade cascade>
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
              <button className="bg-red-600 hover:bg-transparent text-white border-2 border-solid border-red-600 hover:text-red-600 px-8 py-3 rounded-full mt-4 duration-700 ">
                Join Us Today
              </button>
            </Fade>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
