import React from "react";
import herobg from "../assets/hero-bg.jpg";
import { ChevronRight } from "lucide-react";

export default function Context() {
  function scrollup() {
    const section = document.getElementById("contact");
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  return (
    <amin>
      <section className="h-screen w-full p-5 bg-[--background_box]">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <img src={herobg} alt="" className="w-full h-full object-cover" />
          <div className=" absolute inset-0 h-full w-full bg-black/25"></div>
          <div className=" absolute m-2.5 left-0 md:left-10 top-0 md:top-20 max-w-xl w-full">
            <div className=" p-5 md:p-10 bg-white text-black rounded-xl md:rounded space-y-5 w-full">
              <h2 className="font-semibold text-2xl leading-none">
                Aanvraag onafhankelijke ondersteuning
              </h2>
              <p>Loopt uw aardbevingsdossier vast?</p>
              <p>
                Aardbeving Adviesbureau (AAB) ondersteunt bewoners bij complexe
                situaties rond schade, versterking en duurzaam herstel. Met dit
                formulier krijgen wij inzicht in uw situatie en beoordelen wij
                of en hoe wij u technisch kunnen ondersteunen. <br />
                Ondersteuning kan in veel gevallen (deels) worden vergoed via
                bestaande regelingen. Indien relevant informeren wij u hierover.
              </p>
              <button
                className=" rounded-full bg-[--background_box] text-white py-2 px-5 flex gap-2.5"
                onClick={() => scrollup()}
              >
                <ChevronRight />
                Contact met het IMG
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* contact  */}
      <section id="contact" className=" p-5 bg-[--background_box]">
        <div className="bg-white p-5 md:p-10 rounded-xl text-black space-y-5">
          <h2 className="text-[--background_box] text-xl md:text-4xl font-semibold uppercase">
            Vragen, Opmerkingen of aanvragen voor nieuwe projecten?
          </h2>
          <p>
            Kom in contact met ons en laat je vraag achter via dit
            contactformulier.
          </p>
          <div>Form Contact Coming Soon...</div>
        </div>
      </section>
    </amin>
  );
}
