import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import appStore from '../utils/appStore.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Browse from './components/Browse.jsx'
import AddBook from './components/AddBook.jsx'
import NotFound from './components/NotFound.jsx'
import Detail from './components/Detail.jsx'

const routes = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home />,
        errorElement: <NotFound />
      },
      {
        path:'/books',
        element:<Browse />,
        errorElement: <NotFound />
      },
      {
        path:'/addBook',
        element:<AddBook />,
        errorElement: <NotFound />
      },
      {
        path:'/book/:id',
        element:<Detail />,
        errorElement: <NotFound />
      },

    ],
    errorElement: <NotFound />
  }
])

createRoot(document.getElementById('root')).render(
    <Provider store={appStore}>
      <ChakraProvider>
        <RouterProvider router={routes} />
      </ChakraProvider>
    </Provider>,
)
