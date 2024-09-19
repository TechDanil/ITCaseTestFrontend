import { IProduct } from "@/shared/interfaces/product.ts";
import { productApi } from "@/shared/api/api.ts";
import { ISize } from "@/shared/interfaces/size";

export const fetchProducts = async (): Promise<IProduct[]> => {
    return await productApi.getProducts();
}

export const fetchProductById = async (productId: number): Promise<IProduct> => {
    return await productApi.getProduct(productId);
}

export const fetchSize = async (sizeId: number): Promise<ISize> => {
    return await productApi.getSize(sizeId)
}

export const fetchSizes = async (): Promise<ISize[]> => {
    return await productApi.getSizes()
}