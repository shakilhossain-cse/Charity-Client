import React from "react";

const JoinUs: React.FC = () => {
  return (
    <div>
      <div className="bg-[url('http://muzaddidul.com/Charity-sympathy/images/background/pb.jpg')] bg-no-repeat bg-cover w-full bg-fixed ">
        
        <div className="py-16 sm:py-28 px-4 flex justify-center items-center bg-fixed " style={{    background: "rgba(0, 0, 0, 0.7)"}}>
    

          <div className="relative max-w-2xl flex flex-col justify-center items-center text-center">
            {/* ::Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold tracking-wide">
              WE HELP MANY PEOPLE
            </h2>
            {/* ::Text */}
            <p className="mt-3 text-sm sm:text-base text-white font-medium">
              WANT TO BECOME A <span className="text-red-600">VOLUNTEER!</span>
            </p>
            {/* ::Text */}
            <p className="mt-3 text-sm sm:text-base text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo
              consequuntur iusto cum ea nostrum! Porro at iste consequatur
              placeat, suscipit, odio neque officia.
            </p>
            {/* ::Button */}
            <button className="hover:bg-transparent bg-red-600 text-white hover:text-red px-5 py-1 rounded-full mt-4 border-2 border-solid border-red-600 duration-700">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
