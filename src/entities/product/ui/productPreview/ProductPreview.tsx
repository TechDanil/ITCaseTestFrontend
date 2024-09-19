import {Link} from "react-router-dom"
import {IProductPreviewProps} from "../../model/types"
import {Box, Card, CardBody, Heading, Image, Stack} from "@chakra-ui/react"

const ProductPreview = ({ product }: IProductPreviewProps) => {

    return (
        <Link to={`/product/${product.id}`}>
            <Box display="flex" cursor={"pointer"} alignItems="center" justifyContent="center"  gap={"20px"}>
                <Card
                    maxW='sm'
                    borderWidth='1px'
                    borderRadius='lg'
                    boxShadow='lg'
                    overflow='hidden'
                    _hover={{boxShadow: 'xl', transform: 'scale(1.02)', transition: '0.2s'}}
                >
                    <CardBody>
                        <Box position="relative">
                            <Image
                                src={product.colors[0].images[0]}
                                alt={product.colors[0].name}
                                borderRadius='lg'
                                objectFit='cover'
                                w='100%'
                                h='200px'
                            />
                        </Box>
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='gray.700'>{product.name}</Heading>
                        </Stack>
                    </CardBody>
                </Card>
            </Box>
        </Link>
    )
}

export default ProductPreview