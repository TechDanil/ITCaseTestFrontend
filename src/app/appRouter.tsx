import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { ProductDetailPage } from "@/pages/productDetail";
import { MainPage } from "@/pages/main";
import { BasketPage } from "@/pages/basket";

export const appRouter = createBrowserRouter([
    {
        element: <BaseLayout />,
        errorElement: <div>Error</div>,
        children: [
            { path: "/", element: <MainPage /> },
            { path: "/product/:productId", element: <ProductDetailPage /> },
            { path: "/basket", element: <BasketPage /> },
        ],
    }
])