import Bannar from "@/components/section/Bannar";
import Points from "@/components/section/Points";
import React from "react";
import ServiceCards from "@/components/section/ServiceCards";
import traject2 from "@/assets/traject2.png";
import ncg1 from "@/assets/ncg1.png";
import ncg2 from "@/assets/ncg2.png";
import ncg3 from "@/assets/ncg3.png";
import ncg4 from "@/assets/ncg4.png";
import TitleBox from "@/components/ui/titleBox";

const points = [
  {
    title: "Onzekerheid over veiligheid",
    description:
      "Aardbevingen brengen begrijpelijke zorgen met zich mee over de veiligheid van uw woning of gebouw. Bewoners en eigenaren krijgen te maken met complexe informatie, verschillende beoordelingen en uiteenlopende adviezen. Dit kan leiden tot twijfel en stress over wat nu écht veilig is. Wij helpen om helderheid te scheppen en inzicht te geven in de daadwerkelijke risico’s.",
    image: ncg1,
  },
  {
    title: "Opnames voelen te beperkt",
    description:
      "Technische opnames van gebouwen worden soms ervaren als oppervlakkig of onvoldoende toegespitst op de specifieke situatie. Hierdoor kan het gevoel ontstaan dat belangrijke details over het hoofd worden gezien. Wij kijken verder dan de standaardcriteria en betrekken uw persoonlijke omstandigheden en ervaringen bij de beoordeling.",
    image: ncg2,
  },
  {
    title: "Lange doorlooptijd of steeds wijzigende inzichten",
    description:
      "Besluitvorming rond aardbevingsschade en versterking kan lang duren en in de tussentijd kunnen inzichten veranderen. Dit zorgt voor onzekerheid en frustratie bij betrokkenen. Wij begeleiden u door dit proces, houden overzicht en helpen u omgaan met nieuwe informatie en veranderende kaders.",
    image: ncg3,
  },
  {
    title: "Ingrijpende keuzes zoals sloop/nieuwbouw",
    description:
      "Soms staan eigenaren voor moeilijke beslissingen, zoals sloop en nieuwbouw of ingrijpende versterking. Dit heeft niet alleen technische, maar ook emotionele en financiële gevolgen. Wij ondersteunen u bij het afwegen van opties, zodat u weloverwogen keuzes kunt maken die aansluiten bij uw situatie en toekomstplannen.",
    image: ncg4,
  },
];

const services = [
  {
    title: "afhankelijk technisch perspectief op duurzaam herstel ",
    description:
      "Wij geven een onafhankelijke technische visie op wat écht duurzaam en toekomstbestendig herstel inhoudt voor uw specifieke woning.",
  },
  {
    title: "Inzicht in haalbaarheid en samenhang",
    description:
      "Wij brengen in beeld welke oplossingen technisch haalbaar zijn en hoe verschillende maatregelen met elkaar samenhangen, zodat keuzes logisch en uitvoerbaar zijn.",
  },
  {
    title: "Voorkomen van eindeloze herstelcycli ",
    description:
      "Door te focussen op structurele oorzaken helpen wij voorkomen dat u vastloopt in steeds terugkerende herstelrondes zonder blijvend resultaat.",
  },
  {
    title: "Onderbouwing van toekomstbestendige keuzes",
    description:
      "Wij leveren een duidelijke technische onderbouwing voor keuzes die niet alleen vandaag werken, maar ook op de langere termijn verstandig zijn.",
  },
];

export default function NCGTraject() {
  return (
    <main className="bg-white">
      <Bannar title="NCG-traject (Versterking)" image={traject2} />
      <Points
        points={points}
        title="Zijn de volgende punten herkenbaar voor u?"
      />
      <ServiceCards services={services} />
      <TitleBox title="Kosten onafhankelijke ondersteuning" />
    </main>
  );
}
