import React, { useState } from "react";
import herobg from "../assets/hero-bg.jpg";
import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Context() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    traject: "",
    problem: "",
    status: [],
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          status: [...formData.status, value],
        });
      } else {
        setFormData({
          ...formData,
          status: formData.status.filter((item) => item !== value),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
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
          <h2>Step {step}</h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <h2 className="text-[--background_box] text-xl md:text-4xl font-semibold uppercase">
                Vragen, Opmerkingen of aanvragen voor nieuwe projecten?
              </h2>
              <p>
                Kom in contact met ons en laat je vraag achter via dit
                contactformulier.
              </p>
              {/* STEP 0 */}
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
              )}

              {/* STEP 1 */}
              {step === 1 && (
                <>
                  <h3>1. Met welk traject heeft u te maken?</h3>

                  <label>
                    <input
                      type="radio"
                      name="traject"
                      value="IMG – Schade"
                      onChange={handleChange}
                    />
                    IMG – Schade
                  </label>
                  <br />

                  <label>
                    <input
                      type="radio"
                      name="traject"
                      value="NCG – Versterking"
                      onChange={handleChange}
                    />
                    NCG – Versterking
                  </label>
                  <br />

                  <label>
                    <input
                      type="radio"
                      name="traject"
                      value="Duurzaam herstel"
                      onChange={handleChange}
                    />
                    Duurzaam herstel
                  </label>
                </>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <>
                  <h3>2. Waar loopt u vast?</h3>

                  <textarea
                    name="problem"
                    placeholder="Beschrijf uw situatie..."
                    value={formData.problem}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{ width: "100%" }}
                  />
                </>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <>
                  <h3>3. Wat is al gebeurd?</h3>

                  <label>
                    <input
                      type="checkbox"
                      value="Opname of rapport opgesteld"
                      onChange={handleChange}
                    />
                    Er is een opname of rapport opgesteld
                  </label>
                  <br />

                  <label>
                    <input
                      type="checkbox"
                      value="Besluit genomen"
                      onChange={handleChange}
                    />
                    Er is een besluit genomen
                  </label>
                  <br />

                  <label>
                    <input
                      type="checkbox"
                      value="Bezwaar loopt"
                      onChange={handleChange}
                    />
                    Er loopt bezwaar of procedure
                  </label>
                </>
              )}

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className=" uppercase px-5 py-2.5 bg-[--background_box] rounded-full text-white"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className={`${
                    step === 3 && "hidden"
                  } uppercase px-5 py-2.5 bg-[--background_box] rounded-full text-white`}
                >
                  Next
                </button>
                <button
                  type="submit"
                  className={`${
                    step !== 3 && "hidden"
                  } uppercase px-5 py-2.5 bg-[--background_box] rounded-full text-white`}
                >
                  Verstuur aanvraag
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
