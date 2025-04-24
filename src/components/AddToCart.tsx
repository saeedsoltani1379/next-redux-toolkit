"use client";
import { decreaseQty, incraeseQty, removeqty } from "@/redux/CartSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

function AddToCart({ id }: { id: number }) {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state.cart.item);
  const qtyfind = selector.find((item) => item.id === id);
  const qty = qtyfind ? qtyfind.qty : 0;

  return (
    <div className="flex flex-wrap justify-end w-full">
      {qty === 0 ? (
        <button
          onClick={() => dispatch(incraeseQty({ id }))}
          className="bg-blue-800 px-4 py-2 rounded-md text-white w-full sm:w-auto"
        >
          add to cart
        </button>
      ) : (
        <div className="flex flex-col sm:flex-row sm:space-x-5 space-y-4 sm:space-y-0 items-center w-full sm:w-auto">
          <button
            onClick={() => dispatch(decreaseQty({ id }))}
            className="bg-red-500 px-4 py-1 rounded-md text-white w-full sm:w-auto"
          >
            -
          </button>
          <span>{qty}</span>
          <button
            onClick={() => dispatch(incraeseQty({ id }))}
            className="bg-blue-800 px-4 py-1 rounded-md text-white w-full sm:w-auto"
          >
            +
          </button>
          <button
            onClick={() => dispatch(removeqty({ id }))}
            className="bg-red-700 px-4 py-1 rounded-md text-white w-full sm:w-auto"
          >
            remove
          </button>
        </div>
      )}
    </div>
  );
}

export default AddToCart;