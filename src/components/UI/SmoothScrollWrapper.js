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
        const contentTop = content.getBoundingClientRect().top;
        height = content.clientHeight + contentTop;
        document.body.style.height = height + "px";
        return height - document.documentElement.clientHeight;
      }

      gsap.fromTo(
        content,
        {
          y: 0,
        },
        {
          y: () => document.documentElement.clientHeight - height,
          ease: "none",
          scrollTrigger: {
            start: "top top",
            end: refreshHeight,
            invalidateOnRefresh: true,
            scrub: 2,
          },
        }
      );
      // return ScrollTrigger.create({
      //   animation: gsap.fromTo(
      //     content,
      //     { y: 0 },
      //     {
      //       y: () => document.documentElement.clientHeight - height,
      //       ease: "none",
      //     }
      //   ),
      //   invalidateOnRefresh: true,
      //   start: 0,
      //   end: refreshHeight,
      //   scrub: smoothness,
      // });
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
