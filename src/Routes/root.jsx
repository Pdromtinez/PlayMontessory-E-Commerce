import { Outlet } from 'react-router-dom'
import NavBar from '../Components/Nav/NavBar'
import NavList from '../Components/Nav/Nav'
import ProductsCarousel from '../Components/Carousel/carausel'
import Footer from '../Components/Footer/Footer'

function Root() {
  return (
    <div>
      <NavBar/>
      <NavList/>
      <ProductsCarousel/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default Root