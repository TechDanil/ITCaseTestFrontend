import { basketApi } from "@/entities/basket";
import { IBasketItem } from "@/shared/interfaces/basket";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useEffect, useState } from "react"

interface IBasketContextType {
    basketItems: IBasketItem[]
    setBasketItems: Dispatch<SetStateAction<IBasketItem[]>>
}

export const BasketContext = createContext<IBasketContextType | undefined>(undefined)

export const BasketProvider = ({ children }: PropsWithChildren) => {
    const [basketItems, setBasketItems] = useState<IBasketItem[]>([]);

    useEffect(() => {
        basketApi.getBasket().then(setBasketItems)
    }, []);

    return (
        <BasketContext.Provider value={{ basketItems, setBasketItems }}>
            {children}
        </BasketContext.Provider>
    )
}