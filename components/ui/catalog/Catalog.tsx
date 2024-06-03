import { IProduct } from "@/app/types/product.interface";
import { FC } from "react";
import ProductItem from "./product-item/ProductItem";
import Loader from "../Loader";

const Catalog: FC<{products: IProduct[], isLoading?: boolean}> = ({products, isLoading}) => {
    
    if(isLoading) return <Loader />

    return (
        <section>
            { products.length ?
            products.map(product => <ProductItem key={product.id} product={product} />) : <div>Здесь нет продуктов</div>
            }
        </section>
    )
}

export default Catalog;