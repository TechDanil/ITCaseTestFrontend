import { IBasketItem } from "@/shared/interfaces/basket";

let basket: IBasketItem[] = [];

export const basketApi = {
    getBasket: (): Promise<IBasketItem[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(basket), 250);
        });
    },

    addToBasket: (productId: number, colorId: number, sizeId: number, quantity: number): Promise<void> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingItem = basket.find(
                    (item) =>
                        item.productId === productId &&
                        item.colorId === colorId &&
                        item.sizeId === sizeId
                );

                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    basket.push({ productId, colorId, sizeId, quantity });
                }
                resolve();
            }, 250);
        });
    },

    removeFromBasket: (productId: number, colorId: number, sizeId: number): Promise<void> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                basket = basket.filter(
                    (item) =>
                        !(item.productId === productId && item.colorId === colorId && item.sizeId === sizeId)
                );
                resolve();
            }, 250);
        });
    },

    updateQuantity: (productId: number, colorId: number, sizeId: number, quantity: number): Promise<void> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const item = basket.find(
                    (basketItem) =>
                        basketItem.productId === productId &&
                        basketItem.colorId === colorId &&
                        basketItem.sizeId === sizeId
                );

                if (item) {
                    item.quantity = quantity;
                    resolve();
                } else {
                    reject(new Error("updateQuantity: Item not found in basket"));
                }
            }, 250);
        });
    },

    clearBasket: (): Promise<void> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                basket = [];
                resolve();
            }, 250);
        });
    },
};
