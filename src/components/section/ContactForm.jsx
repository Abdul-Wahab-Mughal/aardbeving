import { Mail, Phone } from "lucide-react";
import React, { useState } from "react";
import TitleBox from "../ui/titleBox";
import { Input } from "../ui/input";
import { Field, FieldLabel } from "../ui/field";
import { Textarea } from "../ui/textarea";

export default function ContactForm({ showTraject }) {
  const [form, setForm] = useState({
    naam: "",
    email: "",
    telefoon: "",
    traject: "",
    bericht: "",
  });
  const [submit, setSubmit] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({ naam: "", email: "", telefoon: "", traject: "", bericht: "" });
    setSubmit(false);
  };

  return (
    <section>
      <TitleBox title="Aanvraag onafhankelijke ondersteuning" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-black py-10 px-5 lg:px-20 container m-auto">
        {/* Contact info */}
        <div className="text-header-bar-foreground space-y-6 flex flex-col justify-center">
          <div className="flex items-start gap-3">
            <Phone className="mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="font-bold text-xl">Bel ons</p>
              <p className=" text-sm">050 - ..........</p>
              <p className=" text-xs opacity-75">
                Bereikbaar op werkdagen tussen 09.00 - 17.00 uur
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-1 flex-shrink-0" size={20} />
            <div>
              <p className="font-bold text-xl">Email ons</p>
              <p className=" text-sm">info@aardbeving-adviesbureau.nl</p>
            </div>
          </div>
        </div>

        {/* Form */}
        {submit ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Field>
              <FieldLabel htmlFor="naam">
                Naam<span className=" text-red-300">*</span>
              </FieldLabel>
              <Input
                id="naam"
                required
                value={form.naam}
                onChange={(e) => setForm({ ...form, naam: e.target.value })}
              />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="Email">
                  Email<span className=" text-red-300">*</span>
                </FieldLabel>
                <Input
                  id="Email"
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="Telefoon">Telefoon</FieldLabel>
                <Input
                  id="Telefoon"
                  value={form.telefoon}
                  onChange={(e) =>
                    setForm({ ...form, telefoon: e.target.value })
                  }
                />
              </Field>
            </div>
            {showTraject && (
              <Field>
                <FieldLabel htmlFor="traject">
                  Kies uw traject(en)<span className=" text-red-300">*</span>
                </FieldLabel>
                <select
                  id="traject"
                  required
                  value={form.traject}
                  onChange={(e) =>
                    setForm({ ...form, traject: e.target.value })
                  }
                  className="bg-white border border-black p-2.5"
                >
                  <option value="">Selecteer...</option>
                  <option value="img-traject">IMG-traject (schade)</option>
                  <option value="ncg-traject">NCG-traject (versterking)</option>
                  <option value="duurzaam">Duurzaam herstel</option>
                  <option value="vastgelopen">Vastgelopen trajecten</option>
                </select>
              </Field>
            )}
            <Field>
              <FieldLabel htmlFor="Bericht">
                Bericht<span className=" text-red-300">*</span>
              </FieldLabel>
              <Textarea
                required
                rows={4}
                value={form.bericht}
                onChange={(e) => setForm({ ...form, bericht: e.target.value })}
              />
            </Field>
            <button
              type="submit"
              className="w-full py-2.5 bg-[--background_box] text-white font-bold rounded hover:opacity-90 transition-opacity"
            >
              Verstuur bericht
            </button>
          </form>
        ) : (
          <div className="text-black flex justify-center items-center font-bold text-4xl">
            Thank's for submit
          </div>
        )}
      </div>
    </section>
  );
}
