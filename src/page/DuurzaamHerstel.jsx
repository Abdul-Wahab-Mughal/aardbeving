import Bannar from "@/components/section/Bannar";
import Points from "@/components/section/Points";
import React from "react";
import heroBg from "@/assets/logo.jpeg";
import ServiceCards from "@/components/section/ServiceCards";
import ContactForm from "@/components/section/ContactForm";

const points = [
  {
    title: "Duurzaam herstel is afgewezen",
    description:
      "Aardbevingen brengen begrijpelijke zorgen met zich mee over de veiligheid van uw woning of gebouw. Bewoners en eigenaren krijgen te maken met complexe informatie, verschillende beoordelingen en uiteenlopende adviezen. Wij helpen om helderheid te scheppen en inzicht te geven in de daadwerkelijke risico's.",
    image: heroBg,
  },
  {
    title: "Opnames voelen te beperkt",
    description:
      "Technische opnames van gebouwen worden soms ervaren als oppervlakkig of onvoldoende toegespitst op de specifieke situatie. Hierdoor kan het gevoel ontstaan dat belangrijke details over het hoofd worden gezien. Wij kijken verder dan de standaardcriteria.",
    image: heroBg,
  },
  {
    title: "Lange doorlooptijd of steeds wijzigende inzichten",
    description:
      "Besluitvorming rond aardbevingsschade en versterking kan lang duren en in de tussentijd kunnen inzichten veranderen. Dit zorgt voor onzekerheid en frustratie. Wij begeleiden u door dit proces en helpen u omgaan met nieuwe informatie.",
    image: heroBg,
  },
  {
    title: "Ingrijpende keuzes zoals sloop/nieuwbouw",
    description:
      "Soms staan eigenaren voor moeilijke beslissingen, zoals sloop en nieuwbouw of ingrijpende versterking. Dit heeft niet alleen technische, maar ook emotionele en financiële gevolgen. Wij ondersteunen u bij het afwegen van opties.",
    image: heroBg,
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
      <Bannar title="Duurzaam Herstel" />
      <Points
        points={points}
        title="Zijn de volgende punten herkenbaar voor u?"
      />
      <ServiceCards services={services} />
      <ContactForm showTraject />
    </main>
  );
}
