import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel

function CarouselComponent() {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} interval={3000}>
      <div>
        <img src="https://vips.com.mx/images/2023/banners/Banner_clasicos_patrios_desktop.jpg" alt="Imagen 1" />
      </div>
      <div>
        <img src="https://vips.com.mx/images/2023/banners/Banner_festejando_mexico_desktop.jpg" alt="Imagen 2" />
      </div>
      <div>
        <img src="https://vips.com.mx/images/2023/banners/Banner_nogada_desktop.jpg" alt="Imagen 3" />
      </div>
      <div>
        <img src="https://vips.com.mx/images/2023/banners/banner_chilaquiles_desktop.jpg" alt="Imagen 4" />
      </div>
      <div>
      <img src="https://vips.com.mx/images/2023/banners/Banner_mdd_desktop_comidas.jpg" alt="Imagen 5" />
      </div>
      <div>
      <img src="https://vips.com.mx/images/2022/banners/banner_basuracero_desktop2.jpg" alt="Imagen 6" />
      </div>
    </Carousel>
  );
}

export default CarouselComponent;
