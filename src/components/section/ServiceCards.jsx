import React from "react";
import TitleBox from "../ui/titleBox";

export default function ServiceCards({ services }) {
  return (
    <section>
      <TitleBox title="Wat kan AAB voor u betekenen?" />
      <div className=" bg-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container m-auto py-10 px-5 lg:px-20">
          {services.map((item, i) => (
            <div
              key={i}
              className=" text-black"
            >
              <h3 className=" text-lg font-bold mb-2 leading-none">
                {item.title}
              </h3>
              <p className=" leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
