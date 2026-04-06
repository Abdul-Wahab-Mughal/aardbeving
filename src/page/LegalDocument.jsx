import { Helmet } from "react-helmet-async";
import { LEGAL_DOCS } from "@/legal/legalDocs";
import NotFound from "./NotFound";

export default function LegalDocument({ pageId }) {
  const doc = LEGAL_DOCS[pageId];
  if (!doc) {
    return <NotFound />;
  }

  return (
    <main className="bg-white">
      <Helmet>
        <title>{doc.title} | Aardbeving Adviesbureau</title>
        <meta name="description" content={doc.description} />
      </Helmet>
      <article className="container m-auto max-w-3xl px-5 py-12 lg:px-20 text-black">
        <h1 className="text-2xl font-semibold text-[--background_box] mb-6">
          {doc.title}
        </h1>
        <div className="space-y-4 text-sm leading-relaxed">{doc.body}</div>
      </article>
    </main>
  );
}
