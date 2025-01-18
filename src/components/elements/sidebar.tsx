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
        `flex h-14 w-14 flex-col items-center justify-center gap-0.5 rounded transition-colors duration-300`,
        isActive ? "" : "bg-white",
      )}
    >
      <i className={cn("", isActive ? "fill-gray-800" : "fill-gray-500")}>{icon}</i>
      <p
        className={cn(
          "text-xs font-medium capitalize",
          isActive ? "text-gray-800" : "text-gray-500",
        )}
      >
        {placeholder}
      </p>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <div className="fixed z-50 right-0 flex h-full w-24 flex-col items-center justify-between px-4 py-10">
      <Link href={"/"} className={cn("")}>
        <IKImage
          urlEndpoint={urlEndpoint}
          path="/logo.png"
          alt="Arnawa Digital Logo"
          width={1024}
          height={1024}
          loading="lazy"
          className="aspect-square"
        />
      </Link>

      <nav className="flex flex-col gap-4">
        {navItems.slice(0).map((item, index) => (
          <NavbarBtn key={index} placeholder={item.placeholder} href={item.href} icon={item.icon} />
        ))}
      </nav>
      <div className="aspect-square w-16"></div>
    </div>
  );
};

export default Sidebar;
