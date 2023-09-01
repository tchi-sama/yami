"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MdMoreHoriz } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area"


const AllMeals = [
  {
    name: "meal 1",
    description:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/2/26/2/WU1307H_stuffed-peppers_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1463506005081.jpeg",
  },
  {
    name: "meal 2",
    description:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/11/9/0/FNK_Whole30-Bacon-Egg-Cups-2_s4x3.jpg.rend.hgtvcom.966.725.suffix/1510259143135.jpeg",
  },
  {
    name: "meal 3",
    description:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/12/23/0/FNmag_Huevos-Rancheros-im_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382538810976.jpeg",
  },
];

export default function FeedCard() {
  const [meal, setMeal] = useState(0);
  const router = useRouter();
  const nextMeal = (event: any) => {
    setMeal((p) => (p + 1 < AllMeals.length ? p + 1 : 0));
    event.stopPropagation();
  };
  const prevMeal = (event: any) => {
    setMeal((p) => (p > 0 ? p - 1 : AllMeals.length - 1));
    event.stopPropagation();
  };
  return (
    <div className="w-full duration-150 group rounded-xl shadow p-3 text-gray-700 bg-white h-fit ">
      <div className="relative overflow-hidden">
        <button
          onClick={prevMeal}
          className="scale-0 pr-2 flex justify-end items-center group-hover:scale-100 duration-200 ease-in-out absolute w-20 h-20 top-[50%] translate-y-[-50%] translate-x-[-50%] rounded-full bg-[#fffa]"
        >
          <BsChevronCompactLeft size={35} />
        </button>
        <img
          alt="food"
          onClick={() => router.push("/meal/test")}
          className="flex-1 cursor-pointer  aspect-[8/5] object-cover rounded-lg"
          src={AllMeals[meal].image}
        ></img>
        <button
          onClick={nextMeal}
          className="scale-0 pl-2 flex  items-center group-hover:scale-100 duration-200 ease-in-out absolute w-20 h-20 right-0 top-[50%] translate-y-[-50%] translate-x-[50%] rounded-full bg-[#fffa]"
        >
          <BsChevronCompactRight size={35} />
        </button>
        <div className="flex gap-2 absolute bottom-2 left-[50%] translate-x-[-50%]">
          {AllMeals.map((dot, i) => (
            <div
              className={`h-2 ${
                i == meal ? "w-4 bg-[#fff]" : "w-2 bg-[#fff7]"
              } duration-200 rounded-full`}
            ></div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-end justify-between gap-4">
        <h1 className="text-lg ">meal name</h1>
      </div>
      <div className="flex justify-between items-end">
        <h1 className=" font-bold">240 Dh</h1>
        <Dialog>
          <DialogTrigger
            className="flex items-center bg-primary px-4 rounded-xl text-white py-2 gap-2 group-hover:scale-100 scale-0 duration-200 ease-in-out"
            onClick={(e: any) => e.stopPropagation()}
          >
            Add <FiArrowRight />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Name of the meal</DialogTitle>
            </DialogHeader>

            <ScrollArea className="h-[70vh] border-none w-full rounded-md border p-4">

              <DialogDescription>
                740-980 cal
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                sequi aspernatur possimus ut quae, natus deserunt aliquam minima
                officiis fugiat, expedita quisquam eius rem corporis veniam amet
                veritatis quam. Quia?
                    <img
                    alt="food"
                    className="aspect-[8/4] my-2 object-cover rounded-lg"
                    src={AllMeals[meal].image}
                    ></img>
              </DialogDescription>
              <DialogDescription>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="flex ">
                        <span className="flex-1 text-start">Select Size</span>
                        <span className="px-2 py-1 mr-2 bg-yellow-100 rounded-lg text-yellow-500">required</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <RadioGroup defaultValue="option-one">
                        {
                            ["Small","Medium","Large"].map((option,i)=> (
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value={option} id={option} />
                                    <Label htmlFor={option}>{option}</Label>
                                </div>
                            ))
                        }
                      </RadioGroup>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Select Drink</AccordionTrigger>
                    <AccordionContent>
                      <RadioGroup defaultValue="option-one">
                        {
                            ["Coke","Sprite","Diet Coke","Dr Pepper","Lemonade","none"].map((option,i)=> (
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value={option} id={option} />
                                    <Label htmlFor={option}>{option}</Label>
                                </div>
                            ))
                        }
                      </RadioGroup>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Select Drink</AccordionTrigger>
                    <AccordionContent>
                      <RadioGroup defaultValue="option-one">
                        {
                            ["Coke","Sprite","Diet Coke","Dr Pepper","Lemonade","none"].map((option,i)=> (
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value={option} id={option} />
                                    <Label htmlFor={option}>{option}</Label>
                                </div>
                            ))
                        }
                      </RadioGroup>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              
              </DialogDescription>
            </ScrollArea>
            <div className="flex justify-between">
                <div></div>
                <Button disabled>Add to cart - 150 dh</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
