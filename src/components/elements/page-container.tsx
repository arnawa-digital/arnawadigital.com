import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const PageContainer = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <main
      className={cn(
        "flex w-full flex-col gap-4 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24",
        className,
      )}
    >
      {children}
    </main>
  );
};

export default PageContainer;
