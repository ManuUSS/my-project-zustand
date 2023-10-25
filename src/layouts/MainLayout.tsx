import { PropsWithChildren } from 'react';
import { Sidebar, Footer } from '../modules/shared/components';


export const MainLayout = ( { children }: PropsWithChildren ) => {
  return (
    <body>
        <Sidebar />
            <main>
                { children }
            </main>
        <Footer />
    </body>
  )
}
