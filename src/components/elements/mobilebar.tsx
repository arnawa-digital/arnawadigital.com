"use client";

import { ReactNode, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { navItems, urlEndpoint } from "@/common";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IKImage } from "imagekitio-next";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";

const NavbarBtn = ({
  placeholder,
  href,
  icon,
  closeDrawer,
}: {
  placeholder: string;
  href: string;
  icon: ReactNode;
  closeDrawer: () => void;
}) => {
  const router = usePathname();
  const isActive = router === href;

  return (
    <Link
      href={href}
      onClick={closeDrawer}
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

const MobileBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <nav
        className={cn(
          "fixed bottom-0 z-50 w-full transform bg-gradient-to-t from-gray-300 to-transparent shadow-lg",
          isOpen ? "translate-y-full" : "translate-y-0"
        )}
      >
        <div className="flex items-center justify-between px-5 h-20">
          <IKImage
            urlEndpoint={urlEndpoint}
            path="/logo.png"
            alt="Arnawa Digital Logo"
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-square w-12"
            placeholder="blur"
            blurDataURL="/placeholder.png"
          />
          <button onClick={toggleDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
              className="fill-gray-800"
            >
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
            </svg>
          </button>
        </div>
      </nav>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto px-4 pb-8">
          <ul className="w-full flex justify-center gap-6">
            {navItems.map((item, index) => (
              <NavbarBtn
                key={index}
                placeholder={item.placeholder}
                href={item.href}
                icon={item.icon}
                closeDrawer={() => setIsOpen(false)}
              />
            ))}
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileBar;
