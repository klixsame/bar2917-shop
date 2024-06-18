import { IProduct } from "@/app/types/product.interface";
import { FC } from "react";
import ProductItem from "./product-item/ProductItem";

interface ICatalog {
    products: IProduct[]
}

const Catalog: FC<ICatalog> = ({ products = [] }) => {
    return (
        <section>
            <div className="flex-row flex-wrap gap-3.5">
                {products.length ? (
                    products.map(product => <ProductItem key={product.id} product={product} />)
                ) : (
                    <div>Здесь нет продуктов</div>
                )}
            </div>
        </section>
    )
}

export default Catalog;
