import React from "react";
import TitleBox from "../ui/titleBox";

export default function Points({ points, title }) {
  return (
    <section>
      <TitleBox title={title} />
      <div className=" py-12 space-y-12 px-5 lg:px-20 container m-auto">
        {points.map((point, i) => (
          <div
            key={i}
            className={`flex flex-col items-center gap-8 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="w-full md:w-2/6">
              <img
                src={point.image}
                alt={point.title}
                className="w-full h-56 object-cover rounded-sm"
              />
            </div>
            <div className="w-full md:w-4/6 space-y-2 text-black">
              <h3 className=" text-xl font-bold">{point.title}</h3>
              <p className=" leading-normal">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
