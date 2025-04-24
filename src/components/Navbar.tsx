import { allqtys } from "@/redux/CartSlice";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const selector = useSelector(allqtys);
  const [isOpen, setisOpen] = useState(false);

  return (
    <nav className="bg-gray-800 flex justify-between text-white items-center h-20 px-10">
      <h1 className="text-2xl font-black">logo</h1>
      <button onClick={() => setisOpen(!isOpen)} className="md:hidden p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-align-left-icon lucide-align-left"
        >
          <path d="M15 12H3" />
          <path d="M17 18H3" />
          <path d="M21 6H3" />
        </svg>
      </button>
      <ul
        className={`fixed md:static flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-8 bg-gray-800 md:bg-transparent p-4 w-full md:w-auto top-[80px] md:top-0 left-0 ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        <li className="">
          <Link href={"/"} className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/products"} className="hover:text-blue-500">
            Products
          </Link>
        </li>
        <li>
          <Link href={"/dashboard"} className="hover:text-blue-500">
            dashboard
          </Link>
        </li>
        <li>
          <Link href={"/login"} className="hover:text-blue-500">
            Login
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2" href={"/cart"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <span className="bg-blue-400 rounded-full px-2">{selector}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
