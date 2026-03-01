import Bannar from "@/components/section/Bannar";
import Intro from "@/components/section/Intro";
import Testimonials from "@/components/section/Testimonials";
import Traject from "@/components/section/Traject";
import React from "react";
import heroBg from "@/assets/hero-bg.jpg";

export default function Index() {
  return (
    <main className="bg-white">
      <Bannar
        title="Onafhankelijk advies voor Herstel, Versterking en Duurzaam herstel"
        image={heroBg}
      />
      <Intro />
      <Traject />
      <Testimonials />
    </main>
  );
}
