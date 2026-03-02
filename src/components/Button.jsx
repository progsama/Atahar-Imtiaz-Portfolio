const Button = ({ text, className, scrollTo }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = scrollTo ?? "work";
    const target = document.getElementById(targetId);
    if (target) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <a
      href={scrollTo ? `#${scrollTo}` : "#work"}
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`}
      aria-label={text}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="" />
        </div>
      </div>
    </a>
  );
};

export default Button;
