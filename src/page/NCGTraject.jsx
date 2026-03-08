import Bannar from "@/components/section/Bannar";
import Points from "@/components/section/Points";
import React from "react";
import ServiceCards from "@/components/section/ServiceCards";
import traject2 from "@/assets/traject2.png";
import ncg1 from "@/assets/ncg1.png";
import ncg2 from "@/assets/ncg2.png";
import ncg3 from "@/assets/ncg3.png";
import ncg4 from "@/assets/ncg4.png";
import Intro from "@/components/section/Intro";
import { Helmet } from "react-helmet-async";

const points = [
  {
    title: "Onzekerheid over veiligheid",
    description:
      "Aardbevingen brengen begrijpelijke zorgen met zich mee over de veiligheid van uw woning of gebouw. Bewoners en eigenaren krijgen te maken met complexe informatie, verschillende beoordelingen en uiteenlopende adviezen. Dit kan leiden tot twijfel en stress over wat nu écht veilig is. Wij helpen om helderheid te scheppen en inzicht te geven in de daadwerkelijke risico’s.",
    image: ncg1,
    btn: "Laat uw dossier beoordelen",
  },
  {
    title: "Opnames voelen te beperkt",
    description:
      "Technische opnames van gebouwen worden soms ervaren als oppervlakkig of onvoldoende toegespitst op de specifieke situatie. Hierdoor kan het gevoel ontstaan dat belangrijke details over het hoofd worden gezien. Wij kijken verder dan de standaardcriteria en betrekken uw persoonlijke omstandigheden en ervaringen bij de beoordeling.",
    image: ncg2,
    btn: "Vraag een onafhankelijke second opinion",
  },
  {
    title: "Lange doorlooptijd of steeds wijzigende inzichten",
    description:
      "Besluitvorming rond aardbevingsschade en versterking kan lang duren en in de tussentijd kunnen inzichten veranderen. Dit zorgt voor onzekerheid en frustratie bij betrokkenen. Wij begeleiden u door dit proces, houden overzicht en helpen u omgaan met nieuwe informatie en veranderende kaders.",
    image: ncg3,
    btn: "Laat uw dossier beoordelen",
  },
  {
    title: "Ingrijpende keuzes zoals sloop/nieuwbouw",
    description:
      "Soms staan eigenaren voor moeilijke beslissingen, zoals sloop en nieuwbouw of ingrijpende versterking. Dit heeft niet alleen technische, maar ook emotionele en financiële gevolgen. Wij ondersteunen u bij het afwegen van opties, zodat u weloverwogen keuzes kunt maken die aansluiten bij uw situatie en toekomstplannen.",
    image: ncg4,
    btn: "Plan een eerste verkenning van uw dossier",
  },
];

const services = [
  {
    title: "Woning brede beoordeling van versterkingsadviezen",
    description:
      "Versterkingsadviezen gaan vaak over afzonderlijke onderdelen van een woning, terwijl alles met elkaar samenhangt. Wij bekijken uw woning als geheel en beoordelen hoe verschillende maatregelen op elkaar inwerken. Zo krijgt u een compleet en samenhangend beeld van wat nodig en verstandig is.",
  },
  {
    title: "Uitleg en duiding in begrijpelijke taal",
    description:
      "Rapporten en technische termen kunnen ingewikkeld en verwarrend zijn. Wij vertalen complexe informatie naar heldere, begrijpelijke taal. Zo weet u waar u aan toe bent en wat adviezen voor u in de praktijk betekenen.",
  },
  {
    title: "Samenhang tussen schade, versterking en toekoms",
    description:
      "Schadeherstel, versterking en uw woonwensen voor de toekomst staan niet los van elkaar. Wij helpen u om deze aspecten in samenhang te bekijken, zodat beslissingen nu ook passen bij hoe u straks wilt wonen.",
  },
  {
    title: "Ondersteuning bij keuzes en gesprekken",
    description:
      "Belangrijke beslissingen over uw woning kunnen spannend en overweldigend zijn. Wij denken met u mee, helpen opties afwegen en ondersteunen u bij gesprekken met betrokken partijen, zodat u met vertrouwen uw keuzes kunt maken.",
  },
];

const message = (
  <>
    <p>
      Valt uw woning onder de versterkingsopgave van de NCG? Dan kunt u op
      kosten van de NCG een onafhankelijke adviseur inschakelen om een
      versterkingsadvies technisch te laten beoordelen.
    </p>
    <br />
    <p>
      Deze regeling is bedoeld voor situaties waarin u twijfelt aan de inhoud,
      onderbouwing of gevolgen van een versterkingsrapport. De adviseur moet
      onafhankelijk zijn en mag niet eerder betrokken zijn geweest bij uw
      dossier.
    </p>
    <br />
    <p>Hoe vraagt u dit aan?</p>
    <ul className="pl-5">
      <li>1.Kies een onafhankelijke adviseur</li>
      <li>2.Vraag de vergoeding aan via de NCG-website.</li>
      <li>3.Na goedkeuring kan de beoordeling worden uitgevoerd.</li>
      <li>
        4.De kosten worden vergoed volgens de voorwaarden van de regeling.
      </li>
    </ul>
    <br />
    <p>
      De actuele voorwaarden en het aanvraagformulier vindt u op de website van
      de NCG:
    </p>
    <a
      href="https://www.nationaalcoordinatorgroningen.nl/vergoedingen/eigenaren/advies/ncg"
      className=" underline text-blue-500 break-words"
    >
      https://www.nationaalcoordinatorgroningen.nl/vergoedingen/eigenaren/advies/ncg
    </a>
    <p>
      Wilt u weten wat een onafhankelijke beoordeling in uw situatie kan
      betekenen? Neem dan contact met ons op voor een eerste verkenning.
    </p>
  </>
);

export default function NCGTraject() {
  return (
    <main className="bg-white">
      <Helmet>
        <title>NCG Versterking Advies | Aardbeving Adviesbureau</title>
        <meta
          name="description"
          content="Advies bij NCG versterkingstraject en beoordeling van versterkingsrapporten."
        />
      </Helmet> 
      <Bannar title="NCG-traject (Versterking)" image={traject2} />
      <Points
        points={points}
        title="Zijn de volgende punten herkenbaar voor u?"
        color="bg-[rgb(241,239,227)]"
      />
      <ServiceCards services={services} />
      <Intro
        title="Regeling Onafhankelijk Advies NCG"
        className="text-start max-w-full"
        message={message}
      />
    </main>
  );
}
