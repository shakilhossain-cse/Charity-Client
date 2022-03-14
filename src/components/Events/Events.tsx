import React, { useState } from "react";
import { BsCalendar2Date } from "react-icons/bs";

const EventsData = [
  {
    id: 1,
    title: "Harry Jonas",
    date: "01-05-2022",
    img: "http://muzaddidul.com/Charity-sympathy/images/event/1.jpg",
  },
  {
    id: 2,
    title: "Harry Jonas",
    date: "01-05-2022",
    img: "http://muzaddidul.com/Charity-sympathy/images/event/1.jpg",
  },
];
interface Data {
  id: number;
  title: string;
  date: string;
  img: string;
}
const Events: React.FC = () => {
  const [latestEvent, setLatestEvent] = useState<Data[]>(EventsData);

  return (
    <>
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          <div className="flex items-center p-8 bg-gray-100 rounded">
            <div className="mx-auto text-center lg:text-left">
              <h2 className="text-2xl font-bold">Latest Events</h2>

              <p className="mt-4 text-sm text-gray-700 max-w-[45ch]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                cupiditate mollitia saepe vitae libero nobis.
              </p>

              <a
                href="/collections/watches"
                className="inline-block px-6 py-3 mt-6 text-sm text-white bg-red-600 rounded"
              >
                View the Range
              </a>
            </div>
          </div>
          {/* Single Card */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">
            {
              latestEvent.map((event: Data, i: Number) => (
                <div key={event.id}>
                  <a
                    href="/product/simple-watch"
                    className="block"
                  >
                    <div className="aspect-w-1 aspect-h-1">
                      <img
                        loading="lazy"
                        alt="Simple Watch"
                        className="object-cover rounded"
                        src={event.img}
                      />
                    </div>

                    <div className="mt-2">
                      <h5 className="mt-1 text-xl font-bolder text-red-700 flex ">
                        <span className="text-black mt-1 mr-2"><BsCalendar2Date /></span> {event.date}
                      </h5>
                      <h5 className="font-medium">
                        {event.title}
                      </h5>

                    </div>
                  </a>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
