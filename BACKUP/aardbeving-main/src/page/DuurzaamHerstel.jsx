import Bannar from "@/components/section/Bannar";
import Points from "@/components/section/Points";
import React from "react";
import ServiceCards from "@/components/section/ServiceCards";
import traject3 from "@/assets/traject3_Ban.png";
import dh1 from "@/assets/dh1.png";
import dh2 from "@/assets/dh2.png";
import dh3 from "@/assets/dh3.png";
import Intro from "@/components/section/Intro";
import { Helmet } from "react-helmet-async";
import { BadgeEuroIcon, Check, FileCheck2, FileSearch2 } from "lucide-react";

const points = [
  {
    title: "Duurzaam herstel is afgewezen",
    description:
      "Het kan frustrerend zijn wanneer een voorstel voor duurzaam of structureel herstel wordt afgewezen, terwijl u juist op zoek bent naar een oplossing voor de lange termijn. Dit roept vragen op over de motieven, criteria en onderbouwing van het besluit. Wij helpen om hier duidelijkheid in te krijgen.",
    image: dh1,
    btn: "Laat uw dossier beoordelen",
  },
  {
    title: "Beoordeling blijft ‘binnen normen’",
    description:
      "Soms wordt geconcludeerd dat een woning formeel ‘binnen de normen’ valt, terwijl u zich er toch niet veilig of comfortabel in voelt. Dit spanningsveld tussen regelgeving en leefbaarheid kan verwarrend zijn. Wij kijken verder dan alleen de norm en betrekken uw praktische woonsituatie",
    image: dh2,
    btn: "Vraag een onafhankelijke second opinion",
  },
  {
    title: "Woning functioneert niet goed of blijft kwetsbaar",
    description:
      "Ook na herstel of versterking kan een woning nog gebreken vertonen of kwetsbaar aanvoelen. Dat kan zorgen geven over comfort, veiligheid en toekomstwaarde. Wij analyseren waar de kwetsbaarheden zitten en wat nodig is om uw woning robuuster te maken. ",
    image: dh3,
    btn: "Laat uw dossier beoordelen",
  },
];

const services = [
  {
    title: "Onafhankelijk technisch perspectief op duurzaam herstel",
    description:
      "Wij geven een onafhankelijke technische visie op wat écht duurzaam en toekomstbestendig herstel inhoudt voor uw specifieke woning",
  },
  {
    title: "Inzicht in haalbaarheid en samenhang",
    description:
      "Wij brengen in beeld welke oplossingen technisch haalbaar zijn en hoe verschillende maatregelen met elkaar samenhangen, zodat keuzes logisch en uitvoerbaar zijn.",
  },
  {
    title: "Voorkomen van eindeloze herstelcycli",
    description:
      "Door te focussen op structurele oorzaken helpen wij voorkomen dat u vastloopt in steeds terugkerende herstelrondes zonder blijvend resultaat.",
  },
  {
    title: "Onderbouwing van toekomstbestendige keuzes",
    description:
      "Wij leveren een duidelijke technische onderbouwing voor keuzes die niet alleen vandaag werken, maar ook op de langere termijn verstandig zijn.",
  },
];

const message = (
  <>
    <p>
      In sommige situaties kunnen bewoners de kosten voor een onafhankelijke
      deskundige vergoed krijgen. Welke regeling van toepassing is, hangt af van
      het traject waarin uw woning zit.
    </p>
    <br />
    <p>Schade – IMG</p>
    <p>
      Heeft u een schadeprocedure bij het Instituut Mijnbouwschade Groningen
      (IMG)? Dan kunt u mogelijk gebruikmaken van de regeling
      Deskundigenbijstand. Hiermee kunt u een eigen onafhankelijke deskundige
      inschakelen om een schadebeoordeling of besluit te laten toetsen.
      Aanvragen verloopt via het IMG en moet meestal vooraf worden goedgekeurd.
    </p>
    <br />
    <p>Versterking – NCG</p>
    <p>
      Valt uw woning onder de versterkingsopgave van de Nationaal Coördinator
      Groningen (NCG)? Dan kunt u gebruikmaken van de regeling Onafhankelijk
      Advies. Hiermee kunt u een onafhankelijke adviseur laten meekijken met
      bijvoorbeeld een versterkingsadvies of belangrijke keuzes in het traject.
    </p>
    <br />
    <p>Hoe komt u in aanmerking?</p>
    <ul className="pl-5">
      <li>
        1.Controleer of uw woning in een IMG-schadetraject of
        NCG-versterkingstraject zit.
      </li>
      <li>2.Kies een onafhankelijke deskundige.</li>
      <li>3.Vraag de regeling aan via IMG of NCG.</li>
      <li>4.Na goedkeuring kan het advies worden uitgevoerd.</li>
    </ul>
    <br />
    <p>
      Voor vragen over de voorwaarden of het aanvragen van de regeling kunt u
      contact opnemen met IMG of NCG zelf. Zij kunnen u informeren over de
      mogelijkheden en de actuele regels.
    </p>
  </>
);

const boxText = [
  {
    icon: FileSearch2,
    title: "",
    message:
      "In sommige situaties kunnen bewoners de kosten voor een onafhankelijke deskundige vergoed krijgen. Welke regeling van toepassing is, hangt af van het traject waarin uw woning zit.",
  },
  {
    icon: BadgeEuroIcon,
    title: "Schade – IMG",
    message:
      "Heeft u een schadeprocedure bij het Instituut Mijnbouwschade Groningen (IMG)? Dan kunt u mogelijk gebruikmaken van de regeling Deskundigenbijstand. Hiermee kunt u een eigen onafhankelijke deskundige inschakelen om een schadebeoordeling of besluit te laten toetsen. Aanvragen verloopt via het IMG en moet meestal vooraf worden goedgekeurd.",
  },
  {
    icon: Check,
    title: "Versterking – NCG",
    message:
      "Valt uw woning onder de versterkingsopgave van de Nationaal Coördinator Groningen (NCG)? Dan kunt u gebruikmaken van de regeling Onafhankelijk Advies. Hiermee kunt u een onafhankelijke adviseur laten meekijken met bijvoorbeeld een versterkingsadvies of belangrijke keuzes in het traject.",
  },
  {
    icon: FileCheck2,
    title: "Hoe komt u in aanmerking?",
    message: `1.Controleer of uw woning in een IMG-schadetraject of NCG-versterkingstraject zit.
    2.Kies een onafhankelijke deskundige.
    3.Vraag de regeling aan via IMG of NCG.
    4.Na goedkeuring kan het advies worden uitgevoerd.`,
  },
];

export default function DuurzaamHerstel() {
  return (
    <main className="bg-white">
      <Helmet>
        <title>Duurzaam Herstel | Aardbeving Adviesbureau</title>
        <meta
          name="description"
          content="Neem contact op met Aardbeving Adviesbureau in Groningen."
        />
      </Helmet>
      <Bannar title="Duurzaam herstel" image={traject3} />
      <Points
        points={points}
        title="Zijn de volgende punten herkenbaar voor u?"
        color="bg-[rgb(224,225,217)]"
      />
      <ServiceCards services={services} />
      <Intro
        title="Vergoeding voor onafhankelijk advies"
        className="text-start max-w-full"
        // message={message}
        boxText={boxText}
      />
    </main>
  );
}
