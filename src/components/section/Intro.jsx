import React from "react";
import TitleBox from "../ui/titleBox";
import { ChevronRight } from "lucide-react";

export default function Intro({
  title,
  subtitle,
  message,
  box,
  boxText,
  className,
  color,
}) {
  return (
    <section className={`pb-5 md:pb-10 ${color} overflow-hidden`}>
      <TitleBox title={title} />
      <div
        className={`py-5 md:py-12 max-w-5xl m-auto text-center space-y-4 px-5 lg:px-20 text-black text-lg whitespace-pre-line ${className}`}
      >
        {subtitle && <p className=" leading-relaxed font-bold">{subtitle}</p>}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 w-full">
          {boxText?.map((bt, index) => (
            <div
              key={index}
              className=" border rounded-xl px-2.5 py-5 space-y-2.5 w-full"
            >
              <div className="flex gap-2.5">
                <span className=" w-8 h-8 flex justify-center items-center bg-[--background_box] rounded-full text-white text-xl">
                  {index + 1}
                </span>
                <bt.icon size={50} />
              </div>
              <h4 className="font-bold">{bt.title}</h4>
              <div className="text-sm whitespace">{bt.message}</div>
            </div>
          ))}
        </div>
        {message && <div className="max-sm:text-sm leading-relaxed">{message}</div>}
      </div>
      {box && (
        <div className="px-5">
          <div className="bg-[--background_box] max-w-xl m-auto mb-10 p-10 pb-16 rounded-[50px] w-full text-white">
            <h3 className="text-3xl md:text-5xl font-bold">
              Schakel AAB in voor:
            </h3>
            <div className="py-10 flex flex-col gap-5">
              <div className="flex gap-1 text-lg">
                <ChevronRight /> Schade wordt niet erkend
              </div>

              <div className="flex gap-1 text-lg">
                <ChevronRight /> Rapporten spreken elkaar tegen
              </div>

              <div className="flex gap-1 text-lg">
                <ChevronRight /> Versterkingsadvies voelt onlogisch
              </div>

              <div className="flex gap-1 text-lg">
                <ChevronRight /> Duurzaam herstel wordt afgewezen
              </div>

              <div className="flex gap-1 text-lg">
                <ChevronRight /> U mist overzicht tussen IMG, NCG en herstel
              </div>
            </div>
            <a
              href="/contact"
              className="text-white border-white hover:text-orange-400 border hover:border-orange-400 px-2 py-1"
            >
              Laat uw dossier beoordelen
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
