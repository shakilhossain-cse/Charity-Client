import React from "react";

const OurMission: React.FC = () => {
  return (
    <div>
      <section className="bg-white border border-b-2">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our <span className='text-red-600'>Mission</span>
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-gring-offset-warm-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur praesentium natus sapiente commodi.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 pt-10 mt-16 border-t border-gray-100 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16">
            <div className="">
              <img
                src="http://muzaddidul.com/Charity-sympathy/images/missions/1.png"
                alt=""
                className="object-cover w-28 h-28 mx-auto rounded-full shadow-xl hover:drop-shadow-xl "
              />
              <blockquote className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg  ">
                <h2 className="font-bold text-2xl pt-3">DONATION</h2>
                <p className="mt-4 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt voluptatem alias ut provident sapiente repellendus.
                </p>

                <div className="flex space-x-0.5 justify-center mt-8">
                  <button className="bg-white duration-700 text-red-600 px-5 py-1 rounded-full mt-4 border-2 border-solid border-red-400 hover:bg-red-600 hover:text-white">
                    Join Us
                  </button>
                </div>
              </blockquote>
            </div>

            <div className="">
              <img
                src="http://muzaddidul.com/Charity-sympathy/images/missions/2.png"
                alt=""
                className="object-cover w-28 h-28 mx-auto rounded-full shadow-xl hover:drop-shadow-xl"
              />

              <blockquote className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg  ">
                <h2 className="font-bold text-2xl pt-3">VOLUNTEERS</h2>
                <p className="mt-4 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt voluptatem alias ut provident sapiente repellendus.
                </p>

                <div className="flex space-x-0.5 justify-center mt-8 text-white">
                  <button className="bg-white duration-700 text-red-600 px-5 py-1 rounded-full mt-4 border-2 border-solid border-red-400 hover:bg-red-600 hover:text-white">
                    Join Us
                  </button>
                </div>
              </blockquote>
            </div>

            <div className="">
              <img
                src="http://muzaddidul.com/Charity-sympathy/images/missions/3.png"
                alt=""
                className="object-cover w-28 h-28 mx-auto rounded-full shadow-xl hover:drop-shadow-xl "
              />

              <blockquote className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg ">
                <h2 className="font-bold text-2xl pt-3">FUNDRAISING</h2>
                <p className="mt-4 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt voluptatem alias ut provident sapiente repellendus.
                </p>

                <div className="flex space-x-0.5 justify-center mt-8 text-white">
                  <button className="bg-white duration-700 text-red-600 px-5 py-1 rounded-full mt-4 border-2 border-solid border-red-400 hover:bg-red-600 hover:text-white">
                    Join Us
                  </button>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;