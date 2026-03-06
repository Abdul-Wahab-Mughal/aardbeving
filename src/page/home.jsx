import Bannar from "@/components/section/Bannar";
import Intro from "@/components/section/Intro";
import Testimonials from "@/components/section/Testimonials";
import Traject from "@/components/section/Traject";
import React from "react";
import heroBg from "@/assets/hero-bg.jpg";

export default function Index() {
  return (
    <main className="bg-white">
      <Bannar
        title="Onafhankelijke technische dossieranalyse bij schade, versterking en vastgelopen dossiers."
        image={heroBg}
      />
      <Traject />
      <Intro
        color="bg-gray-200"
        box
        title="Wanneer uw dossier technisch niet klopt"
        subtitle="Wij beoordelen uw woning integraal, niet per regeling maar als één technisch geheel."
        message={`Als onafhankelijk technisch adviseur kijken wij kritisch naar rapporten, besluiten en de samenhang tussen schade, versterking en herstel.
        
        Veel bewoners lopen vast doordat schade, versterking en herstel als losse trajecten worden behandeld, terwijl het om één woning gaat. 
        
        Aardbeving Adviesbureau (AAB) ondersteunt bewoners als onafhankelijk technisch adviseur wanneer trajecten vastlopen. Wij brengen overzicht, duiding en rust in complexe situatie.`}
      />
      <Testimonials title="Hoe wij het aanpakken" />
    </main>
  );
}
