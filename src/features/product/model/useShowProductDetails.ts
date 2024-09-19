import { useEffect, useState } from "react";

import { fetchProductById, fetchSizes } from "@/entities/product/model/api/productApi";
import { IProduct } from "@/shared/interfaces/product";
import { ISize } from "@/shared/interfaces/size";

export const useShowProductDetails = (productId: number) => {
    const [selectedSize, setSelectedSize] = useState<number>(1);
    const [selectedColor, setSelectedColor] = useState(1);
    const [product, setProduct] = useState<IProduct | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentViewPosition, setCurrentViewPosition] = useState<number>(0);
    const [sizes, setSizes] = useState<ISize[]>([])

    const selectedProductColor = product?.colors.find(color => color.id === selectedColor)

    useEffect(() => {
        setIsLoading(true)
        try {
           fetchProductById(productId).then(setProduct);
           fetchSizes().then(setSizes)
        } catch (err) {
            setIsLoading(false);
        } finally {
            setIsLoading(false)
        }
    }, [productId]);

    const onAddToCart = () => {
        if (selectedColor && selectedSize) {

        }
    }

    const onColorSelected = (colorId: number) => {
        setSelectedColor(colorId)
        setCurrentViewPosition(0)
    }

    const onSizeSelected = (sizeId: number) => {
        setSelectedSize(sizeId)
    }

    const onViewScrollNext = () => {
        if (selectedProductColor) {
            setCurrentViewPosition((prevIndex) =>
                prevIndex === selectedProductColor.images.length - 1 ? 0 : prevIndex + 1
            );
        }
    }

    const onViewScrollPrev = () => {
        if (selectedProductColor) {
            setCurrentViewPosition((prevIndex) =>
                prevIndex === selectedProductColor.images.length - 1 ? 0 : prevIndex + 1
            )
        }
    }

    const getAvailableSizes = () => {
        if (!selectedProductColor) return []

        return selectedProductColor.sizes.map((sizeId) =>
            sizes.find((size) => size.id === sizeId)
        ).filter(Boolean) as ISize[]
    }

    return {
        product,
        isLoading,
        selectedColor,
        selectedSize,
        selectedProductColor,
        currentViewPosition,
        sizes,
        getAvailableSizes,
        onAddToCart,
        onColorSelected,
        onSizeSelected,
        onViewScrollNext,
        onViewScrollPrev
    }
}