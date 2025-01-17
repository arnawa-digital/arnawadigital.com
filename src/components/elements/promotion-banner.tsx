import { useState } from "react";

const PromotionBanner = ({ freeTrials }: { freeTrials: number }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <article className="flex items-center justify-between rounded bg-blue-600 px-4 py-2 text-sm text-white shadow-md">
      <p>
        Only <span className="font-bold">{freeTrials}</span> free trials left! Sign up now to secure
        yours!
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="ml-4 rounded-full text-xs font-bold text-blue-600"
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
  );
};

export default PromotionBanner;
