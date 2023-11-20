import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from './routes';
import { ErrorPage } from '../ErrorPage';
import { MainLayout } from '../layouts';

const url_views = '../modules/characters';

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
                    const { MainListPage } = await import( url_views ); 
                    return { Component: MainListPage }
                }
            },
            {
                path: PATHS["JJK"],
                lazy: async () => { 
                    /* @vite-ignore */
                    const { JJKListPage } = await import( url_views ); 
                    return { Component: JJKListPage }
                }
            },
            {
                path: PATHS["DemonSlayer"],
                lazy: async () => { 
                    /* @vite-ignore */
                    const { DemonSlayerListPage } = await import( url_views ); 
                    return { Component: DemonSlayerListPage }
                }
            },
            {
                path: PATHS["HxH"],
                lazy: async () => { 
                    /* @vite-ignore */
                    const { HxHListPage } = await import( url_views ); 
                    return { Component: HxHListPage }
                }
            },
            {
                path: PATHS["Favorite"],
                lazy: async () => { 
                    /* @vite-ignore */
                    const { FavoriteListPage } = await import( url_views ); 
                    return { Component: FavoriteListPage }
                }
            },
            {
                path: PATHS["New"],
                lazy: async () => { 
                    /* @vite-ignore */
                    const { NewCharacter } = await import( url_views ); 
                    return { Component: NewCharacter }
                }
            },
            {
                path: PATHS["Edit"],
                lazy: async () => { 
                    /* @vite-ignore */
                    const { FavoriteListPage } = await import( url_views ); 
                    return { Component: FavoriteListPage }
                }
            },
            {
                path: "/character/:id",
                lazy: async () => { 
                    /* @vite-ignore */
                    const { CharacterPage } = await import( url_views ); 
                    return { Component: CharacterPage }
                }
            }
        ] 
    }
]);