import { useState, lazy, Suspense } from "react";
import Hero from "./sections/Hero.jsx";
import NavBar from "./components/NavBar";
import ResumeModal from "./components/ResumeModal";

const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection.jsx"));
const TechStack = lazy(() => import("./sections/TechStack.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));
const Footer = lazy(() => import("./sections/Footer.jsx"));

const SectionFallback = () => (
  <div
    className="min-h-[50vh] flex items-center justify-center"
    aria-hidden="true"
  >
    <div className="animate-pulse w-12 h-12 rounded-full bg-black-50" />
  </div>
);

const App = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <NavBar onResumeClick={() => setIsResumeOpen(true)} />
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <ShowcaseSection />
        <TechStack />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
