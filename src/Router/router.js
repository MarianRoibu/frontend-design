import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import ArticlePage from "../ArticlePage/ArticlePage";
import HomePage from "../HomePage/HomePage";

const router = createBrowserRouter( [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/main',
        element: <MainPage />
    },
    {
        path: '/article/:id',
        element: <ArticlePage />
    }

] );

export default function Router()
{
    return <RouterProvider router={router} />;
}