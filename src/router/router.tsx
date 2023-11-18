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
                    const { MainListPage } = await import( url_views ); 
                    return { Component: MainListPage }
                }
            },
            {
                path: PATHS["JJK"],
                lazy: async () => { 
                    const { JJKListPage } = await import( url_views ); 
                    return { Component: JJKListPage }
                }
            },
            {
                path: PATHS["DemonSlayer"],
                lazy: async () => { 
                    const { DemonSlayerListPage } = await import( url_views ); 
                    return { Component: DemonSlayerListPage }
                }
            },
            {
                path: PATHS["HxH"],
                lazy: async () => { 
                    const { HxHListPage } = await import( url_views ); 
                    return { Component: HxHListPage }
                }
            },
            {
                path: PATHS["Favorite"],
                lazy: async () => { 
                    const { FavoriteListPage } = await import( url_views ); 
                    return { Component: FavoriteListPage }
                }
            },
            {
                path: PATHS["New"],
                lazy: async () => { 
                    const { NewCharacter } = await import( url_views ); 
                    return { Component: NewCharacter }
                }
            },
            {
                path: PATHS["Edit"],
                lazy: async () => { 
                    const { FavoriteListPage } = await import( url_views ); 
                    return { Component: FavoriteListPage }
                }
            },
            {
                path: "/character/:id",
                lazy: async () => { 
                    const { EditCharacter } = await import( url_views ); 
                    return { Component: EditCharacter }
                }
            }
        ] 
    }
]);