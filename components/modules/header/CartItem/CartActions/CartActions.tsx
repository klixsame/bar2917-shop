import { ICartItem } from "@/app/types/cart.interface";
import { useActions } from "@/components/hocs/useActions";
import { useCart } from "@/components/hocs/useCart";
import { FC } from "react";
import { FiMinus, FiPlus, FiTrash } from "react-icons/fi";

const CartActions: FC<{item: ICartItem }> = ({item}) => {
    const { removeFromCart, changeQuantity } = useActions()

    const { items } = useCart()
    const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity 

    return (
        <div>
            <div className="items-center gap-1 flex-row p-2 rounded-lg bg-card-border">
                <button
                onClick={() => changeQuantity({ id: item.id,
                type: 'minus'})}
                disabled={quantity === 1}
                >
                    <FiMinus font-size={13}/>
                </button>

                <input 
                disabled
                readOnly
                value={quantity}
                className="w-10 bg-transparent text-center" 
                />

                <button
                onClick={() => changeQuantity({ id: item.id,
                type: 'plus'})}
                disabled={quantity === 10}
                >
                    <FiPlus font-size={13}/>
                </button>
                
            </div>
            <div className="trash-btn flex-row justify-end mt-5 mr-1">
                <button
                        onClick={() => removeFromCart({ id: item.id})}
                        className=" text-white"
                        >
                        <FiTrash />
                </button>
            </div>
        </div>
    )
}

export default CartActions