import React, { useState } from "react";
import { Link } from "react-router-dom";

const CausesData = [
  {
    id: 1,
    title: "Help to reach food",
    price: 150,
    fill: 70,
    img: "http://muzaddidul.com/Charity-sympathy/images/causes/2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt",
  },
  {
    id: 2,
    title: "Help to reach food",
    price: 150,
    fill: 60,
    img: "http://muzaddidul.com/Charity-sympathy/images/causes/3.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt",
  },
  {
    id: 3,
    title: "Help to reach food",
    price: 150,
    fill: 50,
    img: "http://muzaddidul.com/Charity-sympathy/images/causes/1.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt",
  },
];

interface Data {
  id: number;
  img: string;
  price: number;
  fill: number;
  title: string;
  desc: string;
}

const Causes: React.FC = () => {
  const [causes, setCauses] = useState<Data[]>(CausesData);

  return (
    <>
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Recent <span className="text-red-600">Causes</span>
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-gring-offset-warm-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur praesentium natus sapiente commodi.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 pt-10 mt-16 border-t border-gray-100 sm:grid-cols-2 lg:grid-cols-3 sm:gap-16">
            {/* single card  */}
            {causes.map((cause: Data, i: Number) => (
              <div>
                <img
                  src={cause.img}
                  alt=""
                  className="w-80 h-50 mx-auto shadow-xl"
                />

                <blockquote className="flex flex-col justify-between p-10 -mt-6 text-left rounded-lg shadow-xl ">
                  <p className="text-xl  text-red-500 font-extrabold">
                    ${cause.price}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full my-3">
                    <div
                      className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                      style={{ width:`${cause.fill}%`}}
                    >
                     
                     {cause.fill}%
                    </div>
                  </div>
                  <Link to={`/causes/${cause.id}`} className="text-2xl font-bold tracking-tight">
                    {cause.title}
                  </Link>
                  <p className="mt-4 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt voluptatem alias ut provident sapiente repellendus.
                  </p>

                  <div className="flex space-x-0.5  mt-3 text-white justify-start">
                    <button className="bg-white duration-700 text-red-600 px-6 py-2 uppercase rounded-full mt-4 border-2 border-solid border-red-400 hover:bg-red-600 hover:text-white">
                      Donate Now
                    </button>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Causes;
