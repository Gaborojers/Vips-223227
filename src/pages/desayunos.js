import React from 'react';
import Link from 'next/link';
import styles from '../styles/desayunos.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Head from 'next/head';

function Desayunos() {

  return ( 
    <>
    <Head>
        <title>Deliciosos Desayunos | Vips México</title>
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

      <h1  className={styles.maintitle}>DESAYUNOS</h1>
      <p style={{ fontSize: '19px', textAlign: 'center' }} className={styles.frase}>
      Incuyen: Un jugo (300 ml /173 Cal, toronja o naranja) o fruta (150 g /59 Cal, melón, papaya o piña), (sujeto a disponibilidad) y café americano (300 ml / Rellenable/ Libre de Cal) Servidos de 7:00 a 13:00 hrs. Cambia tu café por un Té flor de la paz $11
      </p>
       <br />
      <span className={styles.span} style={{ fontSize: '12px' }}>
      No aplica al ordenar en jugos, bebidas, café, té, fruta, pan horneado, postres ni malteadas de manera individual.
      </span>

      <div className={styles.platillo}>
            <Link href="/jugos" className={styles.enlace_imagen_jugos}>
                <img src="https://vips.com.mx/menu/img/jugos_fruta.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_jugos}>
                    <p>JUGOS Y FRUTAS</p>
                </div>
            </Link>

            <Link href="/bebidasd" className={styles.enlace_imagen_bebidas}>
                <img src="https://vips.com.mx/menu/imgpreview/platos/limonada.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_bebidas}>
                    <p>BEBIDAS</p>
                </div>
            </Link>

            <Link href="/cafeteriad" className={styles.enlace_imagen_cafe}>
                <img src="https://vips.com.mx/menu/imgpreview/platos/americano.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_cafe}>
                    <p>CAFETERÍA</p>
                </div>
            </Link>

            <Link href="/panaderiad" className={styles.enlace_imagen_pan}>
                <img src="https://vips.com.mx/menu/imgpreview/platos/bisquetscrema.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_pan}>
                    <p>PANADERÍA</p>
                </div>
            </Link>
            <br />
            <br />
            <Link href="/hotcakes" className={styles.enlace_imagen_hotcake}>
                <img src="https://vips.com.mx/menu/imgpreview/platos/hotcakes_tradicionales.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_hotcake}>
                    <p>HOT CAKES Y PAN FRANCÉS</p>
                </div>
            </Link>

            <Link href="/huevos" className={styles.enlace_imagen_huevo}>
                <img src="https://vips.com.mx/menu/img/platos/revueltos_croisant.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_huevo}>
                    <p>HUEVOS Y OMELETTES</p> 
                </div>
            </Link>

            <Link href="/chilaquiles" className={styles.enlace_imagen_chilaquiles}>
                <img src="https://vips.com.mx/menu/img/chilaquiles.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_chilaquiles}>
                    <p>CHILAQUILES</p>
                </div>
            </Link>

            <Link href="/enchiladas" className={styles.enlace_imagen_enchiladas}>
                <img src="https://vips.com.mx/menu/imgpreview/platos/enchiladas_suizas.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_enchiladas}>
                    <p>ENCHILADAS</p>
                </div>
            </Link>
            <br />
            <br />
            <Link href="/almuerzo" className={styles.enlace_imagen_almuerzo}>
                <img src="https://vips.com.mx/menu/img/almuerzo_patron.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_almuerzo}>
                    <p>ALMUERZOS</p>
                </div>
            </Link>

            <Link href="/postresd" className={styles.enlace_imagen_postre}>
                <img src="https://vips.com.mx/menu/img/platos/postres-desayunos.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_postre}>
                    <p>POSTRES Y MALTEADAS</p>
                </div>
            </Link>
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

export default Desayunos;
