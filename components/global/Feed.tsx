import React from 'react'
import FeedCard from "../global/FeedCard"
import StoreCard from './StoreCard'
export default function Feed() {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
        <StoreCard/>
        <StoreCard/>
        <StoreCard/>
        <StoreCard/>
        <StoreCard/>
        <StoreCard/>
        <StoreCard/>
        <StoreCard/>
        <StoreCard/>
        <StoreCard/>
    </div>
  )
}
