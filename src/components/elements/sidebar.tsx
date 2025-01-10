"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { IKImage } from "imagekitio-next";
import { navItems, urlEndpoint } from "@/common";

const NavbarBtn = ({
  placeholder,
  href,
  icon,
}: {
  placeholder: string;
  href: string;
  icon: ReactNode;
}) => {
  const router = usePathname();
  const isActive = router === href;

  return (
    <Link
      href={href}
      className={cn(
        `flex flex-col items-center justify-center gap-0.5 p-2 w-16 h-16 rounded transition-colors duration-300`,
        isActive ? "bg-gray-800" : "bg-white"
      )}
    >
      <i className={cn("w-6 h-6", isActive ? "fill-white" : "fill-gray-800")}>
        {icon}
      </i>
      <p
        className={cn(
          "font-medium text-sm capitalize",
          isActive ? "text-white" : "text-gray-800"
        )}
      >
        {placeholder}
      </p>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <div className="fixed right-0 h-full w-24 flex flex-col items-center justify-between px-4 py-10">
      <IKImage
        urlEndpoint={urlEndpoint}
        path="/logo.png"
        alt="Arnawa Digital Logo"
        width={1024}
        height={1024}
        loading="lazy"
        className="aspect-square"
        placeholder="blur"
        blurDataURL="/placeholder.png"
      />
      <nav className="flex flex-col gap-6">
        {navItems.map((item, index) => (
          <NavbarBtn
            key={index}
            placeholder={item.placeholder}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </nav>
      <div></div>
    </div>
  );
};

export default Sidebar;
