import { useBasket } from "@/entities/basket";
import { Button } from "@chakra-ui/react";
import { IAddProductProps } from "../../model/types";

const AddProduct = ({ isDisabled, product }: IAddProductProps) => {
    const { addToBasket  } = useBasket()

    const onAddToBasket= () => {
        product && addToBasket(product)
    }

    return (
        <Button
            colorScheme="blue"
            onClick={onAddToBasket}
            isDisabled={isDisabled}
            width="full"
        >
            Добавить в корзину
        </Button>
    )
}

export default AddProduct;