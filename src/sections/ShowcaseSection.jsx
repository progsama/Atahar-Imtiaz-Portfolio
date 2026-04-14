import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const MIN_PROJECT_SLOTS = 6;

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const projectCards = [
    ...projects,
    ...Array.from({ length: Math.max(0, MIN_PROJECT_SLOTS - projects.length) }).map(
      (_, index) => ({
        id: `coming-soon-${index + 1}`,
        title: "New repository slot ready",
        stack: "Add your next GitHub project here.",
        placeholder: true,
      }),
    ),
  ];

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const setCardRef = (el, index) => {
    cardRefs.current[index] = el;
  };

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {projectCards.map((project, index) =>
            project.placeholder ? (
              <article
                key={project.id}
                ref={(el) => setCardRef(el, index)}
                className="project-card placeholder block text-inherit"
                aria-label="Upcoming repository slot"
              >
                <div className="image-wrapper placeholder-bg" aria-hidden="true">
                  <p className="placeholder-tag">Coming Soon</p>
                </div>
                <div className="text-content">
                  <h2>{project.title}</h2>
                  <p className="text-white-50 text-sm md:text-base">{project.stack}</p>
                </div>
              </article>
            ) : (
              <a
                key={project.id}
                ref={(el) => setCardRef(el, index)}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card block no-underline text-inherit"
              >
                <div className={`image-wrapper ${project.bgClass ?? ""}`.trim()}>
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                </div>
                <div className="text-content">
                  <h2>{project.title}</h2>
                  <p className="text-white-50 text-sm md:text-base">{project.stack}</p>
                </div>
              </a>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
