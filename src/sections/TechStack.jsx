import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      },
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="tech-stack-marquee-wrapper mt-16">
          <div className="marquee tech-stack-marquee">
            <div className="marquee-box tech-stack-marquee-box">
              {techStackImgs.map((techStackIcon, index) => (
                <div
                  key={`a-${index}`}
                  className="card-border tech-card overflow-hidden rounded-full flex-none tech-stack-marquee-item"
                >
                  <div className="tech-card-animated-bg" />
                  <div className="tech-card-content">
                    <div className="tech-icon-wrapper">
                      <img src={techStackIcon.imgPath} alt="" loading="lazy" />
                    </div>
                    <div className="padding-x w-full">
                      <p>{techStackIcon.name}</p>
                    </div>
                  </div>
                </div>
              ))}
              {techStackImgs.map((techStackIcon, index) => (
                <div
                  key={`b-${index}`}
                  className="card-border tech-card overflow-hidden rounded-full flex-none tech-stack-marquee-item"
                >
                  <div className="tech-card-animated-bg" />
                  <div className="tech-card-content">
                    <div className="tech-icon-wrapper">
                      <img src={techStackIcon.imgPath} alt="" loading="lazy" />
                    </div>
                    <div className="padding-x w-full">
                      <p>{techStackIcon.name}</p>
                    </div>
                  </div>
                </div>
              ))}
              {techStackImgs.map((techStackIcon, index) => (
                <div
                  key={`c-${index}`}
                  className="card-border tech-card overflow-hidden rounded-full flex-none tech-stack-marquee-item"
                >
                  <div className="tech-card-animated-bg" />
                  <div className="tech-card-content">
                    <div className="tech-icon-wrapper">
                      <img src={techStackIcon.imgPath} alt="" loading="lazy" />
                    </div>
                    <div className="padding-x w-full">
                      <p>{techStackIcon.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
