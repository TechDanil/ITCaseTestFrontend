import { IBasketItem } from "@/shared/interfaces/basket"

export interface IAddProductProps {
    product: IBasketItem
    isDisabled: boolean
}

export interface IRemoveProductProps {
    product: IBasketItem
}