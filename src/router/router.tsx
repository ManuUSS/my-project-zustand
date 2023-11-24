import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from './routes';
import { ErrorPage } from '../ErrorPage';
import { MainLayout } from '../layouts';
import { CharacterPage } from '../modules/characters';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                lazy: async () => { 
                    /* @vite-ignore */
                    const { MainListPage } = await import( '../modules/characters' ); 
                    return { Component: MainListPage }
                }
            },
            {
                path: PATHS["JJK"],
                lazy: async () => { 
                    /* @vite-ignore */
                    const { JJKListPage } = await import( '../modules/characters' ); 
                    return { Component: JJKListPage }
                }
            },
            {
                path: PATHS["DemonSlayer"],
                lazy: async () => { 
                    /* @vite-ignore */
                    const { DemonSlayerListPage } = await import( '../modules/characters' ); 
                    return { Component: DemonSlayerListPage }
                }
            },
            {
                path: PATHS["HxH"],
                lazy: async () => { 
                    /* @vite-ignore */
                    const { HxHListPage } = await import( '../modules/characters' ); 
                    return { Component: HxHListPage }
                }
            },
            {
                path: PATHS["Favorite"],
                lazy: async () => { 
                    /* @vite-ignore */
                    const { FavoriteListPage } = await import( '../modules/characters' ); 
                    return { Component: FavoriteListPage }
                }
            },
            {
                path: PATHS["New"],
                lazy: async () => { 
                    /* @vite-ignore */
                    const { NewCharacter } = await import( '../modules/characters' ); 
                    return { Component: NewCharacter }
                }
            },
            {
                path: PATHS["Edit"],
                lazy: async () => { 
                    /* @vite-ignore */
                    const { EditCharacter } = await import( '../modules/characters' ); 
                    return { Component: EditCharacter }
                }
            },
            {
                path: "/character/:id",
                element: <CharacterPage />
            }
        ] 
    }
]);