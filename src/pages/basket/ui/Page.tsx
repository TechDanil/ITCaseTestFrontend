import { BasketList } from "@/widgets/basket";
import { Heading, VStack } from "@chakra-ui/react";

const BasketPage = () => {
    return (
        <VStack spacing={4} align="start" width="full">
            <Heading>Корзина</Heading>
            <BasketList/>
        </VStack>
    )
}

export default BasketPage;