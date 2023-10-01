import React from 'react';
import Link from 'next/link';
import styles from '../styles/comidas.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Head from 'next/head';

function Comidas() {

  return ( 
    <>
    <Head>
        <title>Comidas y cenas a domicilio | vips México</title>
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

      <h1  className={styles.maintitle}>COMIDAS Y CENAS</h1>
      <p style={{ fontSize: '19px', textAlign: 'center' }} className={styles.frase}>
      Incuyen: Un jugo (300 ml /173 Cal, toronja o naranja) o fruta (150 g /59 Cal, melón, papaya o piña), (sujeto a disponibilidad) y café americano (300 ml / Rellenable/ Libre de Cal) Servidos de 7:00 a 13:00 hrs. Cambia tu café por un Té flor de la paz $11
      </p>
       <br />
      <span className={styles.span} style={{ fontSize: '12px' }}>
      No aplica al ordenar en jugos, bebidas, café, té, fruta, pan horneado, postres ni malteadas de manera individual.
      </span>

      <div className={styles.platillo}>
            <Link href="/bebidasc" className={styles.enlace_imagen_bebidas}>
                <img src="https://vips.com.mx/menu/img/bebidas_comidas.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_bebidas}>
                    <p>BEBIDAS</p>
                </div>
            </Link>

            <Link href="/limonadasc" className={styles.enlace_imagen_limonadas}>
                <img src="https://vips.com.mx/menu/imgpreview/platos/limonada_pepino.png" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_limonadas}>
                    <p>LIMONADAS VIPS</p>
                </div>
            </Link>

            <Link href="/alcoholc" className={styles.enlace_imagen_alcohol}>
                <img src="https://vips.com.mx/menu/imgpreview/platos/cerveza.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_alcohol}>
                    <p>BEBIDAS CON ALCOHOL</p>
                </div>
            </Link>

            <Link href="/entradas" className={styles.enlace_imagen_entradas}>
                <img src="https://vips.com.mx/menu/imgpreview/platos/plato_mixto.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_entradas}>
                    <p>ENTRADAS</p>
                </div>
            </Link>
            <br />
            <br />
            <Link href="/sopasc" className={styles.enlace_imagen_ensaladas}>
                <img src="https://vips.com.mx/menu/imgpreview/platos/sopa_fideos.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_ensaladas}>
                    <p>SOPAS</p>
                </div>
            </Link>

            <Link href="/ensaladas" className={styles.enlace_imagen_sopas}>
                <img src="https://vips.com.mx/menu/img/platos/ensalada.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_sopas}>
                    <p>ENSALADAS</p>
                </div>
            </Link>

            <Link href="/tacos" className={styles.enlace_imagen_tacos}>
                <img src="https://vips.com.mx/menu/img/platos/tacos_Arrachera.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_tacos}>
                    <p>ESPECIALIDADES MEXICANAS</p>
                </div>
            </Link>

            <Link href="/aves" className={styles.enlace_imagen_aves}>
                <img src="https://vips.com.mx/menu/img/platos/pechuga_mixteca.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_aves}>
                    <p>AVES</p>
                </div>
            </Link>
            <br />
            <br />
            <Link href="/carnes" className={styles.enlace_imagen_carne}>
                <img src="https://vips.com.mx/menu/img/carnes.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_carne}>
                    <p>CARNES Y PESCADOS</p>
                </div>
            </Link>

            <Link href="sandwich" className={styles.enlace_imagen_sandwich}>
                <img src="https://vips.com.mx/menu/imgpreview/platos/vips_club.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_sandwich}>
                    <p>SÁNDWICHES</p>
                </div>
            </Link>

            <Link href="/hamburguesas" className={styles.enlace_imagen_hamburguesa}>
                <img src="https://vips.com.mx/menu/img/platos/hb_gratinda.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_hamburguesa}>
                    <p>HAMBURGUESAS</p>
                </div>
            </Link>

            <Link href="/cafe" className={styles.enlace_imagen_cafe}>
                <img src="https://vips.com.mx/menu/imgpreview/platos/americano.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_cafe}>
                    <p>CAFETERÍA</p>
                </div>
            </Link>
            <br />
            <br />
            <Link href="/pan" className={styles.enlace_imagen_pan}>
                <img src="https://vips.com.mx/menu/img/panaderia_comidas.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_pan}>
                    <p>PANADERÍAS</p>
                </div>
            </Link>

            <Link href="/postres" className={styles.enlace_imagen_postre}>
                <img src="https://vips.com.mx/menu/img/postres_comidas.jpg" alt="Descripción de la imagen" />
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

export default Comidas;
