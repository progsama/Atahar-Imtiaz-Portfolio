import { useEffect } from "react";

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="resume-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
    >
      <div
        className="resume-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="resume-modal-close"
          onClick={onClose}
          aria-label="Close resume"
        >
          ×
        </button>
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="resume-modal-iframe"
        />
      </div>
    </div>
  );
};

export default ResumeModal;
