import { IProduct } from "@/app/types/product.interface";
import { useActions } from "@/components/hocs/useActions";
import { useCart } from "@/components/hocs/useCart";
import ButtonCustom from "@/components/ui/button/ButtonCustom";
import { FC } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

const AddToCartButton: FC<{ product: IProduct }> = ({ product }) => {
    const { addToCart, removeFromCart, changeQuantity } = useActions();
    const { items } = useCart();

    const currentElement = items.find(
        cartItem => cartItem.product.id === product.id
    );

    return (
        <div className="w-full">
            {currentElement ? (
                <div className="flex-row items-center justify-between">
                    <ButtonCustom
                        className="btn__default btn__card product__item__card__button left"
                        onClick={() => {
                            if (currentElement.quantity === 1) {
                                removeFromCart({ id: currentElement.id });
                            } else {
                                changeQuantity({
                                    id: currentElement.id,
                                    type: "minus",
                                });
                            }
                        }}
                    >
                        <FiMinus fontSize={13} />
                    </ButtonCustom>
                    <div className="w-52 bg-background-button-card h-12 justify-center mobile-btn">
                        <span className="text-white font-normal">
                            {currentElement.quantity} x {product.price} ₽
                        </span>
                    </div>
                    <ButtonCustom
                        className="btn__default btn__card product__item__card__button right"
                        onClick={() => {
                            if (currentElement.quantity < 50) {
                                changeQuantity({
                                    id: currentElement.id,
                                    type: "plus",
                                });
                            } else {
                                toast.error("Максимальное количество — 50");
                            }
                        }}
                        disabled={currentElement.quantity >= 51}
                    >
                        <FaPlus />
                    </ButtonCustom>
                </div>
            ) : (
                <ButtonCustom
                    className="btn__default btn__card product__item__card__button"
                    onClick={() =>
                        addToCart({
                            product,
                            quantity: 1,
                            price: product.price,
                        })
                    }
                >
                    <div className="flex-row items-center justify-center gap-2 w-full">
                        <FaPlus />
                        <span className="text-white font-normal">
                            {product.price} ₽
                        </span>
                    </div>
                </ButtonCustom>
            )}
        </div>
    );
};

export default AddToCartButton;
