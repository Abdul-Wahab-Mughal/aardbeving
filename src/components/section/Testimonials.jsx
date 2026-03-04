import React from "react";
import TitleBox from "../ui/titleBox";
import { Link } from "react-router-dom";
import testimonial1 from "@/assets/testimonial1.png";
import testimonial2 from "@/assets/testimonial2.png";
import testimonial3 from "@/assets/testimonial3.png";

const testimonials = [
  {
    name: "Herhaalde schade zonder erkenning",
    text: `Komt schade steeds terug en wordt deze niet (meer) erkend?

      Veel bewoners ervaren dat herstel plaatsvindt, maar de onderliggende oorzaak niet wordt onderzocht. Nieuwe schade wordt anders beoordeeld, terwijl het probleem blijft bestaan. Wij pakken dit anders aan.

      Wij beginnen met het zorgvuldig vaststellen van de mogelijke oorzaak van de schade. Niet alleen wat zichtbaar is, maar wat er technisch werkelijk speelt. Onze bevindingen leggen wij vast in een onafhankelijk bouwkundig rapport.

      Waar nodig laten wij toetsen wat uw rechten zijn, zodat duidelijk wordt waar u inhoudelijk staat.

      Met een stevige technische onderbouwing ontstaat een andere basis voor overleg. Niet vanuit gevoel of frustratie, maar vanuit feiten.

      Zo ontstaat meer duidelijkheid, meer samenhang en een eerlijker uitgangspunt voor een duurzame oplossing.`,
    image: testimonial1,
  },
  {
    name: "Vastgelopen trajecten: wanneer het vertrouwen onder druk staat",
    text: `Vastgelopen trajecten: wanneer duidelijkheid uitblijft

    Sommige dossiers slepen zich jarenlang voort. Schade keert terug. Rapporten spreken elkaar tegen. U moet telkens opnieuw uitleggen wat er aan de hand is.

    Dat ondermijnt vertrouwen en vergroot de onzekerheid over uw woning en toekomst. Het gevoel kan ontstaan dat niemand het geheel overziet.

    Wanneer trajecten vastlopen, ontbreekt vaak samenhang. Schade, versterking en duurzaam herstel worden apart beoordeeld, terwijl het om één woning gaat.

    Wij kijken integraal. Niet alleen naar het laatste besluit, maar naar het volledige technische verhaal: oorzaak, constructie en eerdere beoordelingen. Onze analyse wordt zorgvuldig en onafhankelijk onderbouwd.
    
    Met feiten ontstaat een andere basis voor het gesprek. Steviger. Duidelijker. Eerlijker. 
    
    Ons doel is helderheid waar die te lang is uitgebleven.`,
    image: testimonial2,
  },
  {
    name: "Onvolledige of tegenstrijdige beoordelingen",
    text: `Soms voelt een beoordeling niet volledig. Belangrijke onderdelen van de woning lijken niet meegenomen, of eerdere rapporten worden niet zichtbaar betrokken bij een nieuw besluit.

    In andere gevallen spreken deskundigen elkaar tegen. Dat maakt het voor bewoners bijna onmogelijk om te begrijpen wat technisch klopt.

    Wanneer beoordelingen niet samenhangen, ontstaat onzekerheid.

    Wij analyseren uw dossier als geheel. Niet alleen het laatste rapport, maar ook eerdere opnames, constructieve gegevens en de samenhang binnen de woning. Wij toetsen of de beoordeling logisch, volledig en technisch consistent is.

    Onze bevindingen leggen wij onafhankelijk vast.

    Zo ontstaat duidelijkheid waar eerder twijfel was en een stevigere basis voor het vervolg.`,
    image: testimonial3,
  },
];

export default function Testimonials({title}) {
  return (
    <section>
      <TitleBox title={title} />
      <div className=" py-12 px-5 lg:px-20 container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-sm overflow-hidden text-black flex flex-col"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-48 object-cover"
              />
              <div className="py-2.5 flex flex-col">
                <h3 className=" font-semibold text-foreground mb-2">
                  {t.name}
                </h3>
                <p className=" text-sm text-muted-foreground italic mb-3 whitespace-pre-line">
                  {t.text}
                </p>
                <Link
                  to="/contact"
                  className=" text-red-300 text-sm font-medium text-link-accent group flex w-fit mt-auto"
                >
                  Lees meer
                  <div className=" group-hover:translate-x-2.5 duration-500">
                    →
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
