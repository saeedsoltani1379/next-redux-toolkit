"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

function Search() {
    const [stateSearch, setstateSearch] = useState("")
    const router = useRouter()
    const serachParams = useSearchParams()
    const handleSerach = () => {
        const currentSearchParams = new URLSearchParams(serachParams.toString())
        currentSearchParams.set("serach",stateSearch.toString())
        router.push(`/products?${currentSearchParams.toString()}`)
    }
  return (
    <div className="flex flex-wrap space-y-3 md:space-y-0 justify-center md:justify-normal space-x-4">
        <input onChange={(e) => setstateSearch(e.target.value)} className="border rounded-md w-72 text-center py-2" type="text" placeholder="serach title" />
        <button onClick={handleSerach} className="bg-blue-700 px-4 py-1 rounded-md text-white">confirm</button>
    </div>
  )
}

export default Search