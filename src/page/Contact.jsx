import React from "react";
import herobg from "../assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { MoonStar } from "lucide-react";

export default function Context() {
  return (
    <amin>
      <section className="h-screen w-full p-5 bg-[--background_box]">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <img src={herobg} alt="" className="w-full h-full object-cover" />
          <div className=" absolute inset-0 h-full w-full bg-black/25"></div>
          <div className=" absolute m-2.5 left-0 md:left-10 top-0 md:top-20 max-w-96 w-fit">
            <div className=" p-5 md:p-10 bg-white text-black rounded-xl md:rounded space-y-5">
              <h2 className="font-semibold text-2xl">
                Neem contect op met het IMG
              </h2>
              <p>Neem contect op met het IMG</p>
              <Button className=" rounded-full bg-[--background_box] text-white">
                <MoonStar />
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className=" p-5 bg-[--background_box]">
        <div className="bg-white p-5 md:p-10 rounded-xl text-black space-y-5">
          <h2 className="text-[--background_box] text-xl md:text-4xl font-semibold uppercase">
            Vragen, Opmerkingen of aanvragen voor nieuwe projecten?
          </h2>
          <p>
            kom in contact met ons en last je vraag achter via dit
            contactformulier.
          </p>
        </div>
      </section>
    </amin>
  );
}
