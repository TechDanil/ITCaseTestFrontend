import { HStack, VStack, Text, Divider, Image } from "@chakra-ui/react";
import { useBasketList } from "../../model/useBasketList"
import { RemoveProduct } from "@/features/basket";

const BasketList = () => {
    const { basketItems, getProductById } = useBasketList()

    return (
        <VStack spacing={4} width="full">
            {basketItems.map((basketItem) => {
                const product = getProductById(basketItem.productId);
                const selectedColor = product?.colors.find(color => color.id === basketItem.colorId);
                const size = selectedColor?.sizes.find(sizeId => sizeId === basketItem.sizeId);
                const sizeLabel = size ? size : 'Unknown';

                const imageUrl = selectedColor?.images[0];

                return (
                    <VStack
                        key={`${basketItem.productId}-${basketItem.colorId}-${basketItem.sizeId}`}
                        align="start"
                        borderWidth="1px"
                        borderRadius="lg"
                        padding={4}
                        width="full"
                    >
                        <HStack justifyContent="space-between" width="full">
                            <HStack>
                                {imageUrl && (
                                    <Image
                                        boxSize="100px"
                                        objectFit="cover"
                                        src={imageUrl}
                                        alt={`${product?.name} - ${selectedColor?.name}`}
                                        borderRadius="md"
                                    />
                                )}
                                <VStack align="start">
                                    <Text fontWeight="bold">{product?.name}</Text>
                                    <Text>Цвет: {selectedColor?.name}</Text>
                                    <Text>Размер: {sizeLabel}</Text>
                                    <Text>Количество: {basketItem.quantity}</Text>
                                </VStack>
                            </HStack>

                            <RemoveProduct product={basketItem} />
                        </HStack>
                        <Divider />
                    </VStack>
                );
            })}
        </VStack>
    );
}

export default BasketList