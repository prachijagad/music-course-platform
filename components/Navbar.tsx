"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from 'next/link'
import { hydrateRoot } from 'react-dom/client';

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href="/">
                <MenuItem setActive={setActive} active={active} item="Home">
                
                </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Courses">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/web-dev">All Courses</HoveredLink>
                    <HoveredLink href="/interface-design">Basic Music Theory</HoveredLink>
                    <HoveredLink href="/seo">Advanced Composition</HoveredLink>
                    <HoveredLink href="/branding">Songwriting</HoveredLink>
                    <HoveredLink href="/marketing">Music Production</HoveredLink>
                </div>
            </MenuItem>
            <Link href="/contact">
                <MenuItem setActive={setActive} active={active} item="Contact Us">
                </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Product">
                <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                    <ProductItem
                    title="Algochurn"
                    href="https://algochurn.com"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Prepare for tech interviews like never before."
                    />
                </div>
            </MenuItem>
        </Menu>
    </div>
  );
}