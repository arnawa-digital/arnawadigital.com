import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const PageContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <main
      className={cn(
        "px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 w-full flex flex-col gap-4",
        className
      )}
    >
      {children}
    </main>
  );
};

export default PageContainer;
