import React from 'react';

const OurMission: React.FC = () => {
    return (
        <div>
            <section className="bg-white">
                <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Our Mission
                        </h2>
                        <p className="max-w-lg mx-auto mt-4 text-gring-offset-warm-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                            praesentium natus sapiente commodi.
                        </p>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-8 pt-10 mt-16 border-t border-gray-100 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16"
                    >
                        <div>
                            <img
                                src="http://muzaddidul.com/Charity-sympathy/images/missions/1.png"
                                alt=""
                                className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
                            />

                            <blockquote
                                className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl "
                            >
                                <p className="mt-4 text-sm text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                                    voluptatem alias ut provident sapiente repellendus.
                                </p>

                                <div className="flex space-x-0.5 justify-center mt-8 text-white">
                                    <button className="bg-red-600  px-8 py-3 rounded-full mt-4">
                                        Join Us
                                    </button>
                                </div>
                            </blockquote>
                        </div>

                        <div>
                            <img
                                src="http://muzaddidul.com/Charity-sympathy/images/missions/2.png"
                                alt=""
                                className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
                            />

                            <blockquote
                                className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl "
                            >
                                <p className="mt-4 text-sm text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                                    voluptatem alias ut provident sapiente repellendus.
                                </p>

                                <div className="flex space-x-0.5 justify-center mt-8 text-white">
                                    <button className="bg-red-600 px-8 py-3 rounded-full mt-4">
                                        Join Us
                                    </button>
                                </div>
                            </blockquote>
                        </div>

                        <div>
                            <img
                                src="http://muzaddidul.com/Charity-sympathy/images/missions/3.png"
                                alt=""
                                className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
                            />

                            <blockquote
                                className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl "
                            >
                                <p className="mt-4 text-sm text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                                    voluptatem alias ut provident sapiente repellendus.
                                </p>

                                <div className="flex space-x-0.5 justify-center mt-8 text-white">
                                    <button className="bg-red-600 px-8 py-3 rounded-full mt-4">
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