import { useBasketContext } from "@/shared/hooks/useBasketContext"
import { IBasketItem } from "@/shared/interfaces/basket"

export const useBasket = () => {
    const { setBasketItems } = useBasketContext()

    const removeFromBasket = (item: IBasketItem) => {
        setBasketItems((prev) => {
            const existingItem = prev.find(
                (i) => i.productId === item.productId &&
                    i.sizeId === item.sizeId &&
                    i.colorId === item.colorId
            );

            if (existingItem) {
                const updatedQuantity = existingItem.quantity - 1;

                if (updatedQuantity <= 0) {
                    return prev.filter(i => i !== existingItem);
                }

                return prev.map((i) =>
                    i === existingItem ? { ...i, quantity: updatedQuantity } : i
                );
            }

            return prev;
        });
    };

    const addToBasket  = (item: IBasketItem) => {
        setBasketItems((prev) => {
            const existingItem = prev.find(
                (i) => i.productId === item.productId &&
                    i.sizeId === item.sizeId &&
                    i.colorId === item.colorId
            );

            if (existingItem) {
                return prev.map((i) =>
                    i === existingItem ? { ...i, quantity: i.quantity + 1 } : i
                );
            }

            return [...prev, item];
        });
    }

    return {
        removeFromBasket,
        addToBasket ,
    }
}