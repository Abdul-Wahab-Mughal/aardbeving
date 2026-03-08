import Bannar from "@/components/section/Bannar";
import TitleBox from "@/components/ui/titleBox";
import React from "react";
import aab from "@/assets/aab.png";
import { Helmet } from "react-helmet-async";

export default function OverAAB() {
  return (
    <main className="bg-white">
      <Helmet>
        <title>Over aab | Aardbeving Adviesbureau</title>
        <meta
          name="description"
          content="Neem contact op met Aardbeving Adviesbureau in Groningen."
        />
      </Helmet>
      <Bannar title="Over AAB" image={aab} />
      <section className="bg-gray-200">
        <TitleBox title="Onze visie" />
        <div className=" container m-auto py-10 px-5 lg:px-20 text-black flex flex-col">
          <p>
            Wij vinden dat bewoners het beste geholpen worden wanneer niet
            alleen naar losse onderdelen wordt gekeken, maar naar de woning en
            het dossier als geheel. Schade, versterking en duurzaam herstel
            hangen vaak met elkaar samen. Wanneer deze onderdelen afzonderlijk
            worden beoordeeld, kan belangrijke samenhang verloren gaan.
          </p>
          <br />
          <p>
            AAB kijkt daarom integraal naar de technische situatie van een
            woning. Door rapportages, constructieve gegevens en eerdere
            beoordelingen in samenhang te analyseren, ontstaat een duidelijker
            beeld van wat er technisch speelt.
          </p>
          <br />
          <p>
            AAB voert geen herstel- of bouwwerkzaamheden uit en heeft geen
            commercieel belang bij de uitkomst van besluiten. Onze adviezen zijn
            gebaseerd op een onafhankelijke technische beoordeling.
          </p>
        </div>
      </section>
      <section>
        <TitleBox title="Onze werkwijze" />
        <div className=" container m-auto py-10 px-5 lg:px-20 text-black flex flex-col">
          <p>
            Een traject begint meestal met een eerste verkenning van uw dossier.
            We bekijken welke rapporten en informatie beschikbaar zijn en waar
            mogelijke vragen of onduidelijkheden zitten.
          </p>
          <br />
          <p>
            Vervolgens analyseren wij de technische inhoud van het dossier.
            Daarbij kijken wij onder meer naar bouwkundige en constructieve
            aspecten, eerdere opnames en de samenhang tussen schade, versterking
            en herstel.
          </p>
          <br />
          <p>
            Onze bevindingen leggen wij vast in een duidelijke technische
            analyse. Deze kan u helpen om beter te begrijpen wat er technisch
            speelt en vormt een inhoudelijke basis voor gesprekken met betrokken
            partijen.
          </p>
        </div>
      </section>
      <section>
        <TitleBox title="Onze rol in uw traject" />
        <div className=" container m-auto py-10 px-5 lg:px-20 text-black flex flex-col">
          <h4 className="text-2xl font-bold">
            AAB is een onafhankelijke technisch adviseur voor bewoners.
          </h4>
          <br />
          <p>
            Wij zijn geen onderdeel van het IMG of de NCG en nemen geen
            besluiten over schade, versterking of regelingen. Die
            verantwoordelijkheid blijft bij de betreffende instanties.
          </p>
          <br />
          <p>
            Onze rol is om bewoners technisch en inhoudelijk te ondersteunen bij
            het begrijpen van rapportages, het beoordelen van besluiten en het
            verkrijgen van duidelijkheid in complexe dossiers.
          </p>
          <br />
          <p>De bewoner blijft altijd zelf regiehouder van het traject.</p>
          <br />
          <br />
          <h5 className="text-xl font-bold">
            Twijfelt u over uw dossier of wilt u weten wat technisch klopt? Neem
            gerust contact met ons op voor een eerste verkenning.
          </h5>
        </div>
      </section>
    </main>
  );
}
