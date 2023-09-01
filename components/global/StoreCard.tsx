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
import {FaRegHeart} from "react-icons/fa6";
import {FaHeart} from "react-icons/fa6";
import { useRouter } from 'next/navigation';


interface Store {
  storename: string;
  location: {
      lat: number;
      lng: number;
  };
  rating: {
      rating: number;
      numberofRaters: number;
  };
  storeimage: string;
  storeAvatar: string;
  description: string;
  isopen: boolean;
}


export default function StoreCard({store}:{store:Store}) {
    const router = useRouter();
  return (
        <div onClick={()=>router.push("/store/hello")} className='w-full cursor-pointer duration-150 group rounded-xl shadow  text-gray-700 bg-white h-fit '>
            <div className=''>
                <div className='relative overflow-hidden'>
                    <img alt='food' className='flex-1 aspect-[2/1] object-cover rounded-lg'  src={"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/2/26/2/WU1307H_stuffed-peppers_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1463506005081.jpeg"}></img>
                    <button className='p-2 bottom-2 right-2 drop-shadow text-2xl text-white absolute '>
                        {
                            true? <FaHeart />:<FaRegHeart/> 
                        }
                    </button>
                </div>
                <div className='mt-2 flex items-end justify-between gap-4'>
                </div>
                {/* <div className='flex mt-2 justify-end '>
                    <Button className='flex gap-2 bg-secondary text-gray-700 hover:text-white'>open <FiArrowRight/></Button>
                </div> */}
            </div>
            <div className='flex justify-between items-start p-4 pt-2'>
                <div className='flex gap-3'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                        <div>
                            <h1 className='text-md font-bold'>{store.storename}</h1>
                            <h1 className='text-sm font-semibold text-gray-500'>6.5 km , 30 min , 0 dh delivery fee</h1>
                            <h1 className='text-sm font-semibold text-gray-500 flex items-center'>{store.rating.rating} <FaStar className="inline-block ml-1 mr-2"/> ({store.rating.numberofRaters}) </h1>
                        </div>
                </div>
            </div>
        </div>



  )
}



// interface Store {
//   storename: string;
//   location: {
//       lat: number;
//       lng: number;
//   };
//   rating: {
//       rating: number;
//       numberofRaters: number;
//   };
//   storeimage: string;
//   storeAvatar: string;
//   description: string;
//   isopen: boolean;
//   isLiked: boolean;
//   destance: number;
//   deliveryTimeByMin:number;
// }