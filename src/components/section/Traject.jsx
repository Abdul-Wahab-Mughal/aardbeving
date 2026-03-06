import React from "react";
import TitleBox from "../ui/titleBox";
import traject1 from "@/assets/traject1.png";
import traject2 from "@/assets/traject2.png";
import traject3 from "@/assets/traject3.png";
import traject4 from "@/assets/traject4.png";

const traject = [
  {
    title: "IMG-traject (schade)",
    question: "Twijfel over schadeafhandeling of beslissingen van het IMG?",
    description:
      "Wij bieden onafhankelijke technische ondersteuning bij schade, second opinions en onderbouwing voor bezwaar of vervolgstappen.",
    image: traject1,
    path: "/img-traject",
    bg: "bg-[rgb(251,242,243)]",
  },
  {
    title: "NCG-traject (versterking)",
    question:
      "Twijfel over uw versterkingstraject of veiligheid van uw woning?",
    description:
      "Wij geven onafhankelijk, woningbreed advies en helpen u begrijpelijke keuzes te maken in het NCG-traject.",
    image: traject2,
    path: "/ncg-traject",
    bg: "bg-[rgb(241,239,227)]",
  },
  {
    title: "Duurzaam herstel",
    question: "Komt duurzaam herstel voor uw woning niet van de grond?",
    description:
      "Wij bieden een onafhankelijk technisch perspectief en helpen u richting toekomstbestendige oplossingen.",
    image: traject3,
    path: "/duurzaam-herstel",
    bg: "bg-[rgb(224,225,217)]",
  },
  {
    title: "Vastgelopen trajecten",
    question: "Is uw aardbevingsdossier vastgelopen?",
    description:
      "Wij brengen overzicht, samenhang en richting in complexe trajecten, zodat u weer verder kunt.",
    image: traject4,
    path: "/vastgelopen-trajecten",
    bg: "bg-[rgb(200,211,215)]",
  },
];

export default function Traject() {
  return (
    <section>
      <TitleBox title="Kies uw traject" />
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12 px-5 lg:px-20 text-black container m-auto">
        {traject.map((t, index) => (
          <div
            key={t.path}
            className={`${t.bg} rounded-sm overflow-hidden flex flex-col relative hover:scale-105 duration-500 group`}
          >
            <img
              src={t.image}
              alt={t.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-display font-bold text-black mb-2 text-2xl">
                {t.title}
              </h3>
              <p className="text text-black mb-5">{t.question}</p>
              <p className="text text-black flex-1 mb-5">{t.description}</p>
              <div
                className={`text-sm font-medium text-[--border] hover:opacity-80 transition-opacity flex border px-2 py-1 w-fit border-[--border] ${
                  index === 1 && "border-orange-500 text-orange-500"
                }`}
              >
                Lees meer
              </div>
            </div>
            <a href={t.path} className=" absolute inset-0"></a>
          </div>
        ))}
      </div>
    </section>
  );
}
