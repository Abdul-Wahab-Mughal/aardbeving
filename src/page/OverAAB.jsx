import Bannar from "@/components/section/Bannar";
import ContactForm from "@/components/section/ContactForm";
import TitleBox from "@/components/ui/titleBox";
import React from "react";

export default function OverAAB() {
  return (
    <main className="bg-white">
      <Bannar title="Over AAB" />
      <section>
        <TitleBox title="Algemeen" />
        <div className=" container m-auto py-10 px-5 lg:px-20 text-black flex flex-col gap-6">
          <p>
            Aardbevingsschade en versterkingstrajecten in Groningen kunnen
            langdurig en complex zijn. Bewoners krijgen te maken met
            verschillende regelingen, rapporten en besluiten, die niet altijd
            goed op elkaar aansluiten.
          </p>
          <p>
            Aardbeving Adviesbureau (AAB) biedt onafhankelijke technische
            ondersteuning aan bewoners die behoefte hebben aan duidelijkheid en
            inhoudelijke onderbouwing
          </p>
          <div>
            <p className="font-bold">Wij helpen wanneer u:</p>
            <ul className=" list-disc pl-5">
              <li>twijfelt aan een schade- of versterkingsrapport</li>
              <li>het overzicht mist in meerdere trajecten</li>
              <li>terugkerende schade ervaart</li>
              <li>wilt weten wat technisch klopt en wat niet</li>
            </ul>
          </div>
          <p>
            Wij analyseren bouwkundige en constructieve vraagstukken, beoordelen
            rapportages en brengen samenhang aan in uw dossier. Onze rol is
            technisch en inhoudelijk, u houdt zelf de regie.
          </p>
        </div>
      </section>
      <section className="bg-gray-200">
        <TitleBox title="Onze visie" />
        <div className=" container m-auto py-10 px-5 lg:px-20 text-black flex flex-col gap-6 ">
          <p>
            Wij vinden dat bewoners het beste geholpen worden wanneer er niet
            alleen naar losse onderdelen wordt gekeken, maar naar de woning als
            geheel. Schade, versterking en duurzaam herstel hangen vaak samen.
            Duidelijkheid ontstaat wanneer technische vragen zorgvuldig worden
            onderzocht en helder worden uitgelegd.
          </p>
          <p>
            AAB voert geen herstel- of bouwwerkzaamheden uit en heeft geen
            commercieel belang bij de uitkomst van besluiten. Onze adviezen zijn
            gebaseerd op onafhankelijke technische beoordeling.
          </p>
        </div>
      </section>
      <ContactForm showTraject />
    </main>
  );
}
