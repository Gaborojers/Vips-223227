import React, {useState} from 'react';
import Link from 'next/link';
import styles from '../styles/festejo.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Select from './pageselector2'
import Head from 'next/head';

function Festejo() {

  const images = [
    {
      src: 'https://vips.com.mx/menu/imgpreview/platos/pan_muerto_tradicional.jpg',
      alt: '300 ml',
      colorClass: styles.enlace_imagen_chiles,
      text: 'PAN DE MUERTO TRADICIONAL',
    },
    {
      src: 'https://vips.com.mx/menu/imgpreview/platos/pan_muerto_cajeta.jpg',
      alt: '420 ml',
      colorClass: styles.enlace_imagen_enchiladas,
      text: 'PAN DE MUERTO CON CAJETA',
    },
    {
      src: 'https://vips.com.mx/menu/imgpreview/platos/pan_muerto_chocolate.jpg',
      alt: '300 ml',
      colorClass: styles.enlace_imagen_cecina,
      text: 'PAN DE MUERTO CON CHOCOLATE',
    },
    {
      src: 'https://vips.com.mx/menu/imgpreview/platos/pan_muerto_relleno.jpg',
      alt: '420 ml',
      colorClass: styles.enlace_imagen_parrilla,
      text: 'PAN DE MUERTO RELLENOO',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openModal = (index) => {
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setCurrentImageIndex(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return ( 
    <>
    <Head>
        <title>Temporalidad | Vips México</title>
        <link rel="icon" href="https://vips.com.mx/images/logo_vips.svg" />
      </Head>
      
    <div className={`${styles.pagina}`}>
      <header className={styles.header}>
        <div className={styles.contenedor}>
        <Link href="/">
            <img src="https://vips.com.mx/images/logo_vips.svg" className={styles.logos} />
          </Link>
          <ul className={styles.listaDesordenada}>
            <li>
            <Link href="/menu">MENÚ</Link>
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
          <a href="" className={styles.linea}><button className={styles.boton}>PIDE EN LÍNEA</button></a>
          <a href="https://vips.com.mx/tdlvips"><img src="https://vips.com.mx/img/card.png" className={styles.instagram} alt="" /></a>
        </div>
      </header>

      <div className={styles.selector}>
        <Select /> 
      </div>

      <h1  className={styles.maintitle}>UNA OFRENDA CON SABOR</h1>
       <br />
      <span className={styles.span} style={{ fontSize: '14px' }}>
      Por $35 más agrega chocolate caliente (420 ml) o cappuccino tradicional (420 ml)
      </span>

      <div className={styles.platillos}>
<div className={styles.move}>
      <div className={styles.imageGrid}>
        {images.map((image, index) => (
          <div
            className={`${styles.enlace_imagen} ${image.colorClass} ${
              currentImageIndex === index ? styles.modalOpen : ''
            }`}
            key={index}
            onClick={() => openModal(index)}
          >
            <img src={image.src} alt={image.alt} />
            <div className={styles.cuadro_color_chiles}>
              <p>{image.text}</p>
            </div>
          </div>
        ))}
      </div>

      {currentImageIndex !== null && (
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={closeModal}>
            &times;
          </button>
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            className={styles.modalImage}
          />
          <div className={images[currentImageIndex].colorClass}>
            <p className={styles.mover}>{images[currentImageIndex].text}</p>
          </div>
          <button onClick={prevImage} className={styles.prevButton}>
            Anterior
          </button>
          <button onClick={nextImage} className={styles.nextButton}>
            Siguiente
          </button>
        </div>
      )}
    </div>
      </div>

      <div className={styles.simbologia}>
            <ul>
                <li>
                    <img src="https://vips.com.mx/menu/img/clasico.png" alt="Cálidad" />
                    <p>Clásico</p>
                </li>
                <li>
                    <img src="https://vips.com.mx/menu/img/nuevo.png" alt="Nuevo" />
                    <p>Nuevo</p>
                </li>
                <li>
                    <img src="https://vips.com.mx/menu/img/balance.png" alt="Balance" />
                    <p>Balance</p>
                </li>
            </ul>
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
    </>
  );
}

export default Festejo;
