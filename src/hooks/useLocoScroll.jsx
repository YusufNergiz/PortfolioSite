import { useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll"
import '../locomotive.css';
import ScrollTrigger from "gsap/ScrollTrigger";

const useLocoScroll = () => {
    
      useEffect(() => {

          const scrollEl = document.querySelector("#main-container");
          const locoScroll = new LocomotiveScroll({
              el: scrollEl,
              smooth: true,
              multiplier: 1,
              class: 'is-reveal'
          })

          ScrollTrigger.scrollerProxy("#main-container", {
              scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
              }, 
              getBoundingClientRect() {
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
              },
              // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
              pinType: document.querySelector("#main-container").style.transform ? "transform" : "fixed"
            });


            // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
              locoScroll.on("scroll", ScrollTrigger.update);

              // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
              ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

              // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
              ScrollTrigger.refresh();
      }, [])
    }
export default useLocoScroll;