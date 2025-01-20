"use client";

import { ReactNode, useEffect, useState } from "react";
import Sidebar from "../elements/sidebar";
import useScreenSize from "@/hooks/useScreenSize";
import Mobilebar from "../elements/mobilebar";
import PromotionBanner from "../elements/promotion-banner";

const Layouts = ({ children }: { children: ReactNode }) => {
  const { isMobile } = useScreenSize();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <>
      {isMobile ? <Mobilebar /> : <Sidebar />}
      <div className="relative flex flex-col items-center px-5 py-10 md:px-64">
        <PromotionBanner freeTrials={46} />
        {children}
      </div>
    </>
  );
};

export default Layouts;
