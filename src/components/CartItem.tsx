"use client"
import { useEffect, useState } from "react"
import AddToCart from "./AddToCart"
import { ServerTypes } from "@/servertypes/servertypes"
import axios from "axios"
import Image from "next/image"

interface Propos{
    id:number,
    qty:number
}

function CartItem({id}:Propos) {
    const [data, setdata] = useState<ServerTypes>()
    useEffect(() => {
      axios.get(`http://localhost:8000/products/${id}`).then(res => setdata(res.data))
    },[])
  return (
    <div className="flex flex-wrap justify-center md:justify-normal mt-28 space-x-5 rounded-md  mx-auto md:mx-0">
        <Image className="w-32  h-32 transition-transform hover:scale-110 rounded-md p-4 " src={data?.mainimg || "product image"} alt={data?.title || "product Image"} />
        <div className="flex flex-wrap flex-col space-y-2  shadow-2xl p-4 rounded-md">
        <h1 className="font-bold ">{data?.title}</h1>
        <h1 className="font-bold ">{data?.price}$</h1>
        <AddToCart id={id}/>
        </div>
    </div>
  )
}

export default CartItem