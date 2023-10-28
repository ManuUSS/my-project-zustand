import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.tsx';
import { Toaster } from 'sonner'
import { TanStackProvider } from './plugins/TansTackProvider.tsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TanStackProvider>
      <Toaster richColors position="top-right"/>
      <RouterProvider router={ router } />
    </TanStackProvider>
  </React.StrictMode>,
)
