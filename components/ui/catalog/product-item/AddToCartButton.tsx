import { IProduct } from "@/app/types/product.interface";
import { useActions } from "@/components/hocs/useActions";
import { useCart } from "@/components/hocs/useCart";
import { FC } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Button from "../../button/Button";

const AddToCartButton: FC<{ product: IProduct}> = ({
product }) => {
    // const { user } = useAuth()
    // if(!user) return toast('Сначала авторизуйтесь')

    const { addToCart, removeFromCart } = useActions()
    const { items } = useCart()

    const currentElement = items.find(
        cartItem => cartItem.product.id === product.id
    )

    return (
        <div>
            <Button className="btn__default btn__card product__item__card__button" onClick={() => 
                currentElement
                ? removeFromCart({ id: currentElement.id })
                : addToCart({
                    product,
                    quantity: 1,
                    price: product.price,
                })
            }>
                {currentElement ? (
                    <div className="flex-row items-center w-32 justify-between">
                        <FaMinus />
                        <span className="text-white font-normal">{product.price} ₽</span>
                        <FaPlus />
                    </div>
                ) : (
                    <div className="flex-row items-center w-16 justify-between">
                        <FaPlus />
                        <span className="text-white font-normal">{product.price} ₽</span>
                    </div>)}
            </Button>
        </div>
    )
}

export default AddToCartButton