import React, {useState} from 'react';
import Link from 'next/link';
import styles from '../styles/huevos.module.css';
import Select from './pageselector';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Head from 'next/head';

function Dia() {

    const images = [
        {
          src: 'https://vips.com.mx/menu/imgpreview/platos/huevos_huerto1.jpg',
          alt: '300 ml',
          colorClass: styles.enlace_imagen_huerto,
          text: 'HUEVOS DEL HUERTO',
        },
        {
          src: 'https://vips.com.mx/menu/imgpreview/platos/aporreado_de_cecina.jpg',
          alt: '420 ml',
          colorClass: styles.enlace_imagen_cecina,
          text: 'APORREADO DE CECINA DE RES',
        },
        {
          src: 'https://vips.com.mx/menu/imgpreview/platos/toluquenno.jpg',
          alt: '',
          colorClass: styles.enlace_imagen_revuelto,
          text: 'REVUELTO CON CROISSANT',
        },
        {
          src: 'https://vips.com.mx/menu/imgpreview/platos/huevos_motulenos.jpg',
          alt: 'Caramelo (370 Cal), vainilla (300 Cal) o avellana (290 Cal). 420 ml.',
          colorClass: styles.enlace_imagen_motuleños,
          text: 'MOTULEÑOS',
        },
        {
            src: 'https://vips.com.mx/menu/imgpreview/platos/huevos-a-la-poblana-modif.png',
            alt: 'Entera, baja en grasa o deslactosada. 360 ml',
            colorClass: styles.enlace_imagen_poblana,
            text: 'A LA POBLANA',
          },
          {
            src: 'https://vips.com.mx/menu/imgpreview/platos/tirados.jpg',
            alt: 'Entera, baja en grasa o deslactosada. 360 ml',
            colorClass: styles.enlace_imagen_tirados,
            text: 'TIRADOS ESPECIALES',
          },
          {
            src: 'https://vips.com.mx/menu/imgpreview/platos/tortilla_claras_2.jpg',
            alt: '300 ml',
            colorClass: styles.enlace_imagen_claras,
            text: 'TORTILLA CLARA',
          },
          {
            src: 'https://vips.com.mx/menu/imgpreview/platos/arma_tu_omelette.jpg',
            alt: '420 ml',
            colorClass: styles.enlace_imagen_omelette,
            text: 'ARMA TU OMELETTE (2 PIEZAS)',
          },
          {
            src: 'https://vips.com.mx/menu/imgpreview/platos/omelette_veggie.jpg',
            alt: '',
            colorClass: styles.enlace_imagen_vegie,
            text: 'OEMELETTE VEGIE',
          },
          {
            src: 'https://vips.com.mx/menu/imgpreview/platos/divorciados.jpg',
            alt: 'Caramelo (370 Cal), vainilla (300 Cal) o avellana (290 Cal). 420 ml.',
            colorClass: styles.enlace_imagen_divorciados,
            text: 'HUEVOS DIVORCIADOS',
          },
          {
              src: 'https://vips.com.mx/menu/imgpreview/platos/heuvos_rancheros.jpg',
              alt: 'Entera, baja en grasa o deslactosada. 360 ml',
              colorClass: styles.enlace_imagen_rancheros,
              text: 'RANCHEROS',
            },
            {
              src: 'https://vips.com.mx/menu/imgpreview/platos/huevos_mexicana.jpg',
              alt: 'Entera, baja en grasa o deslactosada. 360 ml',
              colorClass: styles.enlace_imagen_gusto,
              text: 'HUEVOS AL GUSTO',
            },
            {
                src: 'https://vips.com.mx/menu/imgpreview/platos/huevos_nortenos.jpg',
                alt: 'Entera, baja en grasa o deslactosada. 360 ml',
                colorClass: styles.enlace_imagen_machaca,
                text: 'NORTEÑOS CON MACHACA',
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
        <title>Huevos y Omelettes | Vips México</title>
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

      <h1  className={styles.maintitle}>HUEVOS Y OMELETTES</h1>
      <p style={{ fontSize: '19px', textAlign: 'center' }} className={styles.frase}>
      Incuyen: Un jugo (300 ml /173 Cal, toronja o naranja) o fruta (150 g /59 Cal, melón, papaya o piña), (sujeto a disponibilidad) y café americano (300 ml / Rellenable/ Libre de Cal) Servidos de 7:00 a 13:00 hrs. Cambia tu café por un Té flor de la paz $11
      </p>
       <br />
      <span className={styles.span} style={{ fontSize: '12px' }}>
      No aplica al ordenar en jugos, bebidas, café, té, fruta, pan horneado, postres ni malteadas de manera individual.
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
            <div className={styles.cuadro_color_tacos}>
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

export default Dia;
