import Pagination from "@/components/paginate/Pagination";
import ProductItem from "@/components/ProductItem";
import Search from "@/components/Search";
import { Ipagination, ServerTypes } from "@/servertypes/servertypes";
import Link from "next/link";
import React from "react";

interface Ipromises {
  params: Promise<{}>;
  searchParams: Promise<{ page: string; per_page: string; serach: string }>;
}

async function Products({ searchParams }: Ipromises) {
  const page = (await searchParams).page ?? "1";
  const per_page = (await searchParams).per_page ?? "8";
  const serach = (await searchParams).serach ?? "";

  const data: Ipagination = await fetch(
    `http://localhost:8000/products?_page=${page}&_per_page=${per_page}&title=${serach}`
  ).then((res) => res.json());

  return (
    <div>
      <div className="flex justify-center mt-20">
        <Search />
      </div>
      <div className="flex flex-wrap justify-around gap-8 mt-16">
        {data.data.map((item) => (
          <Link href={`/products/productdetail/${item.id}`} key={item.id}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
      <div className="mt-3 mb-6 text-center">
        <Pagination pageCount={data.pages} />
      </div>
    </div>
  );
}

export default Products;
