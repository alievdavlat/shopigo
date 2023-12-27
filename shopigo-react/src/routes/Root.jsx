import { Footer, Header } from '../components'
import { Home, ProductsPage, SalePage} from '../pages'
import {Outlet, createBrowserRouter} from 'react-router-dom'



const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}


  const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/products/:id',
        element:<ProductsPage/>
      },
      {
        path:'/sale-done/:type/:id',
        element:<SalePage/>
      },
    ]
  },
  
  
])

export default router