"use client"

import { loadCartFromStorage } from "@/redux/CartSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

function CartInitilizer() {
  const dispatch = useDispatch()
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems")
    if(savedCart){
        dispatch(loadCartFromStorage(JSON.parse(savedCart)))
    }
  },[dispatch])
  return null
}

export default CartInitilizer