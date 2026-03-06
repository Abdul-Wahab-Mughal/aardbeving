import React from "react";
import TitleBox from "../ui/titleBox";

export default function Points({ points, title, color, imgpagecolor }) {
  return (
    <section>
      <TitleBox title={title} />
      <div className=" py-12 space-y-12 px-5 lg:px-20 container m-auto max-w-8xl h-full">
        {points.map((point, i) => (
          <div
            key={i}
            className={`flex flex-col ${
              i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            } ${color}`}
          >
            <div className="w-full md:w-1/2 relative min-h-[300px]">
              <img
                src={point.image}
                alt={point.title}
                className="w-full h-full object-cover rounded-sm absolute top-0 bottom-0 "
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-2.5 p-5">
              <div className="w-full space-y-2 text-black">
                <h3 className=" text-xl md:text-4xl font-bold">
                  {point.title}
                </h3>
                <p className=" md:text-lg leading-normal">
                  {point.description}
                </p>
              </div>
              <div className="flex flex-col h-full">
                <a
                  href="/contact"
                  className={` text-black max-sm:text-xs w-fit border-2 border-[--border] py-1 p-5 rounded mt-auto ${
                    imgpagecolor &&
                    i === 0 &&
                    "border-orange-500 text-orange-500"
                  }`}
                >
                  {point.btn}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
