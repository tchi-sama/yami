"use client";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div className="bg-white shadow p-4">
      <div className="container flex justify-between items-center">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-700">YAMI</h1>
        </div>
        <div>
          <Input className="min-w-[400px]" placeholder="search here" />
        </div>
        <div className="flex-1 flex justify-end">
          <NavigationMenu className="px-4">
            <NavigationMenuList>

              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Menu</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Cart</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>


            </NavigationMenuList>
          </NavigationMenu>
          {false && <Button>login</Button>}
        </div>
      </div>
    </div>
  );
}
