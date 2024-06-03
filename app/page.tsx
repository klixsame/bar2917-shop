import MainPage from "@/components/templates/MainPage/MainPage";
import { ProductService } from "./services/product/product.service";


export const revalidate = 60
async function getProducts() {
  const data = await ProductService.getAll()
  return data
}

export default async function Home() {
  const data = await getProducts()

  return <MainPage products={data.products} length={data.length}/>;
}