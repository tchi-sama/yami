"use client";
import React,{useState} from "react";

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
    const [delivery,setDelivery] = useState(true)
  return (
    <div className="z-50 bg-white p-2 shadow fixed top-0 w-full">
      <div className="container flex gap-2 justify-between items-center">
        <div className="flex-1 flex gap-8 items-center">
          <h1 className="text-2xl font-bold text-gray-700">YAMI</h1>
          <div className="bg-gray-200 flex rounded-full">
            <button onClick={()=>setDelivery(true)} className={`p-2 px-3 text-sm ${delivery?"bg-gray-900 text-white":"bg-gray-200 text-black "} rounded-full`}>Delivery</button>
            <button onClick={()=>setDelivery(false)} className={`p-2 px-3 text-sm ${delivery?"bg-gray-200 text-black":"bg-gray-900 text-white "} rounded-full`}>Pickup</button>
          </div>
          <div>

          </div>

        </div>
        <div className="flex-1">
          <Input className="" placeholder="search here" />
        </div>
      </div>
    </div>
  );
}
