import { ServerTypes } from "@/servertypes/servertypes";
import { productdata } from "@/services/Api";
import Link from "next/link";

interface categoryProps {
  params: Promise<{ category: string }>; 
}

async function Category({ params }: categoryProps) {
  const { category } = await params; 
  let product: ServerTypes[] = [];
  try {
    const allProducts = await productdata();
    product = allProducts.filter((p: ServerTypes) => p.category === category);
  } catch (error) {
    console.error(error);
    return <h1>soory we have prblem please try another time</h1>;
  }

  return (
    <div>
      <h1 className="text-center mt-20 text-3xl font-bold">{category}</h1>
      <div className="flex justify-around flex-wrap space-y-9 md:space-y-3 mt-20 mb-5">
        {product.length > 0 ? (
          product.map((item) => (
            <Link href={`/products/productdetail/${item.id}`} key={item.id}>
              <div
                className="space-y-8 hover:scale-110 shadow-2xl rounded-md"
                key={item.id}
              >
                <img
                  className="w-60 h-60 rounded-md"
                  src={item.mainimg}
                  alt={item.title}
                />
                <div className="flex justify-between p-3">
                  <h1 className="text-xl font-extrabold">{item.title}</h1>
                  <h1 className="font-mono text-blue-500 text-xl">
                    {item.price}$
                  </h1>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-7xl mt-20">empty</div>
        )}
      </div>
    </div>
  );
}

export default Category;