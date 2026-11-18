// "use client";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { useGSAP } from "@gsap/react";
// import { useState } from "react";
// import { gsap } from "gsap";

// export default function useScrollSmooth() {
//   const [isScrollSmooth] = useState<boolean>(true);

//   useGSAP(() => {
//     // Register plugins
//     gsap.registerPlugin(ScrollSmoother);

//     const smoothWrapper = document.getElementById("smooth-wrapper");
//     const smoothContent = document.getElementById("smooth-content");

//     if (smoothWrapper && smoothContent && isScrollSmooth) {
//       gsap.config({
//         nullTargetWarn: false,
//       });

//       ScrollSmoother.create({
//         smooth: 2,
//         effects: true,
//         smoothTouch: 0.1,
//         normalizeScroll: false,
//         ignoreMobileResize: true,
//       });
//     }
//   }, [isScrollSmooth]);
// }

"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

export default function useScrollSmooth() {
  const pathname = usePathname();

  useGSAP(() => {
    // Register plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    gsap.config({ nullTargetWarn: false });

    const smoothWrapper = document.getElementById("smooth-wrapper");
    const smoothContent = document.getElementById("smooth-content");

    if (!smoothWrapper || !smoothContent) return;

    // Portfolio pages use native GPU-composited scrolling for zero-hang smoothness
    const useNativeScroll = pathname?.startsWith("/portfolio");
    const isDesktop = window.innerWidth >= 768;

    const existing = ScrollSmoother.get();
    if (useNativeScroll || !isDesktop) {
      if (existing) {
        existing.kill();
      }
      smoothWrapper.style.cssText = "";
      smoothContent.style.cssText = "";
      document.body.style.height = "";
    } else if (!existing) {
      ScrollSmoother.create({
        wrapper: smoothWrapper,
        content: smoothContent,
        smooth: 0.75,
        effects: true,
        smoothTouch: 0,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });
    }

    if (document.querySelector(".shape")) {
      ScrollTrigger.create({
        trigger: ".shape",
        pin: true,
        start: "center center",
        end: "+=300",
        markers: false,
      });
    }

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);
}