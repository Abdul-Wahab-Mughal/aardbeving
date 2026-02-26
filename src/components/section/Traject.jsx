import React from "react";
import TitleBox from "../ui/titleBox";
import heroBg from "@/assets/hero-bg.jpg";

const traject = [
  {
    title: "IMG-traject (schade)",
    question: "Twijfel over schadeafhandeling of beslissingen van het IMG?",
    description:
      "Wij bieden onafhankelijke technische ondersteuning bij schade, second opinions en onderbouwing voor bezwaar of vervolgstappen.",
    image: heroBg,
    path: "/img-traject",
    bg: "bg-red-300/25",
  },
  {
    title: "NCG-traject (versterking)",
    question:
      "Twijfel over uw versterkingstraject of veiligheid van uw woning?",
    description:
      "Wij geven onafhankelijk, woningbreed advies en helpen u begrijpelijke keuzes te maken in het NCG-traject.",
    image: heroBg,
    path: "/ncg-traject",
    bg: "bg-orange-300/25",
  },
  {
    title: "Duurzaam herstel",
    question: "Komt duurzaam herstel voor uw woning niet van de grond?",
    description:
      "Wij bieden een onafhankelijk technisch perspectief en helpen u richting toekomstbestendige oplossingen.",
    image: heroBg,
    path: "/duurzaam-herstel",
    bg: "bg-green-300/25",
  },
  {
    title: "Vastgelopen trajecten",
    question: "Is uw aardbevingsdossier vastgelopen?",
    description:
      "Wij brengen overzicht, samenhang en richting in complexe trajecten, zodat u weer verder kunt.",
    image: heroBg,
    path: "/vastgelopen-trajecten",
    bg: "bg-gray-300/25",
  },
];

export default function Traject() {
  return (
    <section>
      <TitleBox title="Kies uw traject" />
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12 px-5 lg:px-20 text-black container m-auto">
        {traject.map((t) => (
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
              <h3 className="font-display font-semibold text-black mb-2">
                {t.title}
              </h3>
              <p className="text-sm text-black mb-5">{t.question}</p>
              <p className="text-sm text-black flex-1 mb-5">{t.description}</p>
              <div
                className="text-sm font-medium text-red-300 hover:opacity-80 transition-opacity flex"
              >
                Lees meer <div className=" group-hover:translate-x-2.5 duration-500">→</div>
              </div>
            </div>
            <a href={t.path} className=" absolute inset-0"></a>
          </div>
        ))}
      </div>
    </section>
  );
}
