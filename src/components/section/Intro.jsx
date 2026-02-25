import React from "react";
import TitleBox from "../ui/titleBox";

export default function Intro() {
  return (
    <section>
      <TitleBox title="Loopt uw aardbevingsdossier vast?" />
      <div className=" py-12 max-w-4xl m-auto text-center space-y-4 px-5 lg:px-20 text-black ">
        <p className="text-[--muted-foreground] leading-relaxed">
          Heeft u te maken met aardbevingsschade, versterking of duurzaam
          herstel waar geen duidelijkheid in komt?
        </p>
        <p className="text-[--muted-foreground] leading-relaxed">
          Veel bewoners lopen vast doordat meerdere trajecten naast elkaar
          lopen, zonder samenhang. Besluiten worden per onderdeel genomen,
          terwijl het om één woning en één toekomst gaat.
        </p>
        <p className="text-[--muted-foreground] leading-relaxed">
          Aardbeving Adviesbureau (AAB) ondersteunt bewoners als onafhankelijk
          technisch adviseur wanneer trajecten vastlopen. Wij brengen overzicht,
          duiding en rust in complexe situaties.
        </p>
      </div>
    </section>
  );
}
