"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

function Pagination({ pageCount }: { pageCount: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageClick = (e: { selected: number }) => {
    const page = e.selected + 1;
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set("page", page.toString());
    currentSearchParams.set("per_page", "8");
    router.push(`/products?${currentSearchParams.toString()}`);
  };

  return (
    <div className="flex justify-center mt-8">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex space-x-2 items-center"
        pageClassName="px-3 py-1 rounded-md"
        activeClassName="bg-blue-500 text-white"
        previousClassName="px-3 py-1 rounded-md bg-gray-200"
        nextClassName="px-3 py-1 rounded-md bg-gray-200"
        breakClassName="px-3 py-1"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
}

export default Pagination;