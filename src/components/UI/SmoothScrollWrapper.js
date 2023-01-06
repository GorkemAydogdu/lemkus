import React, { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SmoothScrollWrapper = React.forwardRef((props, ref) => {
  useEffect(() => {
    smoothScroll(ref.current);

    function smoothScroll(content) {
      let smoothness = 2;

      gsap.set(content.parentNode, {
        position: "fixed",
      });

      let height;

      function refreshHeight() {
        height = content.clientHeight;
        document.body.style.height = height + "px";
        return height - document.documentElement.clientHeight;
      }

      return ScrollTrigger.create({
        animation: gsap.fromTo(
          content,
          { y: 0 },
          {
            y: () =>
              document.documentElement.clientHeight -
              height -
              content.getBoundingClientRect().top,
            ease: "none",
          }
        ),
        invalidateOnRefresh: true,
        start: 0,
        end: refreshHeight,
        scrub: smoothness,
      });
    }
    ScrollTrigger.refresh();
  }, [ref]);
  return (
    <div ref={ref} className={props.className}>
      {props.children}
    </div>
  );
});

export default SmoothScrollWrapper;
