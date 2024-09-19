import { useBasket } from "@/entities/basket"
import { useBasketContext } from "@/shared/hooks/useBasketContext"
import { useProductContext } from "@/shared/hooks/useProductContext"

export const useBasketList = () => {
    const { products } = useProductContext()
    const { removeFromBasket } = useBasket()
    const { basketItems } = useBasketContext()

    const getProductById = (productId: number) => {
        return products.find(product => product.id === productId);
    };

    return {
        basketItems,
        getProductById,
        removeFromBasket
    }
 }


