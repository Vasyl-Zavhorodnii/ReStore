
import ContactPage  from "../../features/contact/ContactPage";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";
import ServerError from "../api/errors/ServerError";
import NotFoundError from "../api/errors/NotFound";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children:[
            { path: '', element: <HomePage /> },
            { path: 'catalog', element: <Catalog /> },
            { path: 'catalog/:id', element: <ProductDetails /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'contact', element: <ContactPage /> },
            { path: 'server-error', element: <ServerError/> },
            { path: 'not-found', element: <NotFoundError/> },
            { path: '*', element: <Navigate replace to = 'not found'/> }
        ]
}

])