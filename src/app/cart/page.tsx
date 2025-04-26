"use client";
import CartItem from "@/components/CartItem";
import { RootState } from "@/redux/store";
import { discountType, ServerTypes } from "@/servertypes/servertypes";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Cart() {
  const selector = useSelector((state: RootState) => state.cart.item);
  const [priceOne, setPriceOne] = useState<ServerTypes[]>();
  const [discount, setDiscount] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [payablePrice, setPayablePrice] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => setPriceOne(res.data));
  }, []);

  const basePrice = selector.reduce((total, item) => {
    const price = priceOne?.find((p) => p.id === item.id.toString());
    return total + (price?.price || 0) * item.qty;
  }, 0);

  const handleDiscountPrice = () => {
    if (!discount.trim()) {
      setDiscountedPrice(0);
      setPayablePrice(basePrice);
      return;
    }

    axios
      .get(`http://localhost:8000/discount?code=${discount}`)
      .then((res) => {
        const discountData = res.data as discountType[];
        if (discountData.length > 0 && discountData[0].percentage > 0) {
          const discountAmount = (basePrice * discountData[0].percentage) / 100;
          setDiscountedPrice(discountAmount);
          setPayablePrice(basePrice - discountAmount);
        } else {
          setDiscountedPrice(0);
          setPayablePrice(basePrice);
        }
      })
      .catch(() => {
        setDiscountedPrice(0);
        setPayablePrice(basePrice);
      });
  };

  return selector.length === 0 ? (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-xl font-semibold text-gray-600">
        Your cart is empty
      </h2>
      <Link
        href="/products"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Shop Now
      </Link>
    </div>
  ) : (
    <div>
      {selector.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className="bg-gray-200 p-6 mt-20 mb-10 rounded-md space-y-8 md:space-y-4">
        <div className="flex flex-wrap space-x-3">
          <input
            onChange={(e) => setDiscount(e.target.value)}
            className="border w-64 p-2 rounded-md text-center text-black"
            type="text"
            placeholder="discount code"
          />
          <button
            onClick={handleDiscountPrice}
            className="bg-green-600 px-4 py-2 rounded-md md:mx-0 mx-auto mt-2 md:m-0"
          >
            confirm
          </button>
        </div>
        <h1 className="text-xl font-extrabold">
          basePrice: <span className="text-blue-600">{basePrice}$</span>
        </h1>
        <h1 className="text-xl font-extrabold">
          discountedPrice:{" "}
          <span className="text-green-600">{discountedPrice}$</span>
        </h1>
        <h1 className="text-xl font-extrabold">
          payablePrice: <span className="text-red-600">{payablePrice}$</span>
        </h1>
        <div className="text-center">
          <button className="bg-green-600 text-white px-8 py-2 rounded-lg text-xl">
            Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
