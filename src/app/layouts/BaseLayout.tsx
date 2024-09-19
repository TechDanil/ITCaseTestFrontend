import { Header } from '@/widgets/header';
import { Container } from '@chakra-ui/react'
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
    return (
        <>
            <Header />
            <Container maxW='md'>
                <Outlet></Outlet>
            </Container>
        </>
    )
}

export default BaseLayout