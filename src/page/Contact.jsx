import React, { useState } from "react";
import herobg from "../assets/hero-bg.jpg";
import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

export default function Context() {
  const [step, setStep] = useState(1);
  const [submit, setSubmit] = useState(true);

  const [formData, setFormData] = useState({
    // name: "",
    // email: "",
    // phone: "",
    // traject: "",
    // problem: "",
    // status: [],
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
    setSubmit(false);
  };

  function scrollup() {
    const section = document.getElementById("contact");
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main>
      <section className="h-screen w-full p-5 bg-[--background_box]">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <img src={herobg} alt="" className="w-full h-full object-cover" />
          <div className=" absolute inset-0 h-full w-full bg-black/25"></div>
          <div className=" absolute m-2.5 left-0 md:left-10 top-0 md:top-20 max-w-xl w-full">
            <div className=" p-5 md:p-10 bg-white text-black rounded-xl md:rounded space-y-5 w-full">
              <h2 className="font-semibold text-2xl leading-none">
                Aanvraag onafhankelijke ondersteuning
              </h2>
              <p>Loopt uw aardbevingsdossier vast?</p>
              <p>
                Aardbeving Adviesbureau (AAB) ondersteunt bewoners bij complexe
                situaties rond schade, versterking en duurzaam herstel. Met dit
                formulier krijgen wij inzicht in uw situatie en beoordelen wij
                of en hoe wij u technisch kunnen ondersteunen. <br />
                Ondersteuning kan in veel gevallen (deels) worden vergoed via
                bestaande regelingen. Indien relevant informeren wij u hierover.
              </p>
              <button
                className=" rounded-full bg-[--background_box] text-white py-2 px-5 flex gap-2.5"
                onClick={() => scrollup()}
              >
                <ChevronRight />
                Contact met het IMG
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* contact  */}
      <section id="contact" className=" p-5 bg-[--background_box]">
        <div className="bg-white p-5 md:p-10 rounded-xl text-black">
          {submit && <h2>Step {step}</h2>}
          {submit ? (
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <h2 className="text-[--background_box] text-xl md:text-4xl font-semibold uppercase">
                  Vragen, Opmerkingen of aanvragen voor nieuwe projecten?
                </h2>
                <p className="pb-5">
                  Kom in contact met ons en laat je vraag achter via dit
                  contactformulier.
                </p>
                {/* STEP 0
              {step === 0 && (
                <div className="space-y-5">
                  <div className="flex gap-5">
                    <Input
                      required
                      placeholder="NAAM"
                      className="border-0 !border-b-2 border-[--background_box]"
                    />
                    <Input
                      placeholder="BEDRIJF (OPTIONEEL)"
                      className="border-0 !border-b-2 border-[--background_box]"
                    />
                  </div>
                  <div className="flex gap-5">
                    <Input
                      required
                      placeholder="E-MAIL"
                      type="email"
                      className="border-0 !border-b-2 border-[--background_box]"
                    />
                    <Input
                      placeholder="TELEFOONNUMER (OPTIONEEL)"
                      className="border-0 !border-b-2 border-[--background_box]"
                    />
                  </div>
                  <Textarea
                    placeholder="BERICHT"
                    row={24}
                    className="border-0 !border-b-2 border-[--background_box]"
                  />

                  <p className="space-x-2">
                    <input
                      id="id_agreed_to_privacy_policy"
                      name="agreed_to_privacy_policy"
                      type="checkbox"
                      class="checkbox"
                      required=""
                    />
                    <label for="id_agreed_to_privacy_policy">
                      Ik ga akkoord met de privacyverklaring (lees onze
                      privacyverklaring)
                    </label>
                  </p>
                </div>
              )} */}

                {/* STEP 1 */}
                {step === 1 && (
                  <>
                    <h3 className="text-2xl font-bold">
                      1. Met welk traject heeft u te maken?
                    </h3>

                    <div className="flex flex-col text-xl">
                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="traject"
                          value="IMG – Schade"
                          onChange={handleChange}
                          className="bg-transparent"
                        />
                        IMG – Schade
                      </Label>

                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="traject"
                          value="NCG – Versterking"
                          onChange={handleChange}
                        />
                        NCG – Versterking
                      </Label>

                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="traject"
                          value="Duurzaam herstel"
                          onChange={handleChange}
                        />
                        Duurzaam herstel
                      </Label>
                    </div>
                  </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <>
                    <h3 className="text-2xl font-bold">
                      2. Waar loopt u vast?
                    </h3>

                    <Textarea
                      name="problem"
                      placeholder="Beschrijf uw situatie..."
                      value={formData.problem}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="border-0 border-b-2 border-[--background_box]"
                      style={{ width: "100%" }}
                    />
                  </>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <>
                    <h3 className="text-2xl font-bold">
                      3. Wat is al gebeurd?
                    </h3>

                    <div className="flex flex-col text-xl">
                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="status"
                          value="Er is een opname of rapport opgest"
                          onChange={handleChange}
                        />
                        Er is een opname of rapport opgesteld
                      </Label>
                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="status"
                          value="Er is een besluit genomen"
                          onChange={handleChange}
                        />
                        Er is een besluit genomen
                      </Label>
                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="status"
                          value="Ik ben het niet eens met het besluit"
                          onChange={handleChange}
                        />
                        Ik ben het niet eens met het besluit
                      </Label>
                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="status"
                          value="Er loopt bezwaar of procedure"
                          onChange={handleChange}
                        />
                        Er loopt bezwaar of procedure
                      </Label>
                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="status"
                          value="Herstel is uitgevoerd maar problemen blijven"
                          onChange={handleChange}
                        />
                        Herstel is uitgevoerd maar problemen blijven
                      </Label>
                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="status"
                          value="Nog geen formeel besluit"
                          onChange={handleChange}
                        />
                        Nog geen formeel besluit
                      </Label>
                    </div>
                  </>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                  <>
                    <h3 className="text-2xl font-bold">
                      4. Waar heeft u behoefte aan?
                    </h3>

                    <div className="flex flex-col text-xl">
                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="status"
                          value="Onafhankelijke technische beoordeling"
                          onChange={handleChange}
                        />
                        Onafhankelijke technische beoordeling
                      </Label>
                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="status"
                          value="Second opinion op rapport of advies"
                          onChange={handleChange}
                        />
                        Second opinion op rapport of advies
                      </Label>
                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="status"
                          value=" Inzicht in samenhang van mijn dossier"
                          onChange={handleChange}
                        />
                        Inzicht in samenhang van mijn dossier
                      </Label>
                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="status"
                          value="Technische onderbouwing richting instantie"
                          onChange={handleChange}
                        />
                        Technische onderbouwing richting instantie
                      </Label>
                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="status"
                          value=" Duiding van mijn mogelijkheden"
                          onChange={handleChange}
                        />
                        Duiding van mijn mogelijkheden
                      </Label>
                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="status"
                          value=" Ik weet het nog niet precies"
                          onChange={handleChange}
                        />
                        Ik weet het nog niet precies
                      </Label>
                    </div>
                  </>
                )}

                {/* STEP 5 */}
                {step === 5 && (
                  <div className="space-y-5">
                    <h3 className="text-2xl font-bold">5. Gegevens woning</h3>

                    <div>
                      <Label>Adres woning</Label>
                      <Input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Straat + huisnummer"
                        required
                        className="border-0 !border-b-2 border-[--background_box]"
                      />
                    </div>
                    <div>
                      <Label>Postcode en plaats</Label>
                      <Input
                        type="text"
                        name="postalPlace"
                        value={formData.postalPlace}
                        onChange={handleChange}
                        placeholder="1234 AB Plaats"
                        required
                        className="border-0 !border-b-2 border-[--background_box] max-w-44"
                      />
                    </div>

                    <h4 className="text-xl font-bold">Type woning</h4>

                    <div className="flex flex-col text-xl">
                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="houseType"
                          value="Vrijstaand"
                          checked={formData.houseType === "Vrijstaand"}
                          onChange={handleChange}
                        />
                        Vrijstaand
                      </Label>

                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="houseType"
                          value="Twee-onder-een-kap"
                          checked={formData.houseType === "Twee-onder-een-kap"}
                          onChange={handleChange}
                        />
                        Twee-onder-een-kap
                      </Label>

                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="houseType"
                          value="Rijwoning"
                          checked={formData.houseType === "Rijwoning"}
                          onChange={handleChange}
                        />
                        Rijwoning
                      </Label>

                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="houseType"
                          value="Boerderij"
                          checked={formData.houseType === "Boerderij"}
                          onChange={handleChange}
                        />
                        Boerderij
                      </Label>

                      <Label className="flex gap-1">
                        <input
                          type="radio"
                          name="houseType"
                          value="Anders"
                          checked={formData.houseType === "Anders"}
                          onChange={handleChange}
                        />
                        Anders
                      </Label>
                    </div>
                  </div>
                )}

                {/* STEP 6 */}
                {step === 6 && (
                  <div className="space-y-5">
                    <h3 className="text-2xl font-bold">
                      6. Uw contactgegevens
                    </h3>

                    <div className="flex gap-5">
                      <div className="flex-1">
                        <Label>Naam</Label>
                        <Input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleChange}
                          placeholder="Uw naam"
                          required
                          className="border-0 !border-b-2 border-[--background_box]"
                        />
                      </div>
                      <div className="flex-1">
                        <Label>Telefoonnummer</Label>
                        <Input
                          type="tel"
                          name="contactPhone"
                          value={formData.contactPhone}
                          onChange={handleChange}
                          placeholder="06 12345678"
                          required
                          className="border-0 !border-b-2 border-[--background_box] "
                        />
                      </div>
                    </div>

                    <div>
                      <Label>E-mailadres</Label>
                      <Input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleChange}
                        placeholder="voorbeeld@email.nl"
                        required
                        className="border-0 !border-b-2 border-[--background_box]"
                      />
                    </div>

                    <h4 className="text-xl font-bold">Voorkeur voor contact</h4>

                    <div className="flex flex-col text-xl">
                      <Label className="flex gap-2">
                        <input
                          type="radio"
                          name="contactPreference"
                          value="Telefonisch"
                          checked={formData.contactPreference === "Telefonisch"}
                          onChange={handleChange}
                        />
                        Telefonisch
                      </Label>

                      <Label className="flex gap-2">
                        <input
                          type="radio"
                          name="contactPreference"
                          value="E-mail"
                          checked={formData.contactPreference === "E-mail"}
                          onChange={handleChange}
                        />
                        E-mail
                      </Label>

                      <Label className="flex gap-2">
                        <input
                          type="radio"
                          name="contactPreference"
                          value="Online gesprek"
                          checked={
                            formData.contactPreference === "Online gesprek"
                          }
                          onChange={handleChange}
                        />
                        Online gesprek
                      </Label>
                    </div>
                  </div>
                )}

                {/* STEP 7 */}
                {step === 7 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">7. Verklaring</h3>

                    <div className="flex flex-col text-lg gap-4">
                      <Label className="flex gap-3 items-start">
                        <input
                          type="checkbox"
                          name="declarationIndependent"
                          checked={formData.declarationIndependent}
                          onChange={handleChange}
                        />
                        Ik begrijp dat AAB onafhankelijk technisch advies geeft
                        en geen besluitvormende instantie is.
                      </Label>

                      <Label className="flex gap-3 items-start">
                        <input
                          type="checkbox"
                          name="declarationPrivacy"
                          checked={formData.declarationPrivacy}
                          onChange={handleChange}
                        />
                        Ik ga akkoord met verwerking van mijn gegevens conform
                        de privacyverklaring.
                      </Label>
                    </div>
                  </div>
                )}

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className={`${
                      step === 1 && " opacity-0 pointer-events-none"
                    } uppercase px-5 py-1.5 bg-[--background_box] rounded-full text-white`}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className={`${
                      step === 7 && "hidden"
                    } uppercase px-5 py-1.5 bg-[--background_box] rounded-full text-white`}
                  >
                    Next
                  </button>
                  <button
                    type="submit"
                    disabled={
                      !formData.declarationIndependent ||
                      !formData.declarationPrivacy
                    }
                    className={`${
                      step !== 7 && "hidden"
                    } uppercase px-5 py-2.5 rounded-full text-white ${
                      formData.declarationIndependent &&
                      formData.declarationPrivacy
                        ? "bg-[--background_box]"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Verstuur aanvraag
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="text-sm text-gray-600 leading-relaxed pt-4 border-t text-center">
              {/* Closing Text */}
              <p>Na ontvangst beoordelen wij uw aanvraag inhoudelijk.</p>
              <p className="mt-2">
                Indien uw situatie binnen onze expertise valt, nemen wij contact
                met u op voor een eerste gesprek.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
