import { IProduct } from "@/app/types/product.interface";
import { useActions } from "@/components/hocs/useActions";
import { useCart } from "@/components/hocs/useCart";
import { FC } from "react";
import { RiShoppingCartFill, RiShoppingCartLine } from "react-icons/ri";
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
            <Button className="btn__default product__item__card__button" onClick={() => 
                currentElement
                ? removeFromCart({ id: currentElement.id })
                : addToCart({
                    product,
                    quantity: 1,
                    price: product.price,
                })
            }>
                {currentElement ? <RiShoppingCartFill/> : <RiShoppingCartLine/>}
            </Button>
        </div>
    )
}

export default AddToCartButton