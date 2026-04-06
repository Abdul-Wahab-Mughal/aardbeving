import React from "react";

export default function TitleBox({ title }) {
  return (
    <div className="relative overflow-hidden bg-[--background_box] md:py-2.5">
      <h2 className="container relative z-10 m-auto flex w-fit justify-center px-10 text-center font-display text-lg text-header-bar-foreground text-white md:text-xl">
        {title}
      </h2>
    </div>
  );
}
