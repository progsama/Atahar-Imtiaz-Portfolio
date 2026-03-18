import { useState } from "react";

import ResumeModal from "../components/ResumeModal";

const ResumeSection = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section
        id="resume"
        className="w-full padding-x-lg flex items-center justify-center min-h-[34vh] md:min-h-[38vh] scroll-mt-28"
      >
        <button
          type="button"
          className="cta-wrapper"
          onClick={() => setIsResumeOpen(true)}
          aria-label="Preview resume PDF"
        >
          <div className="resume-preview-btn group px-10 py-6 md:px-16 md:py-7 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center gap-4 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.35)]">
            <span className="text-white md:text-xl text-base font-semibold uppercase tracking-wide">
              Resume (PDF)
            </span>
            <img
              src="/images/arrow-down.svg"
              alt=""
              className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </div>
        </button>
      </section>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
};

export default ResumeSection;

