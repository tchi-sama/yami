import Navbar from '@/components/global/Navbar'
import { Button } from '@/components/ui/button'
import React from 'react'
 
import {FaCartShopping } from "react-icons/fa6"
import {FaStar} from "react-icons/fa6"
import {FaMapMarkerAlt} from "react-icons/fa"
import Link from 'next/link'
import FeedCard from '@/components/global/FeedCard'

export default function page(props:any) {
  return (
    <div>
        <Navbar/>
        <div className='container grid text-gray-700 grid-cols-2 gap-4 mt-32'>
            <img className='aspect-[8/5] rounded-xl object-cover flex-1' src='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/12/23/0/FNmag_Huevos-Rancheros-im_s4x3.jpg.rend.hgtvcom.966.725.suffix/1382538810976.jpeg'></img>
            <div className='flex-1 flex flex-col gap-2'>
                <h1 className='text-3xl font-bold py-2'>Name of the meal</h1>
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
                <Link href={"#"} className='flex text-gray-500 gap-2 items-center'><FaMapMarkerAlt/>Marrakech , aitourir ainmansor</Link>
                <p className=' text-gray-500'>3 km - 35 min</p>
                <p className='py-2 text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est harum, molestiae porro magni voluptate ad placeat reiciendis omnis. Tenetur maxime placeat suscipit deserunt repellat, tempora beatae laborum expedita. Rerum, cumque.</p>

                <div>
                    <Button className='flex gap-2'>Add to cart <FaCartShopping/></Button>
                </div>
            </div>
        </div>
        <hr className='my-8 container'></hr>
        <div className='grid grid-cols-4 gap-3 container '>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
    </div>
  )
}















