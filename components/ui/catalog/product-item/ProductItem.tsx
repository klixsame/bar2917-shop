import { FolderNameForImage } from "@/app/constants/app.constants"
import { IProduct } from "@/app/types/product.interface"
import Image from "next/image"
import { FC } from "react"
import AddToCartButton from "./AddToCartButton"

const SERVER_URL_FOR_IMAGE = process.env.SERVER_URL_IMAGE as string

const ProductItem: FC<{product: IProduct}> = ({product}) => {
    const imageUrl = `${SERVER_URL_FOR_IMAGE}/${FolderNameForImage}/${product.image}`
    return (
        <div className="product__item__card">
            <div className="product__item__card__image">
                <Image width={260} height={160} src={imageUrl} alt={product.name} />
            </div>
            <div className="product__item__card__up__row">
                <h3>{product.name}</h3>
                <span>{product.weight} г</span>
            </div>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <div className="product__item__card__row__button">
                <AddToCartButton product={product}/>
            </div>
        </div>
    )
}

export default ProductItem