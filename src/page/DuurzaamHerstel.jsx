import Bannar from "@/components/section/Bannar";
import Points from "@/components/section/Points";
import React from "react";
import ServiceCards from "@/components/section/ServiceCards";
import traject3 from "@/assets/traject3_Ban.png";
import dh1 from "@/assets/dh1.png";
import dh2 from "@/assets/dh2.png";
import dh3 from "@/assets/dh3.png";
import TitleBox from "@/components/ui/titleBox";

const points = [
  {
    title: "Duurzaam herstel is afgewezen",
    description:
      "Het kan frustrerend zijn wanneer een voorstel voor duurzaam of structureel herstel wordt afgewezen, terwijl u juist op zoek bent naar een oplossing voor de lange termijn. Dit roept vragen op over de motieven, criteria en onderbouwing van het besluit. Wij helpen om hier duidelijkheid in te krijgen.",
    image: dh1,
  },
  {
    title: "Beoordeling blijft ‘binnen normen’",
    description:
      "Soms wordt geconcludeerd dat een woning formeel ‘binnen de normen’ valt, terwijl u zich er toch niet veilig of comfortabel in voelt. Dit spanningsveld tussen regelgeving en leefbaarheid kan verwarrend zijn. Wij kijken verder dan alleen de norm en betrekken uw praktische woonsituatie",
    image: dh2,
  },
  {
    title: "Woning functioneert niet goed of blijft kwetsbaar",
    description:
      "Ook na herstel of versterking kan een woning nog gebreken vertonen of kwetsbaar aanvoelen. Dat kan zorgen geven over comfort, veiligheid en toekomstwaarde. Wij analyseren waar de kwetsbaarheden zitten en wat nodig is om uw woning robuuster te maken. ",
    image: dh3,
  },
];

const services = [
  {
    title: "Woningbrede beoordeling van versterkingsadviezen",
    description:
      "Versterkingsadviezen gaan vaak over afzonderlijke onderdelen van een woning, terwijl alles met elkaar samenhangt. Wij bekijken uw woning als geheel en beoordelen hoe verschillende maatregelen op elkaar inwerken. Zo krijgt u een compleet en samenhangend beeld van wat nodig en verstandig is.",
  },
  {
    title: "Uitleg en duiding in begrijpelijke taal",
    description:
      "Rapporten en technische termen kunnen ingewikkeld en verwarrend zijn. Wij vertalen complexe informatie naar heldere, begrijpelijke taal. Zo weet u waar u aan toe bent en wat adviezen voor u in de praktijk betekenen.",
  },
  {
    title: "Samenhang tussen schade, versterking en toekomst",
    description:
      "Schadeherstel, versterking en uw woonwensen voor de toekomst staan niet los van elkaar. Wij helpen u om deze aspecten in samenhang te bekijken, zodat beslissingen nu ook passen bij hoe u straks wilt wonen.",
  },
  {
    title: "Ondersteuning bij keuzes en gesprekken",
    description:
      "Belangrijke beslissingen over uw woning kunnen spannend en overweldigend zijn. Wij denken met u mee, helpen opties afwegen en ondersteunen u bij gesprekken met betrokken partijen, zodat u met vertrouwen uw keuzes kunt maken.",
  },
];

export default function DuurzaamHerstel() {
  return (
    <main className="bg-white">
      <Bannar title="Duurzaam Herstel" image={traject3} />
      <Points
        points={points}
        title="Zijn de volgende punten herkenbaar voor u?"
      />
      <ServiceCards services={services} />
      <TitleBox title="Kosten onafhankelijke ondersteuning" />
    </main>
  );
}
