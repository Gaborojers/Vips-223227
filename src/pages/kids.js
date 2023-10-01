import React from 'react';
import Link from 'next/link';
import styles from '../styles/kids.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Desayunos from '../components/desayunosk'
import Head from 'next/head';

function Kids() {

  return ( 
    <>
    <Head>
        <title>Increíble menú infantil | Ordena en línea</title>
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

      <h1  className={styles.maintitle}>VIPS KIDS</h1>
      <p style={{ fontSize: '19px', textAlign: 'center' }} className={styles.frase}>
      Incuyen: Un jugo (300 ml /173 Cal, toronja o naranja) o fruta (150 g /59 Cal, melón, papaya o piña), (sujeto a disponibilidad) y café americano (300 ml / Rellenable/ Libre de Cal) Servidos de 7:00 a 13:00 hrs. Cambia tu café por un Té flor de la paz $11
      </p>
       <br />
      <span className={styles.span} style={{ fontSize: '12px' }}>
      No aplica al ordenar en jugos, bebidas, café, té, fruta, pan horneado, postres ni malteadas de manera individual.
      </span>

      <div className={styles.platillos}>
            <Link href="/desayunosk" className={styles.enlace_imagen_desayunos}>
                <img src="https://vips.com.mx/menu/imgpreview/platos/americanito.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_desayunos}>
                    <p>DESAYUNOS</p>
                </div>
            </Link>

            <Link href="/sopask" className={styles.enlace_imagen_sopas}>
                <img src="https://vips.com.mx/menu/imgpreview/platos/sopitavips.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_sopas}>
                    <p>SOPAS</p>
                </div>
            </Link>

            <Link href="/comidask" className={styles.enlace_imagen_comidas}>
                <img src="https://vips.com.mx/menu/imgpreview/platos/hamburguesita_queso.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_comidas}>
                    <p>COMIDAS</p>
                </div>
            </Link>

            <Link href="/adicionales" className={styles.enlace_imagen_adicionales}>
                <img src="https://vips.com.mx/menu/imgpreview/platos/papas_carita.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_adicionales}>
                    <p>ADICIONALES</p>
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

export default Kids;
