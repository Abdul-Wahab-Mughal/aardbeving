import React from "react";

export default function TitleBox({ title, shine }) {
  return (
    <div className="bg-[--background_box] md:py-2.5 relative overflow-hidden">
      <h2 className="container font-display text-lg md:text-xl text-header-bar-foreground text-center m-auto px-10 flex w-fit text-white text-effect">
        {title}
      </h2>
      {shine && <div className=" shine-effect"></div>}
    </div>
  );
}
