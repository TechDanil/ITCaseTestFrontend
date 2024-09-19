import { fetchProducts } from "@/entities/product/model/api/productApi";
import { IProduct } from "@/shared/interfaces/product";
import { ReactNode, createContext, useEffect, useState } from "react";

interface IProductContextType {
    products: IProduct[]
}

export const ProductContext = createContext<IProductContextType | undefined>(undefined)

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        fetchProducts().then(setProducts)
    }, []);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}
