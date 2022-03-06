import React from 'react';

const JoinUs: React.FC = () => {
    return (
        <div>
            <div className="relative mx-auto w-full max-w-7xl ">
                <div className="py-16 sm:py-28 px-4 flex justify-center items-center bg-fixed bg-neutral-600">

                    {/* :IMAGE BACKGROUND */}
                    <img src="https://i.ibb.co/KGbvXCH/joinus.png" alt="" className=" absolute inset-0 w-full h-full object-cover filter mix-blend-overlay" />


                    <div className="relative max-w-2xl flex flex-col justify-center items-center text-center">
                        {/* ::Title */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold tracking-wide">WE HELP MANY PEOPLE</h2>
                        {/* ::Text */}
                        <p className="mt-3 text-sm sm:text-base text-white font-medium">WANT TO BECOME A <span className='text-red-600'>VOLUNTEER!</span></p>
                        {/* ::Text */}
                        <p className="mt-3 text-sm sm:text-base text-white font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo consequuntur iusto cum ea nostrum! Porro at iste consequatur placeat, suscipit, odio neque officia.</p>
                        {/* ::Button */}
                        <button className="bg-transparent text-red-600 px-5 py-1 rounded-full mt-4 border-2 border-solid border-red-600 hover:bg-red-600 hover:text-white">
                            Apply Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JoinUs;