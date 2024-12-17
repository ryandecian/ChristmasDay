import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ChristmasDay from './pages/ChristmasDay.tsx'

const router =  createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <ChristmasDay />,
      },
    ],
  },
])

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(document.getElementById('root')!).render(
   <RouterProvider router={router} />
)
