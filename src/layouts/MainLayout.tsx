import { PropsWithChildren } from 'react';
import { Sidebar, Footer } from '../modules/shared/components';


export const MainLayout = ( { children }: PropsWithChildren ) => {
  return (
    <body>
        <Sidebar />
            <main
                className="float-right inline w-[calc(100%-16rem)] h-[calc(100%-77.53px)]"
            >
                { children }
            </main>
        <Footer />
    </body>
  )
}
