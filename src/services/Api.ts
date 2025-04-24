import axios from "axios";


const client = axios.create({
    baseURL:"http://localhost:8000"
})

export async function categoryProducts(){
    const {data} = await client("/category")
    return data
} 

export async function productdata(){
    const {data} = await client("/products")
    return data
}
export async function productDataById(id:string){
    const {data} = await client(`/products/${id}`)
    return data
}