import { ProductPreview } from '@/entities/product'
import { useProductContext } from "@/shared/hooks/useProductContext";
import { List } from "@chakra-ui/react";

const ProductList = () => {
    const { products } = useProductContext()

    return (
        <List display="flex" alignItems="center" justifyContent="center" flexDirection={"column"} gap="30" flexWrap="wrap">
            {
                products.map(product => (
                    <ProductPreview key={product.id} product={product} />
                ))
            }
        </List>
    )
}

export default ProductList