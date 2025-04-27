import MainPage from "@/components/templates/MainPage/MainPage";
import { LocationService } from "./services/location.service";

export const revalidate = 60;

async function getProducts() {
  try {
    const { products } = await LocationService.getLocationWithProducts();
    return {
      products,
      length: products.length
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      products: [],
      length: 0
    };
  }
}

export default async function Home() {
  const data = await getProducts();
  return <MainPage products={data.products} length={data.length} />;
}