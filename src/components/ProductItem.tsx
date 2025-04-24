import { ServerTypes } from "@/servertypes/servertypes"

type props = ServerTypes

function ProductItem({mainimg, price, title}:props) {
  return (
    <div className='mb-14 rounded-lg transition-transform hover:scale-110 shadow-2xl shadow-gray-400 space-y-6'>
        <img className='w-72 h-72' src={mainimg}/>
        <div className='flex justify-between p-4'>
            <h1 className="font-bold text-xl">{title}</h1>
            <h1 className="text-blue-600 font-extrabold">{price}$</h1>
        </div>
    </div>
  )
}

export default ProductItem