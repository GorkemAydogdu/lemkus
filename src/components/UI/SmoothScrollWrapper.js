import React, { useEffect } from "react";

// gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollWrapper = React.forwardRef((props, ref) => {
  useEffect(() => {
    //https://greensock.com/forums/topic/24923-smooth-scroll-to-whole-page-and-trigger-animations/?do=findComment&comment=148876
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
        invalidateOnRefresh: true, //resize olduğunda başlangıç değeri temizlenir
        start: 0,
        end: refreshHeight,
        scrub: smoothness,
      });
    }
  });
  return (
    <div ref={ref} className={props.className}>
      {props.children}
    </div>
  );
});

export default SmoothScrollWrapper;
