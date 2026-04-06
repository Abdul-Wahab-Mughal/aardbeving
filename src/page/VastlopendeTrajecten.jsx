import Bannar from "@/components/section/Bannar";
import Points from "@/components/section/Points";
import React from "react";
import ServiceCards from "@/components/section/ServiceCards";
import traject4 from "@/assets/traject4.png";
import vt1 from "@/assets/vt1.png";
import vt2 from "@/assets/vt2.png";
import vt3 from "@/assets/vt3.png";
import vt4 from "@/assets/vt4.png";
import Intro from "@/components/section/Intro";
import { Helmet } from "react-helmet-async";
import {
  BadgeEuroIcon,
  CheckCircle2,
  Compass,
  FileCheck2,
  FileSearch2,
  Layers2,
  Map,
  UserRound,
} from "lucide-react";
import { REGELING_TILE_BADGE_CLASS } from "@/lib/regelingTiles";

const points = [
  {
    title: "Meerdere trajecten tegelijk",
    description:
      "U kunt te maken hebben met verschillende lopende procedures rondom schade, herstel en versterking. Dat maakt het lastig om overzicht te houden en te weten waar u aan toe bent. AAB analyseert uw dossier en brengt de samenhang en mogelijke vervolgstappen in beeld. Zo ontstaat weer overzicht.",
    image: vt1,
    btn: "Laat uw dossier beoordelen",
  },
  {
    title: "Tegenstrijdige besluiten",
    description:
      "Besluiten van verschillende partijen kunnen elkaar tegenspreken. Dat kan leiden tot verwarring, onzekerheid en vertraging in uw traject. AAB helpt om deze besluiten technisch te duiden en de samenhang in uw dossier weer inzichtelijk te maken.",
    image: vt2,
    btn: "Laat uw dossier beoordelen",
  },
  {
    title: "Niemand bewaakt het geheel",
    description:
      "Elk traject heeft zijn eigen regels en beoordelaars, waardoor een integrale blik op uw woning vaak ontbreekt. Belangrijke samenhangen blijven daardoor onderbelicht. AAB bekijkt uw woning en dossier als geheel en maakt deze samenhang inzichtelijk.",
    image: vt3,
    btn: "Laat uw dossier beoordelen",
  },
  {
    title: "Mentale en financiële uitputting",
    description:
      "Langdurige procedures, onzekerheid en steeds terugkerende problemen kunnen zwaar wegen, zowel emotioneel als financieel. AAB helpt om uw dossier helder te analyseren en weer richting te geven aan het traject.",
    image: vt4,
    btn: "Laat uw dossier beoordelen",
  },
];

const services = [
  {
    icon: UserRound,
    title: "Onafhankelijk technisch aanspreekpunt",
    description:
      "Wij fungeren als uw vaste, onafhankelijke technische sparringpartner in alle trajecten rondom uw woning.",
  },
  {
    icon: Map,
    title: "Duiding van mogelijkheden en vervolgstappen",
    description:
      "Wij maken inzichtelijk welke opties u heeft en wat logische vervolgstappen zijn, zodat u gericht verder kunt.",
  },
  {
    icon: Layers2,
    title: "Overzicht en samenhang aanbrengen",
    description:
      "Wij brengen structuur in uw dossier en laten zien hoe verschillende besluiten en adviezen met elkaar samenhangen.",
  },
  {
    icon: Compass,
    title: "Rust en richting in complexe situaties",
    description:
      "Wij helpen de situatie te ontrafelen en bieden duidelijke handvatten, zodat u weer grip en vertrouwen krijgt.",
  },
];

const boxText = [
  {
    icon: FileSearch2,
    title: "",
    className: "lg:min-h-[240px]",
    message: (
      <p className="text-xs leading-relaxed text-black/55">
        In sommige situaties kunnen bewoners de kosten voor een onafhankelijke
        deskundige vergoed krijgen. Welke regeling van toepassing is, hangt af
        van het traject waarin uw woning zit.
      </p>
    ),
  },
  {
    icon: BadgeEuroIcon,
    title: "Schade – IMG",
    className: "lg:min-h-[240px]",
    message: (
      <p className="text-xs leading-relaxed text-black/55">
        Heeft u een schadeprocedure bij het Instituut Mijnbouwschade Groningen
        (IMG)? Dan kunt u mogelijk gebruikmaken van de regeling
        Deskundigenbijstand. Hiermee kunt u een eigen onafhankelijke deskundige
        inschakelen om een schadebeoordeling of besluit te laten toetsen.
        Aanvragen verloopt via het IMG en moet meestal vooraf worden
        goedgekeurd.
      </p>
    ),
  },
  {
    icon: CheckCircle2,
    title: "Versterking – NCG",
    className: "lg:min-h-[240px]",
    message: (
      <p className="text-xs leading-relaxed text-black/55">
        Valt uw woning onder de versterkingsopgave van de Nationaal Coördinator
        Groningen (NCG)? Dan kunt u gebruikmaken van de regeling Onafhankelijk
        Advies. Hiermee kunt u een onafhankelijke adviseur laten meekijken met
        bijvoorbeeld een versterkingsadvies of belangrijke keuzes in het
        traject.
      </p>
    ),
  },
  {
    icon: FileCheck2,
    title: "Hoe komt u in aanmerking?",
    className: "lg:min-h-[320px] flex flex-col",
    message: (
      <>
        <div className="flex-1 space-y-1 text-xs leading-relaxed text-black/55">
          <div>
            1. Controleer of uw woning in een IMG-schadetraject of
            NCG-versterkingstraject zit.
          </div>
          <div>2. Kies een onafhankelijke deskundige.</div>
          <div>3. Vraag de regeling aan via IMG of NCG.</div>
          <div>4. Na goedkeuring kan het advies worden uitgevoerd.</div>
        </div>
        <div className="mt-auto pt-4">
          <a href="/contact" className={REGELING_TILE_BADGE_CLASS}>
            Neem contact op
          </a>
        </div>
      </>
    ),
  },
];

export default function VastlopendeTrajecten() {
  return (
    <main className="bg-white">
      <Helmet>
        <title>Vastlopende Trajecten | Aardbeving Adviesbureau</title>
        <meta
          name="description"
          content="Neem contact op met Aardbeving Adviesbureau in Groningen."
        />
      </Helmet>
      <Bannar title="Vastlopende trajecten" image={traject4} />
      <Points
        points={points}
        title="Zijn de volgende punten herkenbaar voor u?"
        color="bg-[rgb(200,211,215)]"
      />
      <ServiceCards services={services} />
      <Intro
        title="Extra ondersteuning bij vastlopende trajecten"
        subtitle="Vergoeding voor onafhankelijk advies"
        className="text-start max-w-full"
        color="bg-gray-200"
        boxText={boxText}
      />
    </main>
  );
}
