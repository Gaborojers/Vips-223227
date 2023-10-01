import React from 'react';
import Link from 'next/link';
import styles from '../styles/pedidos.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Head from 'next/head';

function Pedidos() {
  
  return (
    <>
    <Head>
        <title>Disfruta de Nuestros Restaurantes Vips cerca de ti | Ordena en línea</title>
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
          <a href="./pedidos.html" className={styles.linea}><button className={styles.boton}>PIDE EN LÍNEA</button></a>
          <a href="https://vips.com.mx/tdlvips"><img src="https://vips.com.mx/img/card.png" className={styles.instagram} alt="" /></a>
        </div>
      </header>

      <br />
      <h1 className={styles.h1}>¡Con Vips a domicilio vamos de nuestra cocina a tu puerta!</h1>

        <Link href="https://delivery.vips.com.mx/?_ga=2.54961579.1686784477.1694718293-1683242324.1694494879&_gl=1*1psrn0l*_ga*MTY4MzI0MjMyNC4xNjk0NDk0ODc5*_ga_TXTK2XY0K9*MTY5NDg5NjI4NS4yOC4xLjE2OTQ4OTkwNDkuMTQuMC4w" className={styles.link}>
            <img src="https://vips.com.mx/images/banners/banner_delivery_ago_domicilio1sd.jpg" className={styles.banner} alt="" />
        </Link>
        <br />
        <span className={styles.frase}>Trabajamos con los principales servicios de envío</span>
        <br />
        <div className={styles.pedidos}>
            <Link href="https://delivery.vips.com.mx/?_ga=2.54961579.1686784477.1694718293-1683242324.1694494879&_gl=1*1psrn0l*_ga*MTY4MzI0MjMyNC4xNjk0NDk0ODc5*_ga_TXTK2XY0K9*MTY5NDg5NjI4NS4yOC4xLjE2OTQ4OTkwNDkuMTQuMC4w">
                <img src="https://vips.com.mx/img/delivery_vips.png" className={styles.delivery} alt="" />
            </Link>
            <Link href="https://www.ubereats.com/mx/brand/vips">
                <img src="https://vips.com.mx/img/logoUberEats.png" className={styles.ubereats} alt="" /> 
            </Link>
            <Link href="https://www.rappi.com.mx/restaurantes/delivery/949-vips">
                <img src="https://vips.com.mx/img/logorappi.png" className={styles.rappi} alt="" />
            </Link>
            <Link href="https://www.didi-food.com/es-MX/food/search/?q=vips">
                <img src="https://vips.com.mx/img/logodidi.png" className={styles.didi} alt="" />
            </Link>
        </div>

        <br />

        <div className={`${styles.phonedelivery} ${styles.crow}`}>
            <img src="https://vips.com.mx/img/2020/phone.svg" className={styles.iconphone} alt="" />
            <p style={{ textAlign: 'center' }}>
                <span>
                    Llama, ordena y recoge
                    <br />
                    en tu VIPS más cercano
                </span>
            </p>
            <Link href="tel:8009008477" style={{ textAlign: 'center' }}>
                <h2>800 9008477</h2>
            </Link>
            <h3>
                <Link class={styles.linkdelivery} target="_blank" href="https://delivery.vips.com.mx">
                    Ordena en línea
                </Link>
            </h3>
            <p style={{ textAlign: 'center' }}>Con envío gratis</p>
        </div>

        <h2 style={{ color: '#222' }} className={styles.cobertura}>Nuestra cobertura</h2>
        <input type="text" placeholder="Código Postal (5 dígitos)" className={styles.cpdom} maxlength="5" role="img" aria-label="Place holder" title="Place holder" />

        <Link className={styles.sendbtncp} href="https://vips.com.mx/domicilio2?cp=30870" style={{ opacity: 0.7, cursor: 'not-allowed', pointerEvents: 'all', background: 'rgb(140, 140, 140)' }}>
        <p style={{ textAlign: 'center' }}>
            Aceptar
        </p>
        </Link>

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

export default Pedidos;
