import React from 'react';

const CausesCard: React.FC = () => {
    return (
        <>
            <div>
                <img
                    src="http://muzaddidul.com/Charity-sympathy/images/causes/2.jpg"
                    alt=""
                    className="w-80 h-50 mx-auto shadow-xl"
                />

                <blockquote
                    className="flex flex-col justify-between p-10 -mt-6 text-left rounded-lg shadow-xl "
                >
                    <p className="text-lg text-red-500 font-semibold">
                        $189.99
                    </p>
                    <p className="mt-4 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                        voluptatem alias ut provident sapiente repellendus.
                    </p>

                    <div className="flex space-x-0.5  mt-3 text-white justify-start">
                        <button className="bg-red-600 px-8 py-2 rounded-full mt-4 uppercase">
                            Donate Now
                        </button>
                    </div>
                </blockquote>
            </div>
        </>
    );
};

export default CausesCard;