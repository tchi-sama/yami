import FeedCard from '@/components/global/FeedCard'
import Navbar from '@/components/global/Navbar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import {FaStar} from "react-icons/fa6"

export default function page() {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <Navbar dlr={true}/>
        <div className='container '>
            <div className='relative'>
                <img className='w-full rounded-2xl aspect-[10/3] object-cover' src='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/2/26/2/WU1307H_stuffed-peppers_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1463506005081.jpeg'/>
                <Avatar className='w-20 h-20 absolute shadow-md bottom-0 translate-y-[50%] left-8'>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className='mt-16 w-full mx-auto flex flex-col gap-2'>
                <h1 className='text-4xl font-bold'>Name of the store</h1>
                 <div className='flex gap-x-1 items-center'>
                     {
                         [new Array(4).fill("").map((s,i)=>{
                             return(
                                 <FaStar/>
                             )
                         })
                         ,
                         new Array(1).fill("").map((s,i)=>{
                             return(
                                 <FaStar color="#aaa"/>
                             )
                         })]
                     }
                     <span>(305)</span>
                 </div>
 
                <h1 className='text-sm font-semibold text-gray-500'>6.5 km , 30 min , 0 dh delivery fee</h1>
                <h1 className='text-sm font-semibold border  text-green-500 bg-green-100 w-fit p-1 px-2 rounded'>Open now</h1>
            </div>
            <div className='grid grid-cols-4 my-4 gap-3'>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
            </div>
            
        </div>
    </div>
  )
}
