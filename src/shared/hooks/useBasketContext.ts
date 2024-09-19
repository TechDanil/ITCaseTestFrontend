import { BasketContext } from "@/app/providers/BasketProvider";
import { useContext } from "react";

export const useBasketContext = () => {
    const context = useContext(BasketContext);
    if (!context) {
        throw new Error("useBasket must be used within a BasketProvider");
    }
    return context;
}