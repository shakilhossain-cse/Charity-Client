import React from 'react';
import CausesCard from '../CausesCard/CausesCard';

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
                        {/* map will be here */}
                        <CausesCard />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Causes;