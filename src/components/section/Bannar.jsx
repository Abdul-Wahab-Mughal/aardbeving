import React from "react";
import heroBg from "@/assets/hero-bg.jpg";

export default function Bannar({ title }) {
  return (
    <section className="relative h-[80vh] min-h-[500px] max-h-[1000px] flex items-center justify-center border-b-8 border-white">
      <img
        src={heroBg}
        alt="Aardbevingsschade Groningen"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-4xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
