import Bannar from "@/components/section/Bannar";
import { RegelingTileGrid } from "@/components/section/Intro";
import {
  SERVICE_SECTION_GLOW_BG,
  ServiceTileCard,
} from "@/components/section/ServiceCards";
import TitleBox from "@/components/ui/titleBox";
import React from "react";
import aab from "@/assets/aab.png";
import { Helmet } from "react-helmet-async";
import { FileCheck2, FileSearch2, FileStack } from "lucide-react";
import { CheckCircle2, Files, MessageSquareText, ShieldCheck } from "lucide-react";
import { REGELING_TILE_BADGE_CLASS } from "@/lib/regelingTiles";

const rolInTrajectBoxText = [
  {
    icon: ShieldCheck,
    title: "Onafhankelijk",
    className: "lg:min-h-[240px]",
    message: (
      <p className="text-xs leading-relaxed text-black/55">
        Onze rol is om bewoners inhoudelijk te ondersteunen in complexe dossiers.
      </p>
    ),
  },
  {
    icon: Files,
    title: "Uw regie",
    className: "lg:min-h-[240px]",
    message: (
      <p className="text-xs leading-relaxed text-black/55">
        Iedere bewoner blijft zelf regiehouder van het traject.
      </p>
    ),
  },
  {
    icon: CheckCircle2,
    title: "Duidelijkheid",
    className: "lg:min-h-[240px]",
    message: (
      <p className="text-xs leading-relaxed text-black/55">
        Wij zorgen voor helder inzicht zonder commercieel belang.
      </p>
    ),
  },
  {
    icon: MessageSquareText,
    title:
      "Twijfelt u over uw dossier of wilt u weten wat technisch klopt?",
    className: "lg:min-h-[320px] flex flex-col",
    message: (
      <>
        <p className="flex-1 text-xs leading-relaxed text-black/55">
          Neem gerust contact met ons op voor een eerste verkenning.
        </p>
        <div className="mt-auto pt-4">
          <a href="/contact" className={REGELING_TILE_BADGE_CLASS}>
            Neem contact op
          </a>
        </div>
      </>
    ),
  },
];

const werkwijzeTiles = [
  {
    icon: FileSearch2,
    title: "Verkenning van uw dossier",
    description:
      "Een traject begint meestal met een eerste verkenning van uw dossier. We bekijken welke rapporten en informatie beschikbaar zijn en waar mogelijke vragen of onduidelijkheden zitten.",
  },
  {
    icon: FileStack,
    title: "Diepgaande technische analyse",
    description:
      "Vervolgens analyseren wij de technische inhoud van het dossier. Daarbij kijken wij onder meer naar bouwkundige en constructieve aspecten, eerdere opnames en de samenhang tussen schade, versterking en herstel.",
  },
  {
    icon: FileCheck2,
    title: "Heldere technische analyse als basis",
    description:
      "Onze bevindingen leggen wij vast in een duidelijke technische analyse. Deze kan u helpen om beter te begrijpen wat er technisch speelt en vormt een inhoudelijke basis voor gesprekken met betrokken partijen.",
  },
];

export default function OverAAB() {
  return (
    <main className="bg-white">
      <Helmet>
        <title>Over aab | Aardbeving Adviesbureau</title>
        <meta
          name="description"
          content="Neem contact op met Aardbeving Adviesbureau in Groningen."
        />
      </Helmet>
      <Bannar title="Over AAB" image={aab} />
      <section className="bg-gray-200">
        <TitleBox title="Onze visie" />
        <div className="container m-auto flex flex-col px-5 py-10 lg:px-20">
          <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.1)] md:p-10">
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-base font-bold leading-snug text-[#1e3a5f] md:text-lg">
                  Integraal naar woning en dossier kijken
                </h3>
                <p className="mt-2 text-sm leading-[1.5] text-[#4a5568]">
                  Wij vinden dat bewoners het beste geholpen worden wanneer niet
                  alleen naar losse onderdelen wordt gekeken, maar naar de woning
                  en het dossier als geheel. Schade, versterking en duurzaam
                  herstel hangen vaak met elkaar samen. Wanneer deze onderdelen
                  afzonderlijk worden beoordeeld, kan belangrijke samenhang
                  verloren gaan.
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold leading-snug text-[#1e3a5f] md:text-lg">
                  Rapportages en gegevens in samenhang
                </h3>
                <p className="mt-2 text-sm leading-[1.5] text-[#4a5568]">
                  AAB kijkt daarom integraal naar de technische situatie van een
                  woning. Door rapportages, constructieve gegevens en eerdere
                  beoordelingen in samenhang te analyseren, ontstaat een
                  duidelijker beeld van wat er technisch speelt.
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold leading-snug text-[#1e3a5f] md:text-lg">
                  Onafhankelijk technisch advies
                </h3>
                <p className="mt-2 text-sm leading-[1.5] text-[#4a5568]">
                  AAB voert geen herstel- of bouwwerkzaamheden uit en heeft geen
                  commercieel belang bij de uitkomst van besluiten. Onze adviezen
                  zijn gebaseerd op een onafhankelijke technische beoordeling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-200">
        <TitleBox title="Onze werkwijze" />
        <div className="relative">
          <div className={SERVICE_SECTION_GLOW_BG} aria-hidden />
          <div className="relative container m-auto px-5 py-10 lg:px-20">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 md:items-stretch md:gap-5">
              {werkwijzeTiles.map((item) => {
                const Icon = item.icon;
                return (
                  <ServiceTileCard key={item.title}>
                    <Icon
                      className="mt-0.5 h-8 w-8 shrink-0 text-[rgb(54,80,97)]"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold leading-snug text-[rgb(26,42,58)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[rgb(74,85,104)]">
                        {item.description}
                      </p>
                    </div>
                  </ServiceTileCard>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f3f1ee]">
        <TitleBox title="Onze rol in uw traject" />
        <div className="container m-auto py-10 px-5 lg:px-20 text-black">
          <div className="mx-auto max-w-5xl text-center">
            <h3 className="font-display text-2xl md:text-3xl text-black/80">
              AAB is een onafhankelijke technisch adviseur voor bewoners.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-black/55">
              Wij zijn geen onderdeel van het IMG of de NCG en nemen geen
              besluiten over schade, versterking of regelingen. Die
              verantwoordelijkheid blijft bij de betreffende instanties.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl">
            <RegelingTileGrid boxText={rolInTrajectBoxText} />
          </div>
        </div>
      </section>
    </main>
  );
}
