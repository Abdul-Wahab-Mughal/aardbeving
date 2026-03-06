import React from "react";
import TitleBox from "../ui/titleBox";
import { ChevronRight } from "lucide-react";

export default function Intro({
  title,
  subtitle,
  message,
  box,
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
        <p className="max-sm:text-sm leading-relaxed">{message}</p>
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
