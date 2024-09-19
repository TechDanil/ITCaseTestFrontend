import { IBasketItem } from "@/shared/interfaces/basket";

export interface IBasketAddItem extends IBasketItem {}

export interface IBaketRemoveItem {
    productId: number
    colorId: number
    sizeId: number
}

export interface IBasketUpdateItem {
    productId: number
    colorId: number
    sizeId: number
    quantity: number
}