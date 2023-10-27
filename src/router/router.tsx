import { createBrowserRouter } from 'react-router-dom';
import { MainListPage } from '../modules/characters';
import { MainLayout } from '../layouts';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <MainListPage />
            }
        ] 
    }
]);