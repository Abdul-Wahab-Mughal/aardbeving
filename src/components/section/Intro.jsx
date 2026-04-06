import React from "react";
import TitleBox from "../ui/titleBox";
import { ChevronRight } from "lucide-react";

const ICON_CLASS = "h-6 w-6 text-black/55";

function RegelingTile({ bt }) {
  return (
    <div
      className={`flex h-full min-h-0 w-full flex-col rounded-md border border-black/5 bg-white px-5 py-5 text-left shadow-[0_6px_16px_rgba(0,0,0,0.06)] ${
        bt.className ?? ""
      }`}
    >
      <div className="flex items-start gap-3 pb-2">
        <div className="flex flex-col items-center pt-0.5" aria-hidden>
          <bt.icon className={ICON_CLASS} strokeWidth={1.6} />
          <span className="mt-1 h-px w-7 bg-black/25" />
        </div>
        {bt.title ? (
          <h4 className="font-display text-base font-normal text-black/80">
            {bt.title}
          </h4>
        ) : (
          <div className="h-6" />
        )}
      </div>
      <div className="flex min-h-0 flex-1 flex-col text-sm leading-relaxed text-black/55">
        {bt.message}
      </div>
    </div>
  );
}

/**
 * Regeling tiles: tiles 1–3 share one grid row so they match height; tile 4 sits
 * beside on lg (taller via its own min-h), full width below on smaller screens.
 */
export function RegelingTileGrid({ boxText }) {
  if (!boxText?.length) return null;

  if (boxText.length === 4) {
    const firstThree = boxText.slice(0, 3);
    const fourth = boxText[3];
    return (
      <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-start">
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3 lg:min-w-0 lg:flex-[3]">
          {firstThree.map((bt, index) => (
            <RegelingTile key={index} bt={bt} />
          ))}
        </div>
        <div className="w-full min-w-0 shrink-0 lg:flex-1">
          <RegelingTile bt={fourth} />
        </div>
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
      {boxText.map((bt, index) => (
        <RegelingTile key={index} bt={bt} />
      ))}
    </div>
  );
}

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
        <RegelingTileGrid boxText={boxText} />
        {message && (
          <div className="max-sm:text-sm leading-relaxed">{message}</div>
        )}
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
