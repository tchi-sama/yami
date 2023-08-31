"use client"
import React , {useState} from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import {MdMoreHoriz} from "react-icons/md";
import {FaLocationDot} from "react-icons/fa6";
import {BsChevronCompactLeft} from "react-icons/bs";
import {BsChevronCompactRight} from "react-icons/bs";
import {FaStar} from "react-icons/fa6";
import {FiArrowRight} from "react-icons/fi";


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
];


export default function FeedCard() {
    const [meal,setMeal]=useState(0);
    const nextMeal=(event:any)=>{
        setMeal(p=>(p+1<AllMeals.length?p+1:0))
        event.stopPropagation();
    }
    const prevMeal=(event:any)=>{
        setMeal(p=>(p>0?p-1:AllMeals.length-1))
        event.stopPropagation();
    }
  return (
        <div onClick={()=>alert("hello")} className='w-full cursor-pointer duration-150 group rounded-xl shadow p-4 text-gray-700 bg-white h-fit '>
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
                    <button onClick={prevMeal} className='scale-0 pr-2 flex justify-end items-center group-hover:scale-100 duration-200 ease-in-out absolute w-20 h-20 top-[50%] translate-y-[-50%] translate-x-[-50%] rounded-full bg-[#fffa]'>
                        <BsChevronCompactLeft size={35}  />
                    </button>
                    <img alt='food' className='flex-1 aspect-[8/5] object-cover rounded-lg'  src={AllMeals[meal].image}></img>
                    <button onClick={nextMeal} className='scale-0 pl-2 flex  items-center group-hover:scale-100 duration-200 ease-in-out absolute w-20 h-20 right-0 top-[50%] translate-y-[-50%] translate-x-[50%] rounded-full bg-[#fffa]'>
                        <BsChevronCompactRight size={35}  />
                    </button>
                    <div className='flex gap-2 absolute bottom-2 left-[50%] translate-x-[-50%]'>
                        {
                            AllMeals.map((dot,i)=>(
                                    <div className={`h-2 ${i==meal?"w-4 bg-[#fff]":"w-2 bg-[#fff7]"} duration-200 rounded-full`}></div>
                            ))
                        }
                    </div>
                </div>
                <div className='mt-4 flex items-end justify-between gap-4'>
                        <div>
                            <h1 className='text-lg font-bold'>{AllMeals[meal].name}</h1>
                            <h1 className='text-sm font-semibold text-gray-500'>6.5 km , 30 min , 0 dh delivery fee</h1>
                            <h1 className='text-sm font-semibold text-gray-500 flex items-center'>4.6 <FaStar className="inline-block ml-1 mr-2"/> (320) </h1>
                        </div>
                        <h1 className='text-lg font-bold'>240 Dh</h1>
                </div>
                {/* <div className='flex mt-2 justify-end '>
                    <Button className='flex gap-2 bg-secondary text-gray-700 hover:text-white'>open <FiArrowRight/></Button>
                </div> */}
            </div>
        </div>



  )
}



