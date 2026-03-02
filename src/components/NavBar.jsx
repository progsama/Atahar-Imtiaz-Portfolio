import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = ({ onResumeClick }) => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Atahar Imtiaz
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name, newTab, modal }) => (
              <li key={name} className="group">
                {modal ? (
                  <button
                    type="button"
                    className="nav-link-button"
                    onClick={() => onResumeClick?.()}
                  >
                    <span>{name}</span>
                    <span className="underline" />
                  </button>
                ) : (
                  <a
                    href={link}
                    {...(newTab && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
