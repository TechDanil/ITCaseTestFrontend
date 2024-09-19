import { useBasket } from "@/entities/basket"
import { Button } from "@chakra-ui/react"
import { IRemoveProductProps } from "../../model/types"

const RemoveProduct = ({ product }: IRemoveProductProps) => {
    const { removeFromBasket  } = useBasket()

    const onRemoveFromBasket= () => {
        product && removeFromBasket(product)
    }

    return (
        <Button
            colorScheme="blue"
            onClick={onRemoveFromBasket}
            width="full"
        >
            Удалить
        </Button>
    )
}

export default RemoveProduct;