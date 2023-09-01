"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {HiMapPin} from "react-icons/hi2"
import {MdDeliveryDining} from "react-icons/md"
import {FaUserAlt} from "react-icons/fa"
import {FaCartShopping} from "react-icons/fa6"

export default function Navbar({dlr=true}:{dlr:boolean}) {
  const [delivery, setDelivery] = useState(dlr);
  return (
    <div className="z-50 bg-white p-2 px-4 shadow fixed top-0 w-full">
      <div className="max-w-[1600px] mx-auto flex gap-2 justify-between items-center">
        <div className="flex-1 flex gap-8 items-center">
          <Link href={"/"}>
            <h1 className="text-2xl font-bold text-gray-700">YAMI</h1>
          </Link>
          <div>
            <Popover>
              <PopoverTrigger className="flex items-center gap-1"><HiMapPin/>Marrakech , aitwrir</PopoverTrigger>
              <PopoverContent className="flex flex-col gap-1">
                <h1 className="text-xl font-semibold">Add new location!</h1>
                <hr className="my-4"/>
                <button className="p-2 rounded-md border hover:bg-gray-100 text-left">
                    Marrakech , aitwrir
                </button>
                <button className="p-2 rounded-md hover:bg-gray-100 text-left">
                    Marrakech , sidi mousa
                </button>
                <hr className="my-4"/>
                <Button className="p-2 border rounded-md ">
                    add new location
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
          <div className="bg-gray-200 border-gray-300 border flex rounded-full">
            <Link href={"/"}>
            <button
              onClick={() => setDelivery(true)}
              className={`p-2 duration-150 px-4 text-sm flex gap-1 items-center ${
                delivery ? "bg-gray-900 text-white" : "bg-gray-200 text-black "
              } rounded-full`}
            >
                <MdDeliveryDining size={18}/>
              Delivery
            </button>
            </Link>
            <Link href={"/pickup"}>
            <button
              onClick={() => setDelivery(false)}
              className={`p-2 duration-150 px-4 text-sm flex items-center gap-1 ${
                delivery ? "bg-gray-200 text-black" : "bg-gray-900 text-white "
              } rounded-full`}
            >
                <FaUserAlt size={12} />
              Pickup
            </button>
            </Link>
          </div>
        <div className="flex-1 flex justify-end gap-2 items-center">
          <Input  className=" max-w-xs" placeholder="Search stores, dishes" />
          <button className="p-3 hover:bg-gray-200 bg-white rounded-lg duration-150">
            <FaCartShopping size={20}/>
          </button>
        </div>
      </div>
    </div>
  );
}
