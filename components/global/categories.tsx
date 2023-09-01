"use client"
import {useState} from 'react'



const categories = [
    {name:"fruits"},
    {name:"vegetables"},
    {name:"grains"},
    {name:"dairy"},
    {name:"protein"},
    {name:"sweets & desserts"},
    {name:"beverages"},
    {name:"snacks"},
    {name:"condiments & sauces"},
    {name:"oils & fats"},
    {name:"beverages"},
    {name:"snacks"},
    {name:"condiments & sauces"},
    {name:"oils & fats"},
]
export default function Categories() {
    const [catSelected,setCatSelected]=useState(2)
  return (
    <div className='bg-[#5551] rounded-lg p-4 mt-4 flex overflow-x-hidden '>
        {
            categories.map((category,i)=>{
                return(
                    <button onClick={()=>setCatSelected(i)} key={i} className={`px-4 py-2 ${i==catSelected?"bg-gray-900 text-white":"bg-white"} flex-shrink-0 rounded-lg ml-2`}>{category.name}</button>
                )
            })
        }
    </div>
  )
}
