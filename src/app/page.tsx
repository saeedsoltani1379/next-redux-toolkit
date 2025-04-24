import { CategoryType } from '@/servertypes/servertypes'
import { categoryProducts } from '@/services/Api'
import Link from 'next/link'
import React from 'react'

async function Home() {
  let data:CategoryType[] = []
  try {
    data = await categoryProducts()
  } catch (error) {
    console.log(error,"we have eroor");
    return <h1 className='text-3xl text-center font-bold mt-60 '>sorry for problem  please try another time</h1>
    
  }
  return (
    <div className=' flex flex-wrap justify-around mt-60 mb-10 space-y-6'>
      {
        data.map((category) => (
          <div key={category.id} className='p-8 shadow-2xl shadow-black rounded-full hover:scale-105 '>
            <Link href={category.link}>
              <img src={category.img} className='w-64 h-64 rounded-full' alt={category.category}/> 
            <div className='text-center text-2xl'>{category.category}</div>
            </Link>
          </div>
          
        ))
      }
    </div>
  )
}

export default Home