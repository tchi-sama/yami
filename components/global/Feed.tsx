"use client"
import React, { useMemo } from 'react'
import FeedCard from "../global/FeedCard"
import StoreCard from './StoreCard'
import { useSelector } from 'react-redux';
import { Store } from '@/types/storeType';
import { useStores } from '@/app/store';
import axios from "axios"


export default function Feed() {
    const {stores,setStore}  = useStores()
    useMemo(() => {
        const getData = async ()=>{
            try {
                const response = await axios.post("http://localhost:8080/get-stores")
                console.log(response.data)
                setStore(response.data.data)
            }catch(err){
                console.log(err)
            }
        }
        getData()
    }, [])
    
  return (
    <div className='py-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
      {
        stores.map((store,id)=>{
          return(
            <StoreCard key={id} store={store}/>
          )
        })
      }
    </div>
  )
}
