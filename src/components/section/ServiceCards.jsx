import React from "react";
import TitleBox from "../ui/titleBox";

/** Section wash: neutral grey, barely cool (not visibly blue). */
export const SERVICE_SECTION_GLOW_BG =
  "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_88%_72%_at_50%_40%,rgb(250,250,250)_0%,rgb(242,242,244)_38%,rgb(236,236,238)_62%,rgb(229,231,235)_100%)]";

const ICON_CLASS =
  "mt-0.5 h-8 w-8 shrink-0 text-[rgb(54,80,97)]";

/**
 * md+: 2×2 grid, two equal-height rows → all four tiles identical height.
 * min-height is a floor only; grid grows if content needs more (no clipping).
 * Short copy leaves some empty space at the bottom of shorter cards — required
 * for strict equal height without measuring JS.
 */
const TILE_GRID_CLASS =
  "relative container m-auto grid grid-cols-1 gap-5 overflow-visible px-5 py-10 md:grid-cols-2 md:gap-5 md:min-h-[min(28rem,42dvh)] md:grid-rows-[repeat(2,minmax(0,1fr))] lg:px-20 [&>div]:h-full [&>div]:min-h-0";

/**
 * White tile: soft neutral halo + shadow with a clear blue-slate tint.
 * Fills the grid cell on md+ (h-full) so every card matches cell height.
 */
export function ServiceTileCard({ children, className = "" }) {
  return (
    <div
      className={`relative flex h-full min-h-0 flex-col px-1.5 pb-2 pt-1 transition-transform duration-500 ease-out hover:z-20 hover:scale-105 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[52%] z-0 h-[120%] w-[108%] -translate-x-1/2 -translate-y-1/2 rounded-[1.5rem] bg-[radial-gradient(ellipse_64%_52%_at_50%_48%,rgba(255,255,255,0.97)_0%,rgba(248,248,250,0.65)_30%,rgba(238,240,244,0.28)_58%,transparent_78%)] blur-[36px]"
      />
      <article
        className="relative z-[1] flex h-full min-h-0 flex-1 items-start gap-4 rounded-xl border border-black/[0.06] bg-white p-5 text-left md:p-6"
        style={{
          boxShadow:
            "0 1px 2px rgba(54,80,97,0.06), 0 4px 10px rgba(54,80,97,0.1), 0 10px 22px rgba(45,78,102,0.14), 0 18px 36px -8px rgba(54,90,120,0.16)",
        }}
      >
        {children}
      </article>
    </div>
  );
}

export default function ServiceCards({ services }) {
  return (
    <section>
      <TitleBox title="Wat kan AAB voor u betekenen?" />
      <div className="relative bg-gray-200">
        <div className={SERVICE_SECTION_GLOW_BG} aria-hidden />
        <div className={TILE_GRID_CLASS}>
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <ServiceTileCard key={i}>
                {Icon ? (
                  <Icon
                    className={ICON_CLASS}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                ) : null}
                <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
                  <h3 className="shrink-0 text-lg font-bold leading-snug text-[rgb(26,42,58)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 min-h-0 flex-1 overflow-y-auto text-sm leading-relaxed text-[rgb(74,85,104)]">
                    {item.description}
                  </p>
                </div>
              </ServiceTileCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
