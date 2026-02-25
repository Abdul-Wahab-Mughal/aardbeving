import Bannar from "@/components/section/Bannar";
import Points from "@/components/section/Points";
import React from "react";
import heroBg from "@/assets/logo.jpeg";
import ServiceCards from "@/components/section/ServiceCards";
import ContactForm from "@/components/section/ContactForm";

const points = [
  {
    title: "Onzekerheid over veiligheid",
    description:
      "Het kan frustrerend zijn wanneer een voorstel voor duurzaam of structureel herstel wordt afgewezen, terwijl u juist op zoek bent naar een oplossing voor de lange termijn. Dit roept vragen op over de motieven, criteria en onderbouwing van het besluit. Wij helpen om hier duidelijkheid in te krijgen.",
    image: heroBg,
  },
  {
    title: "Beoordeling blijft ‘binnen normen’",
    description:
      "Soms wordt geconcludeerd dat een woning formeel ‘binnen de normen’ valt, terwijl u zich er toch niet veilig of comfortabel in voelt. Dit spanningsveld tussen regelgeving en leefbaarheid kan verwarrend zijn. Wij kijken verder dan alleen de norm en betrekken uw praktische woonsituatie.",
    image: heroBg,
  },
  {
    title: "Woning functioneert niet goed of blijft kwetsbaar",
    description:
      "Ook na herstel of versterking kan een woning nog gebreken vertonen of kwetsbaar aanvoelen. Dat kan zorgen geven over comfort, veiligheid en toekomstwaarde. Wij analyseren waar de kwetsbaarheden zitten en wat nodig is om uw woning robuuster te maken",
    image: heroBg,
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
      <Bannar title="NCG-traject (Versterking)" />
      <Points
        points={points}
        title="Zijn de volgende punten herkenbaar voor u?"
      />
      <ServiceCards services={services} />
      <ContactForm showTraject />
    </main>
  );
}
