import React from 'react';
import Link from 'next/link';
import Select from './pageselector';
import styles from '../styles/ejemplo.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Index() {
  return ( 
    <div className={`${styles.pagina}`}>
      <header className={styles.header}>
        <div className={styles.contenedor}>
        <Link href="/">
            <img src="https://vips.com.mx/images/logo_vips.svg" className={styles.logos} />
          </Link>
          <ul className={styles.listaDesordenada}>
            <li>
              <Link href={"./menu."}>MENÚ</Link>
            </li>
            <li>
              <a href="https://vips.com.mx/restaurantes">RESTAURANTES</a>
            </li>
            <li>
              <a href="https://vips.com.mx/tdlvips">TOTAL VIPS</a>
            </li>
          </ul>
          <div className={styles.search_container}>
            <input type="text" placeholder="Buscar..." className={styles.mySearchBar} id="searchMobile" />
            <i className={styles.search_icon}></i>
          </div>
          <a href="./pedidos.html" className={styles.linea}><button className={styles.boton}>PIDE EN LÍNEA</button></a>
          <a href="https://vips.com.mx/tdlvips"><img src="https://vips.com.mx/img/card.png" className={styles.instagram} alt="" /></a>
        </div>
      </header>

      <div className={styles.carouselContainer}>
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
      </div>

      <div className={styles.burrito}>
            <img src='https://vips.com.mx/images/foto_enchiladas2.jpg'></img>
        </div>
        <div className={styles.pedidos}>
            <img src="https://vips.com.mx/images/agregadorestextsd.png" alt="" />
            <a href="./pedidos.html"><button className={styles.orden}>Ordena aquí</button></a>
        </div>

        <footer className={styles.footer}>
            <div className={styles.footer_images}>
                <img src="https://vips.com.mx/images/logo_vips.svg" alt="Imagen izquierda" />
            </div>
            <div className={styles.footer_content}>
                <span>Vipstorias</span>
                <br />
                <br />
                <span>Somos Vips</span>
                <br />
                <br />
                <span>Franquicias</span>
                <br />
                <br />
                <span>Responsabilidad Social</span>
                <br />
                <br />
                <span>Trabaja con Vips</span>
            </div>
            <div className={styles.footer_content2}>
                <span>Facturación</span>
                <br />
                <br />
                <span>Consumo Responsable</span>
                <br />
                <br />
                <span>Términos y Condiciones</span>
                <br />
                <br />
                <span>Aviso de Privacidad</span>
                <br />
                <br />
                <div className={styles.redes}>
                    <img src="https://vips.com.mx/svg/facebook.svg" class="facebook" alt="" />
                    <img src="https://vips.com.mx/svg/twitter.svg" class="twitter" alt="" />
                    <img src="https://vips.com.mx/img/tiktok.svg" class="tiktok" alt="" />
                    
                </div>
                <br />
            </div>
            <p>Vips no hace promociones con páginas de internet de terceros, por lo que no se hace responsable por el contenido promocional de dichas publicaciones.</p>
        </footer>
        
    </div>
  );
}

export default Index;
