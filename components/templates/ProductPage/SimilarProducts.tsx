import { IProduct } from "@/app/types/product.interface";
import ProductItem from "@/components/ui/catalog/product-item/ProductItem";

interface ISimilarProducts {
  similarProducts: IProduct[];
}

export default function SimilarProducts({ similarProducts }: ISimilarProducts) {
  const getRandomProducts = (products: IProduct[], max: number) => {
    // Перемешиваем массив продуктов
    const shuffled = products.sort(() => 0.5 - Math.random());
    // Возвращаем максимум `max` продуктов
    return shuffled.slice(0, max);
  };

  const randomProducts = getRandomProducts(similarProducts, 3);

  return (
    <div>
      <h1 className="text-2xl">Возможно вам понравится:</h1>
      {randomProducts.length ? (
        <div className="flex-row gap-3">
          {randomProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div>Здесь нет продуктов</div>
      )}
    </div>
  );
}
