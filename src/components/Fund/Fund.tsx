import React from "react";
import { FiCheckSquare } from "react-icons/fi";

const Fund: React.FC = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24 md:flex  justify-between">
        <div>
          <h1 className="font-bold text-5xl">
            WHERE <span className="text-red-500">MONEY</span> GOES
          </h1>
          <p className="text-gray-400 max-w-2xl my-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            maxime autem unde blanditiis corrupti ad ullam, nesciunt officiis
            fugit officia accusamus ratione, aut facere. Debitis deleniti fugiat
            ad animi tempora.
          </p>
          <div className="flex items-center py-3">
            <FiCheckSquare className="text-red-500" />
            <p className="mx-4 font-semibold">
              60%{" "}
              <span className="text-gray-500 font-normal">money goes for</span>{" "}
              Food Donation{" "}
              <span className="text-gray-500 font-normal">in </span>
              Syria
            </p>
          </div>
          <div className="flex items-center py-3">
            <FiCheckSquare className="text-red-500" />
            <p className="mx-4 font-semibold">
              35%{" "}
              <span className="text-gray-500 font-normal">money goes for</span>Educational Fund <span className="text-gray-500 font-normal">in </span>
              Bihar
            </p>
          </div>
          <div className="flex items-center py-3">
            <FiCheckSquare className="text-red-500" />
            <p className="mx-4 font-semibold">
              15%{" "}
              <span className="text-gray-500 font-normal">money goes for</span>{" "}
              Health Donation
              <span className="text-gray-500 font-normal">in </span>
              Bangladesh
            </p>
          </div>
          <div className="flex items-center py-3">
            <FiCheckSquare className="text-red-500" />
            <p className="mx-4 font-semibold">
              20%{" "}
              <span className="text-gray-500 font-normal">money goes for</span>{" "}
              Building house
              <span className="text-gray-500 font-normal">in </span>
              Syria
            </p>
          </div>
          
        </div>
        <div className="md:py-0 py-10">
          <img
            src="http://muzaddidul.com/Charity-sympathy/images/feature/4.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Fund;
