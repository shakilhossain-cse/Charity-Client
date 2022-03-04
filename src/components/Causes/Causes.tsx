import React from 'react';

const Causes: React.FC = () => {
    return (
        <>
            <section className="bg-white">
                <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Recent <span className='text-red-600'>Causes</span>
                        </h2>
                        <p className="max-w-lg mx-auto mt-4 text-gring-offset-warm-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                            praesentium natus sapiente commodi.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 pt-10 mt-16 border-t border-gray-100 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16" >
                        {/* Map will be here */}
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
                                    <button className="bg-red-600 px-8 py-2 rounded-full mt-4">
                                        Join Us
                                    </button>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Causes;