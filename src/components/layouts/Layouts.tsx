"use client";

import { ReactNode } from "react";
import Sidebar from "../elements/sidebar";
import useScreenSize from "@/hooks/useScreenSize";
import Mobilebar from "../elements/mobilebar";

const Layouts = ({ children }: { children: ReactNode }) => {
  const { isMobile } = useScreenSize();
  return (
    <>
      {isMobile ? <Mobilebar /> : <Sidebar />}
      <div className="px:5 md:px-64">{children}</div>
    </>
  );
};

export default Layouts;
