import Link from "next/link";
import { useState, useEffect } from "react";

const PromotionBanner = ({ freeTrials }: { freeTrials: number }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const bannerClass = `fixed rounded-none md:rounded z-10 top-0 md:top-4 w-full md:w-max transform transition-transform duration-300 ease-in-out ${
    isVisible && scrollDirection !== "down" ? "-translate-y-0" : "-translate-y-16"
  }`;

  return (
    isVisible && (
      <article
        className={`${bannerClass} flex flex-col-reverse justify-center items-center md:justify-between bg-blue-600 px-2 py-2 text-center text-sm text-white shadow-md md:flex-row md:items-center md:px-4 md:text-left`}
      >
        <p className="max-w-60 md:max-w-max">
          Only <span className="font-bold">{freeTrials}</span> one trial project per brand left!{" "}
          <Link href="/contact" className="underline">
            Hire us
          </Link>{" "}
          now to secure yours!
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="fixed top-2 right-4 rounded-full text-xs font-bold text-blue-600 md:static md:top-0 md:ml-4"
          aria-label="Close Promotion Banner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 256 256"
            className="fill-white"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
          </svg>
        </button>
      </article>
    )
  );
};

export default PromotionBanner;
