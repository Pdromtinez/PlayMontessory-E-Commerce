import './carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/imgCarousel/1carousel.jpg';
import img2 from '../../assets/imgCarousel/2carousel.jpg';
import img3 from '../../assets/imgCarousel/3carousel.jpg';
function ProductsCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={3500}>
        <img
          src={img1}
          alt='img1'
          className='carousel-img' 
        />
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <img
          src={img2}
          alt='img2'
          className='carousel-img' 
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={img3}
          alt='img3'
          className='carousel-img' 
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default ProductsCarousel;