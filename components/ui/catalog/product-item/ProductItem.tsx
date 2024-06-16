import { FolderNameForImage } from "@/app/constants/app.constants"
import { IProduct } from "@/app/types/product.interface"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import AddToCartButton from "./AddToCartButton"

const SERVER_URL_FOR_IMAGE = process.env.SERVER_URL_IMAGE as string

const ProductItem: FC<{product: IProduct}> = ({product}) => {
    const imageUrl = `${SERVER_URL_FOR_IMAGE}/${FolderNameForImage}/${product.image}`
    return (
        <div className="bg-background-card card__template border-1 border-card-border rounded-lg animate-scaleIn">
            <Link href={`/product/${product.slug}`}>
                <div className="product__item__card__image">
                        <Image width={262} height={180} src={imageUrl} alt={product.name} className="card__img rounded-lg"/>
                </div>
            </Link>
                <div className="flex-row justify-between mt-3.5 ">
                    <div className="w-60">
                        <Link href={`/product/${product.slug}`}>
                        <h3 className="">{product.name}</h3>
                        </Link>
                    </div>
                    <div className="w-12">
                        <span className="card__weight font-normal">{product.weight} г</span>
                    </div>
                </div>
                <div className="h-64">
                <p className=" mt-2 leading-4 line-clamp-3">{product.description}</p>
                </div>
            {/* <p>{product.price}</p> */}
            <div className="product__item__card__row__button">
                <AddToCartButton product={product}></AddToCartButton>
            </div>
        </div>
    )
}

export default ProductItem