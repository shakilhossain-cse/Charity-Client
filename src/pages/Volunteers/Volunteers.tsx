import React from 'react';

const Volunteer = [
    {
        'name': 'Harry Jonas',
        'img': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
    }
]

const Volunteers: React.FC = () => {
    return (
        <div>
            <section>
                <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
                        <div className="flex items-center p-8 bg-gray-100 rounded">
                            <div className="mx-auto text-center lg:text-left">
                                <h2 className="text-2xl font-bold">
                                    Watches
                                </h2>

                                <p className="mt-4 text-sm text-gray-700 max-w-[45ch]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, cupiditate mollitia saepe vitae libero nobis.
                                </p>

                                <a
                                    href="/collections/watches"
                                    className="inline-block px-6 py-3 mt-6 text-sm text-white bg-black rounded"
                                >
                                    View the Range
                                </a>
                            </div>
                        </div>
                        {/* Single Card */}
                        <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Volunteers;