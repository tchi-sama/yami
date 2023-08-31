"use client"
import React , {useState} from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import {MdMoreHoriz} from "react-icons/md"
import {FaLocationDot} from "react-icons/fa6"

const AllMeals=[
    {
        name:"meal 1",
        description:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/2/26/2/WU1307H_stuffed-peppers_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1463506005081.jpeg" ,
    },
    {
        name:"meal 2",
        description:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/11/9/0/FNK_Whole30-Bacon-Egg-Cups-2_s4x3.jpg.rend.hgtvcom.966.725.suffix/1510259143135.jpeg" 
    },
    {
        name:"meal 3",
        description:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/12/23/0/FNmag_Huevos-Rancheros-im_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382538810976.jpeg" 
    }
]


export default function FeedCard() {
    const [meal,setMeal]=useState(0);
    const nextMeal=()=>{
        setMeal(p=>(p+1<AllMeals.length?p+1:0))
    }
    const prevMeal=()=>{
        setMeal(p=>(p>0?p-1:AllMeals.length-1))
    }
  return (
        <div className='w-full group bg-white rounded-lg border p-4 h-fit'>
            <div className='flex justify-between items-start'>
                <div className='flex gap-1'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className='flex ml-4 flex-col'>
                        <span className='font-bold text-gray-700'>user name</span>
                        <div className='mt-[-4px] text-gray-500 flex gap-1 items-center'> 
                            <FaLocationDot size={12}/>
                            <span>marrakech</span>
                        </div>
                    </div>
                </div>
                <button className='p-1 hover:bg-gray-100 rounded-md'>
                    <MdMoreHoriz size={25} color={"#333"}/>
                </button>
            </div>
            <div className='mt-4'>
                <div className='relative overflow-hidden'>
                    <button onClick={prevMeal} className='scale-0 group-hover:scale-100 duration-200 ease-in-out absolute w-20 h-20 top-[50%] translate-y-[-50%] translate-x-[-50%] rounded-full bg-[#fffa]'></button>
                    <img alt='food' className='flex-1 aspect-[8/5] object-cover rounded-lg'  src={AllMeals[meal].image}></img>
                    <button onClick={nextMeal} className='scale-0 group-hover:scale-100 duration-200 ease-in-out absolute w-20 h-20 right-0 top-[50%] translate-y-[-50%] translate-x-[50%] rounded-full bg-[#fffa]'></button>
                </div>
                <div className='mt-4 flex justify-between gap-4'>
                        <Accordion className='flex-1' type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{AllMeals[meal].name}</AccordionTrigger>
                            <AccordionContent>
                                {AllMeals[meal].description}
                            </AccordionContent>
                        </AccordionItem>
                        </Accordion>
                        <h1 className='text-xl font-bold py-2 '>240 Dh</h1>
                </div>
                <div className='mt-4 flex justify-between items-end'>
                    <div className='flex gap-2'>
                        {
                            AllMeals.map((dot,i)=>(
                                    <div className={`h-2 ${i==meal?"w-4 bg-gray-400":"w-2 bg-gray-300"} duration-200 rounded-full`}></div>
                            ))
                        }
                    </div>
                    <div className='flex gap-2'>
                        <Button className='bg-secondary hover:bg-gray-200 text-primary'>see all</Button>
                        <Button className='bg-primary'>order now</Button>
                    </div>
                </div>
            </div>
        </div>
  )
}
