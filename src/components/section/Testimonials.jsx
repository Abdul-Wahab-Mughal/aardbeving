import React from "react";
import TitleBox from "../ui/titleBox";
import heroBg from "@/assets/hero-bg.jpg";

const testimonials = [
  {
    name: "Woningstichting Noord",
    text: "Heldere communicatie en strak begeleid vanaf het eerste gesprek.",
    image: heroBg,
  },
  {
    name: "van Dijk Bouw BV",
    text: "Dankzij het duidelijke advies wisten we precies waar we aan toe waren.",
    image: heroBg,
  },
  {
    name: "Familie de Vries",
    text: "Snelle schakeling met gemeente en partners, waardoor het traject soepel liep.",
    image: heroBg,
  },
];

export default function Testimonials() {
  return (
    <section>
      <TitleBox title="Onze verhalen" />
      <div className=" py-12 px-5 lg:px-20 container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-sm overflow-hidden text-black"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-48 object-cover"
              />
              <div className="py-2.5">
                <h3 className=" font-semibold text-foreground mb-2">
                  {t.name}
                </h3>
                <p className=" text-sm text-muted-foreground italic mb-3">
                  {t.text}
                </p>
                <span className=" text-red-300 text-sm font-medium text-link-accent">
                  Lees meer →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
