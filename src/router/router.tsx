import { createBrowserRouter } from 'react-router-dom';
import { JJKListPage, MainListPage, HxHListPage, DemonSlayerListPage } from '../modules/characters';
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
                element: <DemonSlayerListPage />
            },
            {
                path: PATHS["HxH"],
                element: <HxHListPage />
            }
        ] 
    }
]);