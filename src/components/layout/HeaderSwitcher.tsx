"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Header2 } from "@/components/layout/Header2";

export function HeaderSwitcher() {
  const pathname = usePathname();

  if (pathname === "/contact") {
    return <Header2 />;
  }

  return <Header />;
}