import { Outlet } from 'react-router-dom'
import { Sidebar, Footer } from '../modules/shared/components';

export const MainLayout = ( ) => {
  return (
    <body className=''>
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
