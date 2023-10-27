import { createBrowserRouter } from 'react-router-dom';
import { JJKListPage, MainListPage, HxHListPage } from '../modules/characters';
import { MainLayout } from '../layouts';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <MainListPage />
            },
            {
                path: "/jjk",
                element: <JJKListPage />
            },
            {
                path: "/demon-slayer",
                element: <JJKListPage />
            },
            {
                path: "/hxh",
                element: <HxHListPage />
            }
        ] 
    }
]);