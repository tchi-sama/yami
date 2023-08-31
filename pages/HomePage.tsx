import Feed from '@/components/global/Feed'
import Navbar from '@/components/global/Navbar'
import Categories from '@/components/global/categories'
import React from 'react'

export default function HomePage() {
  return (
    <div className='bg-gray-100 pt-32 min-h-screen'>
        <Navbar/>
        <div className='container '>
            <h1 className='text-5xl text-gray-700 font-bold'>Categories</h1>
            <Categories/>
            <Feed/>
        </div>
    </div>
  )
}
