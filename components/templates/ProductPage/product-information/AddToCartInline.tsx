import { IProduct } from "@/app/types/product.interface";
import { useActions } from "@/components/hocs/useActions";
import { useCart } from "@/components/hocs/useCart";
import ButtonCustom from "@/components/ui/button/ButtonCustom";
import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

interface AddToCartInlineProps {
    product: IProduct;
    alignRight?: boolean;
}

const AddToCartInline: FC<AddToCartInlineProps> = ({ product, alignRight = false }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 480);
        };
        
        // Проверяем при загрузке
        checkIsMobile();
        
        // Слушаем изменение размера экрана
        window.addEventListener('resize', checkIsMobile);
        
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    const { addToCart, removeFromCart, changeQuantity } = useActions();
    const { items } = useCart();

    const currentElement = items.find(
        cartItem => cartItem.product.id === product.id
    );

    return (
        <div className={`${isMobile ? 'w-full' : ''} ${alignRight ? 'flex justify-end' : ''}`}>
            {currentElement ? (
                <div className={`flex-row items-center  ${isMobile ? 'justify-center' : 'justify-between'}`}>
                    <ButtonCustom
                        className="btn__default btn__card product__item__card__button left h-mobile-card"
                        onClick={() => {
                            if (currentElement.quantity === 1) {
                                removeFromCart({ id: currentElement.id });
                            } else {
                                changeQuantity({
                                    id: currentElement.id,
                                    type: 'minus'
                                });
                            }
                        }}
                    >
                        <FiMinus fontSize={13} />
                    </ButtonCustom>
                    <span className={`text-white font-normal ${isMobile ? 'w-64 text-center h-mobile-card text-xs' : 'w-60 text-center h-full'} bg-background-button-card flex justify-center items-center`}>
                        {currentElement.quantity} x {product.price} ₽
                    </span>
                    <ButtonCustom
                        className="btn__default btn__card product__item__card__button right h-mobile-card"
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
                    className={`btn__default btn__card product__item__card__button ${isMobile ? 'w-full h-mobile-card' : ''}`}
                    onClick={() => 
                        addToCart({
                            product,
                            quantity: 1,
                            price: product.price,
                        })
                    }
                >
                    <div className={`flex-row items-center ${isMobile ? 'w-full justify-center' : 'w-20 justify-between '}`}>
                        <FaPlus />
                        <span className="text-white font-normal ml-2">{product.price} ₽</span>
                    </div>
                </ButtonCustom>
            )}
        </div>
    );
}

export default AddToCartInline