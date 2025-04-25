import AddToCart from "@/components/AddToCart";
import { ServerTypes } from "@/servertypes/servertypes";
import { productDataById } from "@/services/Api";
import Image from "next/image";

async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!id) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl text-gray-600">
        !product not found 
      </div>
    );
  }

  let data: ServerTypes | null = null;
  try {
    data = await productDataById(id);
  } catch (error) {
    console.error("error in product detail data", error);
    return (
      <h1 className="flex items-center justify-center h-screen text-2xl text-red-500">
        sorry we have problem please try another time 
      </h1>
    );
  }

  return (
    <div className="mt-20 flex justify-around md:space-x-20 md:justify-normal flex-wrap">
      <div className="flex flex-col">
        <Image
          className="w-96 h-96 p-2 rounded-md"
          src={data?.mainimg || "product image"}
          alt={data?.title || "Product image"}
        />
        <div className="flex flex-wrap justify-around max-w-96 py-2 md:space-y-0 space-y-4">
          <Image
            className="w-28 h-32 rounded-md"
            src={data?.imgchild1 || "product image"}
            alt={data?.title ||"Product image 1"}
          />
          <img
            className="w-28 h-32 rounded-md"
            src={data?.imgchild2 || "product image"}
            alt={data?.title ||"Product image 1"}
          />
          <img
            className="w-28 h-32 rounded-md"
            src={data?.imgchild3 || "product image"} 
            alt={data?.title ||"Product image 1"}
          />
        </div>
      </div>
      <div className="md:mt-20 mt-6 md:mb-6 mb-18 md:space-y-14 max-w-1/2 space-y-8">
        <h1 className="text-3xl font-bold text-center">{data?.title}</h1>
        <h1 className="text-blue-700 font-mono text-xl">{data?.price}$</h1>
        <p>{data?.detail}</p>
        <div className="text-right">
          <AddToCart id={Number(id)} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
