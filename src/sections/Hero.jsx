import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Button from "../components/Button.jsx";
import { words } from "../constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroExperience = lazy(() =>
  import("../components/HeroModels/HeroExperience.jsx"),
);
const FeatureCards = lazy(() => import("./FeatureCards.jsx"));
const ResumeSection = lazy(() => import("./ResumeSection.jsx"));

const Hero = () => {
  const heroSectionRef = useRef(null);
  const [isHeroInView, setIsHeroInView] = useState(true);

  useEffect(() => {
    const target = heroSectionRef.current;
    if (!target || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "200px 0px 200px 0px",
      },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 1, duration: 1, ease: "power2.inOut" },
    );
  });

  return (
    <>
      <section id="hero" ref={heroSectionRef} className="relative overflow-hidden">
        <div className="cyber-grid-overlay" aria-hidden="true" />
        <div className="cyber-noise-overlay" aria-hidden="true" />
        <div className="absolute top-0 left-0 z-10">
          <img src="/images/bg.png" alt="background" />
        </div>
        <div className="hero-layout">
          {/*Left: HERO CONTENT */}
          <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
            <div className="flex flex-col gap-7">
              <div className="hero-text">
                <h1>
                  Shaping
                  <span className="slide">
                    <span className="wrapper">
                      {words.map((word) => (
                        <span
                          key={word.text}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                          <img
                            src={word.imgPath}
                            alt={word.text}
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          />
                          <span>{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
                <h1>into Real Projects</h1>
                <h1>that Deliver Results</h1>
              </div>
              <p className="hero-intro-cyber md:text-xl relative z-10 pointer-events-none">
                Hi! My name is Atahar Imtiaz, a Computer Science graduate from the
                University of British Columbia.
              </p>
              <Button
                className="md:w-80 md:h-16 w-60 h-12"
                scrollTo="work"
                text="See my Work"
              />
            </div>
          </header>
          {/*Right: 3D Model */}
          <figure>
            <div className="hero-3d-layout">
              <Suspense
                fallback={<div className="card-border w-full h-full rounded-2xl" />}
              >
                {isHeroInView ? (
                  <HeroExperience />
                ) : (
                  <div className="card-border w-full h-full rounded-2xl" />
                )}
              </Suspense>
            </div>
          </figure>
        </div>
      </section>

      <Suspense fallback={<div className="min-h-[30vh]" aria-hidden="true" />}>
        <ResumeSection />
        <div className="xl:mt-0 mt-32">
          <FeatureCards />
        </div>
      </Suspense>
    </>
  );
};

export default Hero;
