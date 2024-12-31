"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
  const navItems = [
    {
      placeholder: "Home",
      href: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
        >
          <path d="M240,208H224V136l2.34,2.34A8,8,0,0,0,237.66,127L139.31,28.68a16,16,0,0,0-22.62,0L18.34,127a8,8,0,0,0,11.32,11.31L32,136v72H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-88,0H104V160a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4Z"></path>
        </svg>
      ),
    },
    {
      placeholder: "Works",
      href: "/works",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
        >
          <path d="M224,104v96a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V104A16,16,0,0,1,48,88H208A16,16,0,0,1,224,104ZM56,72H200a8,8,0,0,0,0-16H56a8,8,0,0,0,0,16ZM72,40H184a8,8,0,0,0,0-16H72a8,8,0,0,0,0,16Z"></path>
        </svg>
      ),
    },
    {
      placeholder: "Contact",
      href: "/contact",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
        >
          <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,48h24V88H184Zm0,56h24v48H184Zm-38,71.75a8,8,0,0,1-9.74-5.76c-2.63-10.26-13.06-18-24.25-18s-21.61,7.74-24.25,18a8,8,0,0,1-15.5-4,39.84,39.84,0,0,1,17.19-23.34,32,32,0,1,1,45.12,0A39.76,39.76,0,0,1,151.75,166,8,8,0,0,1,146,175.75ZM208,208H184V168h24v40Zm-80-88a16,16,0,1,1-16-16A16,16,0,0,1,128,120Z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed right-0 h-full w-24 flex flex-col items-center justify-between px-4 py-10">
      <Image src={"/logo.png"} alt="Logo Arnawa Digital" width={1024} height={1024} loading="lazy" className="aspect-square"/>
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
