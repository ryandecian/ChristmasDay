import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import PageChristmasDay from './pages/PageChristmasDay.tsx'

const router =  createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <PageChristmasDay />,
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
