import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from './routes';
import { JJKListPage, MainListPage, HxHListPage, DemonSlayerListPage, NewCharacter, CharacterPage } from '../modules/characters';
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
            },
            {
                path: PATHS["New"],
                element: <NewCharacter />
            },
            {
                path: "/character/:id",
                element: <CharacterPage />
            }
        ] 
    }
]);