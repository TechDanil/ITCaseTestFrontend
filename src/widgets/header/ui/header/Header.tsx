import {Box, Flex, Heading, IconButton, Spacer } from "@chakra-ui/react"
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Box
            as="header"
            width="100%"
            bg="blue.500"
            p={4}
            color="white"
            boxShadow="sm"
        >
            <Flex align="center" maxWidth="1200px" justifyContent={'space-between'} mx="auto">
                <Heading as="h1" size="lg">
                    <Link to="/">Мой Магазин</Link>
                </Heading>

                <Spacer />

                <IconButton
                    as={Link}
                    to="/basket"
                    icon={<FaShoppingCart />}
                    variant="outline"
                    colorScheme="whiteAlpha"
                    aria-label="Корзина"
                    position="relative"
                >
                </IconButton>
            </Flex>
        </Box>
    )
}

export default Header