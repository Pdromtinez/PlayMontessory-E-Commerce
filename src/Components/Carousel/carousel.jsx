import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';

function ProductsCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={3500}>
        <img
          src='/src/assets/imgCarousel/1carousel.jpg'
          alt='img1'
          className='carousel-img' // Aplicar la clase de estilo personalizado
        />
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <img
          src='/src/assets/imgCarousel/2carousel.jpg'
          alt='img2'
          className='carousel-img' // Aplicar la clase de estilo personalizado
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src='../src/assets/imgCarousel/3carousel.jpg'
          alt='img3'
          className='carousel-img' // Aplicar la clase de estilo personalizado
        />
   
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductsCarousel;