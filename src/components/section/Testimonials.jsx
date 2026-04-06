import React from "react";
import TitleBox from "../ui/titleBox";
import { Link } from "react-router-dom";
import testimonial1 from "@/assets/testimonial1.png";
import testimonial2 from "@/assets/testimonial2.png";
import testimonial3 from "@/assets/testimonial3.png";

const testimonials = [
  {
    name: "Rapporten spreken elkaar tegen",
    text: `Soms spreken rapporten of beoordelingen elkaar tegen, waardoor onduidelijk wordt wat technisch klopt.

    AAB analyseert de verschillende rapportages en beoordeelt of de conclusies technisch consistent en goed onderbouwd zijn.`,
    image: testimonial1,
  },
  {
    name: "Versterkingsadvies voelt onlogisch",
    text: `Soms voelt een versterkingsadvies niet logisch of passend bij de situatie van uw woning.

    AAB beoordeelt het versterkingsadvies onafhankelijk en analyseert of de voorgestelde maatregelen technisch logisch en goed onderbouwd zijn.`,
    image: testimonial2,
  },
  {
    name: "Duurzaam herstel wordt afgewezen",
    text: `Soms wordt een voorstel voor duurzaam herstel afgewezen, terwijl u twijfelt aan de onderbouwing van dat besluit.

    AAB analyseert de technische argumentatie en beoordeelt welke oplossingen voor uw woning logisch en haalbaar zijn.`,
    image: testimonial3,
  },
];

export default function Testimonials({ title }) {
  return (
    <section>
      <TitleBox title={title} />
      <div className=" py-12 px-5 lg:px-20 container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card rounded-sm overflow-hidden text-black flex flex-col max-md:text-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-48 object-cover"
              />
              <div className="py-2.5 flex flex-col flex-1">
                <h3 className=" font-semibold text-foreground mb-2">
                  {t.name}
                </h3>
                <p className=" text-sm text-muted-foreground italic mb-3 whitespace-pre-line">
                  {t.text}
                </p>
                <Link
                  to="/contact"
                  className={`text-sm font-medium mt-auto text-[--border] hover:opacity-80 transition-all duration-300 flex border px-2 py-1 w-fit border-[--border] hover:border-orange-500 hover:text-orange-500 hover:shadow-[0_0_0_3px_rgba(249,115,22,0.18),0_10px_22px_rgba(249,115,22,0.22)] max-md:m-auto`}
                >
                  Lees meer
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
