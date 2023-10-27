import { createBrowserRouter } from 'react-router-dom';
import { JJKListPage, MainListPage, HxHListPage } from '../modules/characters';
import { MainLayout } from '../layouts';
import { PATHS } from './routes';


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
                path: PATHS["JJK"],
                element: <JJKListPage />
            },
            {
                path: PATHS["DemonSlayer"],
                element: <JJKListPage />
            },
            {
                path: PATHS["HxH"],
                element: <HxHListPage />
            }
        ] 
    }
]);