import { Card, CardBody, Divider, HStack, Heading, Spinner, Stack, VStack, Text, Wrap, Box, Image, Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useShowProductDetails } from "../../model/useShowProductDetails";
import { AddProduct } from '@/features/basket';

const ShowProductDetails = () => {
    const { productId } = useParams<{ productId: string }>();

    const {
        product,
        onSizeSelected,
        onColorSelected,
        onViewScrollPrev,
        onViewScrollNext,
        currentViewPosition,
        selectedSize,
        selectedProductColor,
        selectedColor,
        getAvailableSizes
    } = useShowProductDetails(Number(productId));

    if (!product) {
        return <Spinner size='xl' />;
    }

    return (
        <Card
            variant='outline'
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
        >
            <CardBody
                maxW="400px"
            >
                <Stack spacing="4">
                    <Heading size="sm">
                        {product.name}
                    </Heading>

                    <VStack align="start" spacing={2}>
                            <Box>
                                <Image
                                    src={`${window.location.origin}/${selectedProductColor?.images[currentViewPosition]}`}
                                    alt={selectedProductColor?.name}
                                    borderRadius='lg'
                                    objectFit='cover'
                                    w='100%'
                                    h='200px'
                                />
                                <HStack justify="center" mt={4}>
                                    <Button onClick={onViewScrollPrev}>&lt; Предыдущее</Button>
                                    <Button onClick={onViewScrollNext}>Следующее &gt;</Button>
                                </HStack>
                            </Box>
                    </VStack>

                    <VStack align="start" spacing={2}>
                        <Heading size="sm">Цвета:</Heading>
                        <HStack spacing={3}>
                            {product.colors.map(color => (
                                <Button
                                    key={color.id}
                                    variant={selectedColor === color.id ? "solid" : "outline"}
                                    colorScheme="blue"
                                    onClick={() => onColorSelected(color.id)}
                                >
                                    {color.name}
                                </Button>
                            ))}
                        </HStack>
                    </VStack>

                    <VStack align="start" spacing={2} minH="40px">
                        {selectedProductColor && (
                            <Heading fontSize="md" minH="40px" noOfLines={2}>
                                {selectedProductColor.description}
                            </Heading>
                        )}
                    </VStack>

                    <VStack align="start" spacing={2}>
                        {selectedProductColor && (
                            <Text fontSize="lg" fontWeight="bold">
                                Цена: {selectedProductColor.price} ₽
                            </Text>
                        )}
                    </VStack>

                    {selectedProductColor && (
                        <VStack align="start" spacing={2}>
                            <Heading size="sm">Размеры:</Heading>
                            <Wrap spacing={10}>
                                {getAvailableSizes().map(size => (
                                    <Button
                                        key={size.id}
                                        variant={selectedSize === size.id ? "solid" : "outline"}
                                        colorScheme="blue"
                                        onClick={() => onSizeSelected(size.id)}
                                    >
                                        Размер {size.label}
                                    </Button>
                                ))}
                            </Wrap>
                        </VStack>
                    )}

                    <Divider />

                    <AddProduct
                        product={{
                            productId: product.id,
                            colorId: selectedProductColor?.id as number,
                            sizeId: selectedSize,
                            quantity: 1,
                        }}
                        isDisabled={!selectedColor || !selectedSize}
                    />
                </Stack>
            </CardBody>
        </Card>
    );
};

export default ShowProductDetails;
