"use client"
import React from 'react'
import FeedCard from "../global/FeedCard"
import StoreCard from './StoreCard'
import { useSelector } from 'react-redux';
import { Store } from '@/types/storeType';
import { useStores } from '@/app/store';




export default function Feed() {
    const {stores}  = useStores()
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
      {
        stores.map((store,id)=>{
          return(
            <StoreCard store={store}/>
          )
        })
      }
    </div>
  )
}
