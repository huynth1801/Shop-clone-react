import { BiArrowToTop } from "react-icons/bi";
import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTopButton && (
        <button
          className="fixed bottom-8 right-2 z-20 text-black p-2 opacity-70
                    text-3xl font-bold rounded-full bg-zinc-200
                    md:bottom-8 md:right-4 hover:bg-gray-800 hover:text-white
                    hover:opacity-100"
          onClick={scrollUp}
        >
          <BiArrowToTop />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
