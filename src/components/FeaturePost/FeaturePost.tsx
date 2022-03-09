import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const FeaturePost: React.FC = () => {
  return (
    <div className="md:w-1/2 w-full mx-auto -mt-28 relative  bg-white z-10 shadow-xl">
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
    
      >
        <SwiperSlide>
          <div className="flex p-10 shadow-xl">
            <div className="p">
              <img
                src="http://muzaddidul.com/Charity-sympathy/images/feature/f.jpg"
                alt="featurepost"
              />
            </div>
            <div className="ml-6">
              <h3 className="text-3xl font-bold">
                Helping for <span className="text-red-500">education</span> to
                syrian <br />
                child &amp; <span className="text-red-500">food planting</span>
              </h3>
           <div className="w-full bg-gray-200 rounded-full my-3">
  <div className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '45%'}}> 45%</div>
</div>

              <h5 className="font-bold text-red-500 text-2xl">
                $400
                <span className="text-gray-700 text-sm font-normal mx-3">
                  Raised of
                </span>
                <span className="text-xl mx-2">$1000 </span>{" "}
                <span className="text-gray-700 text-sm font-normal"> Goal</span>
              </h5>
              <button className="border-gray-500 border-2 px-5 py-2 my-3 rounded-full text-sm">
                DONATE NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex p-10 shadow-xl">
            <div className="p">
              <img
                src="http://muzaddidul.com/Charity-sympathy/images/feature/f.jpg"
                alt="featurepost"
              />
            </div>
            <div className="ml-6">
              <h3 className="text-3xl font-bold">
                Helping for <span className="text-red-500">education</span> to
                syrian <br />
                child &amp; <span className="text-red-500">food planting</span>
              </h3>
              <div className="w-full bg-gray-200 rounded-full my-3">
  <div className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '45%'}}> 45%</div>
</div>
              <h5 className="font-bold text-red-500 text-2xl">
                $400
                <span className="text-gray-700 text-sm font-normal mx-3">
                  Raised of
                </span>
                <span className="text-xl mx-2">$1000 </span>{" "}
                <span className="text-gray-700 text-sm font-normal"> Goal</span>
              </h5>
              <button className="border-gray-500 border-2 px-5 py-2 my-3 rounded-full text-sm">
                DONATE NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex p-10 shadow-xl">
            <div className="p">
              <img
                src="http://muzaddidul.com/Charity-sympathy/images/feature/f.jpg"
                alt="featurepost"
              />
            </div>
            <div className="ml-6">
              <h3 className="text-3xl font-bold">
                Helping for <span className="text-red-500">education</span> to
                syrian <br />
                child &amp; <span className="text-red-500">food planting</span>
              </h3>
              <div className="w-full bg-gray-200 rounded-full my-3">
  <div className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '45%'}}> 45%</div>
</div>
              <h5 className="font-bold text-red-500 text-2xl">
                $400
                <span className="text-gray-700 text-sm font-normal mx-3">
                  Raised of
                </span>
                <span className="text-xl mx-2">$1000 </span>{" "}
                <span className="text-gray-700 text-sm font-normal"> Goal</span>
              </h5>
              <button className="border-gray-500 border-2 px-5 py-2 my-3 rounded-full text-sm">
                DONATE NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturePost;
