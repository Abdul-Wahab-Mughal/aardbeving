import React from "react";

export default function TitleBox({ title, q }) {
  return (
    <div className="bg-[--background_box] py-2.5">
      <h2 className="container font-display text-2xl md:text-3xl text-header-bar-foreground text-center m-auto px-10 flex w-fit">
        {title} <div className=" animate-bounce">{q}</div>
      </h2>
    </div>
  );
}
