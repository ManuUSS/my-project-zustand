import { Outlet } from 'react-router-dom';
import { Sidebar, Footer } from '../modules/shared/components';
import { useThemeStore } from '../plugins/ThemeProvider';
import { useEffect } from 'react';

export const MainLayout = ( ) => {

  const { theme } = useThemeStore();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  

  return (
    <div className={ theme }>
        <Sidebar />
        <main
            className="float-right inline w-[calc(100%-16rem)] h-[calc(100%-77.53px)] dark:bg-gray-800"
        >
          <Outlet />
        </main>
        <Footer />
    </div>
  )
}
