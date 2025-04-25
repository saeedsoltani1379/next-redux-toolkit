"use client";

import axios from "axios";
import { useState } from "react";

function Dashboard() {
  const [createProduct, setCreateProduct] = useState({
    img: "",
    title: "",
    price: "",
    detail: "",
    category: "",
  });
  const [message, setMessage] = useState(""); 
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCreateProduct({
      ...createProduct,
      [name]: value,
    });
  };

  const submitCreateProduct = async () => {
    try {
      await axios.post("http://localhost:8000/products", {
        id: Math.floor(Math.random() * 100).toString(),
        img: createProduct.img,
        title: createProduct.title,
        price: createProduct.price,
        detail: createProduct.detail,
        category: createProduct.category,
      });
      setMessage("Product created!"); 
      setCreateProduct({
        img: "",
        title: "",
        price: "",
        detail: "",
        category: "",
      });
    } catch (error) {
      setMessage("Error creating product!"); 
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8 mt-20 mb-14">
      {message && (
        <p
          className={`mb-4 text-lg ${
            message.includes("Error") ? "text-red-500" : "text-green-500"
          }`}
        >
          {message}
        </p>
      )}
      <input
        onChange={handleOnChange}
        className="border p-4 rounded-md text-center w-72"
        type="text"
        placeholder="Image link"
        name="img"
        value={createProduct.img}
      />
      <input
        onChange={handleOnChange}
        className="border p-4 rounded-md text-center w-72"
        type="text"
        placeholder="Title"
        name="title"
        value={createProduct.title}
      />
      <input
        onChange={handleOnChange}
        className="border p-4 rounded-md text-center w-72"
        type="text"
        placeholder="Price"
        name="price"
        value={createProduct.price}
      />
      <input
        onChange={handleOnChange}
        className="border p-4 rounded-md text-center w-72"
        type="text"
        placeholder="Category"
        name="category"
        value={createProduct.category}
      />
      <textarea
        onChange={handleOnChange}
        className="border p-4 rounded-md text-center w-72 h-64"
        placeholder="Detail"
        name="detail"
        value={createProduct.detail}
      />
      <button
        onClick={submitCreateProduct}
        className="bg-green-800 p-6 rounded-lg text-white font-bold text-2xl"
      >
        Create
      </button>
    </div>
  );
}

export default Dashboard;