import Bannar from "@/components/section/Bannar";
import Points from "@/components/section/Points";
import React from "react";
import ServiceCards from "@/components/section/ServiceCards";
import banner from "@/assets/traject1.png";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";
import img4 from "@/assets/img4.png";
import Testimonials from "@/components/section/Testimonials";

const points = [
  {
    title: "Schade keert terug na herstel",
    description:
      "Het kan ontmoedigend zijn als herstelde schade opnieuw zichtbaar wordt. Dit roept vragen op over de kwaliteit van het herstel en de onderliggende oorzaak. Wij helpen u begrijpen waarom schade terugkomt en wat er nodig is om dit structureel aan te pakken.",
    image: img1,
  },
  {
    title: "Nieuwe schade wordt niet erkend",
    description:
      "Wanneer nieuwe scheuren of gebreken niet als aardbevingsschade worden gezien, kan dat voelen alsof uw zorgen niet serieus worden genomen. Wij kijken onafhankelijk naar uw situatie en helpen u om uw verhaal technisch goed onderbouwd te krijgen.",
    image: img2,
  },
  {
    title: "Rapporten zijn onduidelijk of voelen onvolledig",
    description:
      "Technische rapportages zijn vaak lastig te doorgronden en laten soms vragen onbeantwoord. Wij maken inzichtelijk wat er precies is onderzocht, wat ontbreekt en wat dit betekent voor uw woning.",
    image: img3,
  },
  {
    title: "U twijfelt aan de conclusies of het besluit",
    description:
      "Als conclusies niet aansluiten bij uw ervaring of gevoel, kan dat onzekerheid en wantrouwen veroorzaken. Wij nemen uw twijfel serieus en toetsen besluiten kritisch op inhoud en zorgvuldigheid.",
    image: img4,
  },
];

const services = [
  {
    title: "Onafhankelijke technische beoordeling van uw dossier",
    description:
      "Wij bekijken uw dossier met een frisse, onafhankelijke blik en beoordelen of onderzoeken en besluiten technisch en inhoudelijk kloppen.",
  },
  {
    title: "Second opinion (contra-expertise)",
    description:
      "Twijfelt u aan een beoordeling? Wij voeren een tweede, onafhankelijke expertise uit en vergelijken deze met eerdere bevindingen.",
  },
  {
    title: "Inzicht in onderliggende oorzaken en samenhang",
    description:
      "Wij analyseren niet alleen zichtbare schade, maar ook de achterliggende oorzaken en de samenhang tussen verschillende problemen in uw woning",
  },
  {
    title: "Technische onderbouwing bij bezwaar of vervolgstappen",
    description:
      "Gaat u in bezwaar of wilt u vervolgstappen zetten? Wij leveren de benodigde technische onderbouwing en helpen u uw standpunt helder te onderbouwen.",
  },
];

export default function ImgTraject() {
  return (
    <main className="bg-white">
      <Bannar title="IMG-traject (schade)" image={banner} />
      <Points
        points={points}
        title="Zijn de volgende punten herkenbaar voor u?"
        color="bg-[rgb(251,242,243)]"
      />
      <ServiceCards services={services} />
      <Testimonials title="Kosten onafhankelijke ondersteuning"/>
    </main>
  );
}
