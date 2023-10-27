import { Outlet } from 'react-router-dom';
import { Sidebar, Footer, ModeButton } from '../modules/shared/components';
import { usethemeStore } from '../plugins/ModeProvider';

export const MainLayout = ( ) => {

  const { theme } = usethemeStore();

  return (
    <body className={ theme }>
        <ModeButton />
        <Sidebar />
        <main
            className="float-right inline w-[calc(100%-16rem)] h-[calc(100%-77.53px)] dark:bg-gray-800"
        >
          <Outlet />
        </main>
        <Footer />
    </body>
  )
}
