import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TitleBox({ title, shine }) {
  const shineRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!shine) return;

    const tl = gsap.timeline({ repeat: -1 });

    // Shine animation
    tl.fromTo(
      shineRef.current,
      { x: "-25%" },
      {
        x: "25%",
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      }
      // 👇 Trigger scale exactly at center (~50% of timeline)
    ).to(
      textRef.current,
      {
        scale: 1.25,
        duration: 2.5,
        ease: "power2.out",
        yoyo: true,
        repeat: -1,
      },
      2 // ⬅️ HALF of 4s = center timing
    );

  }, [shine]);

  return (
    <div className="bg-[--background_box] md:py-2.5 relative overflow-hidden">
      <h2
        ref={textRef}
        className="container font-display text-lg md:text-xl text-header-bar-foreground text-center m-auto px-10 flex w-fit text-white"
      >
        {title}
      </h2>
      {shine && (
        <div
          ref={shineRef}
          className="absolute top-0 left-0 w-[100%] h-full blur-xl rounded-full bg-gradient-to-r from-transparent via-white to-transparent"
        ></div>
      )}
    </div>
  );
}
