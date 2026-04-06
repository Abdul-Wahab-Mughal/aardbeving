import React from "react";

function BulletList({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5">
      {items.map((text) => (
        <li key={text}>{text}</li>
      ))}
    </ul>
  );
}

export const LEGAL_DOCS = {
  privacyverklaring: {
    title: "Privacyverklaring Aardbeving Adviesbureau (AAB)",
    description:
      "Privacyverklaring van Aardbeving Adviesbureau: verwerking van persoonsgegevens volgens de AVG.",
    body: (
      <>
        <p>
          Aardbeving Adviesbureau (AAB), gevestigd te Groningen, is
          verantwoordelijk voor de verwerking van persoonsgegevens zoals
          weergegeven in deze privacyverklaring.
        </p>
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          1. Persoonsgegevens die wij verwerken
        </h2>
        <p>
          AAB verwerkt persoonsgegevens die u zelf aan ons verstrekt, bijvoorbeeld
          via e-mail, telefonisch contact of via de website. Dit kan onder meer
          betreffen:
        </p>
        <BulletList
          items={[
            "naam en contactgegevens",
            "adresgegevens",
            "gegevens met betrekking tot uw woning",
            "informatie en documenten uit uw dossier (zoals rapportages en correspondentie)",
          ]}
        />
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          2. Doeleinden en grondslagen
        </h2>
        <p>AAB verwerkt persoonsgegevens voor de volgende doeleinden:</p>
        <BulletList
          items={[
            "het beantwoorden van vragen en verzoeken",
            "het uitvoeren van een overeenkomst (technische dossieranalyse)",
            "het onderhouden van contact gedurende een opdracht",
          ]}
        />
        <p>De verwerking is gebaseerd op:</p>
        <BulletList
          items={[
            "uitvoering van een overeenkomst (art. 6 lid 1 sub b AVG)",
            "gerechtvaardigd belang (art. 6 lid 1 sub f AVG)",
            "toestemming (indien van toepassing)",
          ]}
        />
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          3. Bewaartermijn
        </h2>
        <p>
          Persoonsgegevens worden niet langer bewaard dan noodzakelijk voor de
          doeleinden waarvoor zij zijn verzameld, tenzij een wettelijke
          bewaarplicht van toepassing is.
        </p>
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          4. Delen van persoonsgegevens met derden
        </h2>
        <p>
          AAB verstrekt persoonsgegevens uitsluitend aan derden indien dit
          noodzakelijk is voor de uitvoering van de overeenkomst of om te voldoen
          aan een wettelijke verplichting.
        </p>
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          5. Beveiliging
        </h2>
        <p>
          AAB neemt passende technische en organisatorische maatregelen om
          persoonsgegevens te beschermen tegen verlies, misbruik en ongeoorloofde
          toegang.
        </p>
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          6. Rechten van betrokkenen
        </h2>
        <p>U heeft het recht om:</p>
        <BulletList
          items={[
            "inzage te krijgen in uw persoonsgegevens",
            "uw gegevens te laten corrigeren of verwijderen",
            "bezwaar te maken tegen verwerking",
            "uw toestemming in te trekken (indien van toepassing)",
          ]}
        />
        <p>
          U kunt hiervoor contact opnemen via:{" "}
          <a
            href="mailto:info@aardbeving-adviesbureau.nl"
            className="text-[--background_box] underline hover:opacity-80"
          >
            info@aardbeving-adviesbureau.nl
          </a>
        </p>
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          7. Klachten
        </h2>
        <p>
          Indien u een klacht heeft over de verwerking van uw persoonsgegevens,
          kunt u contact opnemen met AAB of een klacht indienen bij de Autoriteit
          Persoonsgegevens.
        </p>
      </>
    ),
  },
  cookieverklaring: {
    title: "Cookieverklaring",
    description:
      "Hoe Aardbeving Adviesbureau cookies gebruikt op deze website.",
    body: (
      <>
        <p>
          Aardbeving Adviesbureau (AAB) maakt gebruik van cookies om de website
          goed te laten functioneren en het gebruik van de website te analyseren.
        </p>
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          1. Functionele cookies
        </h2>
        <p>
          Deze cookies zijn noodzakelijk voor het correct functioneren van de
          website en worden zonder toestemming geplaatst.
        </p>
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          2. Analytische cookies
        </h2>
        <p>
          Indien van toepassing maakt AAB gebruik van analytische cookies
          (bijvoorbeeld Google Analytics) om inzicht te krijgen in het gebruik van
          de website. Deze gegevens worden zoveel mogelijk geanonimiseerd en zijn
          niet herleidbaar tot individuele personen.
        </p>
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          3. Cookies beheren
        </h2>
        <p>
          U kunt cookies verwijderen of uitschakelen via de instellingen van uw
          browser. Dit kan invloed hebben op het functioneren van de website.
        </p>
      </>
    ),
  },
  disclaimer: {
    title: "Disclaimer",
    description: "Disclaimer bij het gebruik van de website van Aardbeving Adviesbureau.",
    body: (
      <>
        <p>
          De informatie op deze website is uitsluitend bedoeld voor algemene
          informatiedoeleinden. Aan de inhoud kunnen geen rechten worden
          ontleend.
        </p>
        <p>
          Aardbeving Adviesbureau (AAB) is een onafhankelijk technisch adviseur en
          verstrekt geen juridisch advies en neemt geen besluiten over
          schadeafhandeling, versterking of regelingen. Deze verantwoordelijkheid
          ligt bij bevoegde instanties, waaronder het Instituut Mijnbouwschade
          Groningen (IMG) en de Nationaal Coördinator Groningen (NCG).
        </p>
        <p>
          De dienstverlening van AAB bestaat uit het uitvoeren van technische
          analyses en het geven van inhoudelijke beoordelingen op basis van
          beschikbare informatie. De uitkomsten zijn afhankelijk van de specifieke
          situatie en de aangeleverde gegevens.
        </p>
        <p>
          Een inhoudelijke beoordeling van een dossier vindt uitsluitend plaats na
          analyse van beschikbare rapporten en gegevens.
        </p>
        <p>AAB aanvaardt geen aansprakelijkheid voor schade die voortvloeit uit:</p>
        <BulletList
          items={[
            "het gebruik van de informatie op deze website",
            "onvolledige of onjuiste interpretatie van deze informatie",
          ]}
        />
      </>
    ),
  },
  impressum: {
    title: "Impressum / Bedrijfsgegevens",
    description: "Bedrijfs- en contactgegevens van Aardbeving Adviesbureau.",
    body: (
      <>
        <p className="font-medium">Aardbeving Adviesbureau (AAB)</p>
        <p>
          Ulgersmaweg 47-A
          <br />
          9731 BK Groningen
          <br />
          Nederland
        </p>
        <p>
          E-mail:{" "}
          <a
            href="mailto:info@aardbeving-adviesbureau.nl"
            className="text-[--background_box] underline hover:opacity-80"
          >
            info@aardbeving-adviesbureau.nl
          </a>
          <br />
          Telefoon:{" "}
          <a
            href="tel:0505777566"
            className="text-[--background_box] underline hover:opacity-80"
          >
            050 – 5777566
          </a>
        </p>
        <p>
          KvK-nummer: 55828787
          <br />
          BTW-nummer: NL002360985B28
        </p>
      </>
    ),
  },
  "algemene-voorwaarden": {
    title: "Algemene voorwaarden Aardbeving Adviesbureau (AAB)",
    description: "Algemene voorwaarden voor opdrachten aan Aardbeving Adviesbureau.",
    body: (
      <>
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          1. Definities
        </h2>
        <BulletList
          items={[
            "AAB: Aardbeving Adviesbureau",
            "Opdrachtgever: de natuurlijke persoon of rechtspersoon die een opdracht verstrekt",
            "Opdracht: technische analyse of beoordeling van een aardbevingsdossier",
          ]}
        />
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          2. Toepasselijkheid
        </h2>
        <p>
          Deze voorwaarden zijn van toepassing op alle opdrachten en werkzaamheden
          van AAB.
        </p>
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          3. Dienstverlening
        </h2>
        <p>AAB verricht uitsluitend technische analyses en beoordelingen.</p>
        <p>AAB:</p>
        <BulletList
          items={[
            "voert geen herstelwerkzaamheden uit",
            "geeft geen juridisch advies",
            "neemt geen besluiten",
          ]}
        />
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          4. Totstandkoming overeenkomst
        </h2>
        <p>
          Een overeenkomst komt tot stand na bevestiging door opdrachtgever en
          aanvaarding door AAB.
        </p>
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          5. Uitvoering
        </h2>
        <p>AAB werkt op basis van aangeleverde informatie.</p>
        <p>
          De opdrachtgever is verantwoordelijk voor volledige en juiste gegevens.
        </p>
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          6. Resultaat
        </h2>
        <p>
          AAB heeft een inspanningsverplichting, geen resultaatsverplichting.
        </p>
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          7. Vergoeding
        </h2>
        <p>Kosten worden vooraf overeengekomen.</p>
        <p>AAB is niet verantwoordelijk voor vergoedingen via IMG of NCG.</p>
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          8. Aansprakelijkheid
        </h2>
        <p>
          Aansprakelijkheid is beperkt tot het bedrag van de opdracht.
        </p>
        <p>
          AAB is niet aansprakelijk voor indirecte schade of beslissingen van
          derden.
        </p>
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          9. Gebruik rapportages
        </h2>
        <p>Rapportages zijn uitsluitend voor gebruik door opdrachtgever.</p>
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          10. Intellectueel eigendom
        </h2>
        <p>Alle documenten blijven eigendom van AAB.</p>
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          11. Privacy
        </h2>
        <p>AAB verwerkt gegevens volgens de privacyverklaring.</p>
        <h2 className="text-lg font-semibold text-[--background_box] pt-2">
          12. Toepasselijk recht
        </h2>
        <p>Nederlands recht is van toepassing.</p>
      </>
    ),
  },
};
