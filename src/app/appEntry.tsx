import ReactDOM from "react-dom/client";
import "@/shared/index.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";
import { ProductProvider } from "./providers/ProductProvider";
import { BasketProvider } from "./providers/BasketProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ProductProvider>
        <BasketProvider>
            <RouterProvider router={appRouter} />
        </BasketProvider>
    </ProductProvider>
);