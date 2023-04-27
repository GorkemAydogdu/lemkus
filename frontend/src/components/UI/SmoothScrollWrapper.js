import React, { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SmoothScrollWrapper = React.forwardRef((props, ref) => {
  useEffect(() => {
    smoothScroll(ref.current);

    function smoothScroll(content) {
      let smoothness;
      if (window.innerWidth < 1025) {
        smoothness = 0.5;
      } else {
        smoothness = 2;
      }

      window.addEventListener("resize", () => {
        if (window.innerWidth < 1025) {
          smoothness = 0.5;
        } else {
          smoothness = 2;
        }
      });

      gsap.set(content.parentNode, {
        position: "fixed",
      });

      let height;

      function refreshHeight() {
        height = content.clientHeight + content.getBoundingClientRect().top;
        document.body.style.height = height + "px";
        return height - document.documentElement.clientHeight;
      }

      return ScrollTrigger.create({
        animation: gsap.fromTo(
          content,
          { y: 0 },
          {
            y: () => document.documentElement.clientHeight - height,
            ease: "none",
          }
        ),
        invalidateOnRefresh: true,
        start: 0,
        end: refreshHeight,
        scrub: smoothness,
      });
    }
    if (ref.current.className.includes("pageAccount")) {
      setTimeout(() => {
        ScrollTrigger.refresh(true);
      }, 2500);
    } else if (ref.current.className.includes("homeSmooth")) {
      setTimeout(() => {
        ScrollTrigger.refresh(true);
      }, 1000);
    } else {
      setTimeout(() => {
        ScrollTrigger.refresh(true);
      }, 1500);
    }
    return () => clearTimeout();
  }, [ref]);
  return (
    <div ref={ref} className={props.className}>
      {props.children}
    </div>
  );
});

export default SmoothScrollWrapper;
