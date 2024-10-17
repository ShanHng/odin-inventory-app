import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import "./index.css";
import AllItemsPage from "./pages/AllItemsPage.jsx";
import ItemsByCategoryPage from "./pages/ItemsByCategoryPage.jsx";
import PageHeader from "./components/PageHeader.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
	{
		path: "items",
		element: <AllItemsPage />,
        errorElement: <ErrorPage />,
	},
    {
        path: "categories",
        element: <ItemsByCategoryPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "categories/:id",
        element: <><PageHeader title='Coming soon'/></>,
    }
	
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
