import React, { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Home page only: animated bar above the traject cards.
 * White radial orb pulses depth-only (back → front). Title scales in a visible loop.
 */
export default function KiesTrajectBar() {
  const orbRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const orb = orbRef.current;
    const title = titleRef.current;
    if (!orb || !title) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        orb,
        {
          scale: 0.35,
          opacity: 0.14,
          filter: "blur(40px)",
          transformOrigin: "50% 50%",
        },
        {
          scale: 1.82,
          opacity: 1,
          filter: "blur(10px)",
          duration: 3.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        }
      );

      gsap.fromTo(
        title,
        { scale: 1, transformOrigin: "50% 50%" },
        {
          scale: 1.22,
          duration: 2.1,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative overflow-hidden bg-[--background_box] md:py-2.5">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="flex h-full w-full items-center justify-center">
          <div
            ref={orbRef}
            className="h-[min(280px,220%)] w-[min(100vw,680px)] rounded-full bg-[radial-gradient(ellipse_78%_58%_at_center,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.28)_38%,transparent_70%)] will-change-[transform,opacity,filter]"
          />
        </div>
      </div>
      <h2
        ref={titleRef}
        className="container relative z-10 m-auto flex w-fit justify-center px-10 text-center font-display text-lg text-header-bar-foreground text-white will-change-transform md:text-xl"
      >
        Kies uw traject
      </h2>
    </div>
  );
}
