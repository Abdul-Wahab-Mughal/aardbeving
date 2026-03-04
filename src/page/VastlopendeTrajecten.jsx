import Bannar from "@/components/section/Bannar";
import Points from "@/components/section/Points";
import React from "react";
import ServiceCards from "@/components/section/ServiceCards";
import traject4 from "@/assets/traject4.png";
import vt1 from "@/assets/vt1.png";
import vt2 from "@/assets/vt2.png";
import vt3 from "@/assets/vt3.png";
import vt4 from "@/assets/vt4.png";
import TitleBox from "@/components/ui/titleBox";

const points = [
  {
    title: "Meerdere trajecten tegelijk",
    description:
      "U kunt te maken hebben met verschillende lopende procedures rondom schade, herstel en versterking. Dat maakt het lastig om overzicht te houden en te weten waar u aan toe bent.",
    image: vt1,
  },
  {
    title: "Tegenstrijdige besluiten",
    description:
      "Besluiten van verschillende partijen spreken elkaar soms tegen, waardoor u met verwarrende of onwerkbare uitkomsten blijft zitten. Dit kan leiden tot onzekerheid en vertraging",
    image: vt2,
  },
  {
    title: "Niemand bewaakt het geheel",
    description:
      "Elk traject heeft zijn eigen regels en beoordelaars, maar een integrale blik op uw woning ontbreekt vaak. Hierdoor raken belangrijke samenhangen onderbelicht.",
    image: vt3,
  },
  {
    title: "Mentale en financiële uitputting",
    description:
      "Langdurige procedures, onzekerheid en steeds terugkerende problemen kunnen zwaar wegen, zowel emotioneel als financieel.",
    image: vt4,
  },
];

const services = [
  {
    title: "Onafhankelijk technisch aanspreekpunt",
    description:
      "Wij fungeren als uw vaste, onafhankelijke technische sparringpartner in alle trajecten rondom uw woning.",
  },
  {
    title: "Duiding van mogelijkheden en vervolgstappen",
    description:
      "Wij maken inzichtelijk welke opties u heeft en wat logische vervolgstappen zijn, zodat u gericht verder kunt.",
  },
  {
    title: "Overzicht en samenhang aanbrengen",
    description:
      "Wij brengen structuur in uw dossier en laten zien hoe verschillende besluiten en adviezen met elkaar samenhangen.",
  },
  {
    title: "Rust en richting in complexe situaties",
    description:
      "Wij helpen de situatie te ontrafelen en bieden duidelijke handvatten, zodat u weer grip en vertrouwen krijgt.",
  },
];

export default function VastlopendeTrajecten() {
  return (
    <main className="bg-white">
      <Bannar title="Vastlopende trajecten" image={traject4} />
      <Points
        points={points}
        title="Zijn de volgende punten herkenbaar voor u?"
        color="bg-[rgb(200,211,215)]"
      />
      <ServiceCards services={services} />
      <TitleBox title="Kosten onafhankelijke ondersteuning" />
    </main>
  );
}
