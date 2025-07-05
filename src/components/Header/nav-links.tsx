"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

export const NavLinks = ({ mobile = false, onItemClick }: NavLinksProps) => {
  const pathname = usePathname();

  const navItems = [
    { href: "/blog", label: "Blog" },
    { href: "/learning", label: "Learning" },
    { href: "/useful-prompts", label: "Useful Prompts" },
    { href: "/about", label: "About" },
  ];

  const isActive = (href: string) => {
    if (!pathname) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  if (mobile) {
    return (
      <nav>
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onItemClick}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-white/20 text-white"
                    : "text-white hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav>
      <ul className="flex items-center space-x-1">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-white/20 text-white"
                  : "text-white hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
