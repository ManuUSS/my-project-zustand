import { createBrowserRouter } from 'react-router-dom';
import { JJKListPage, MainListPage } from '../modules/characters';
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
            }
        ] 
    }
]);