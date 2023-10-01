import React, {useState} from 'react';
import Link from 'next/link';
import styles from '../styles/menu.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Head from 'next/head';

function Menu() {

  const [mostrarLegales, setMostrarLegales] = useState(false);

  // Función para alternar la visibilidad del contenido legal+
  const toggleLegales = () => {
    setMostrarLegales(!mostrarLegales);
  };

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

      <h1  className={styles.maintitle}>MENÚ</h1>

      <div className={styles.platillos}>
            <Link href="/desayunos" className={styles.enlace_imagen}>
                <img src="https://vips.com.mx/menu/img/desayunos_1.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color}>
                    <p>DESAYUNOS</p>
                </div>
            </Link>

            <Link href="/comidas" className={styles.enlace_imagen_comidas}>
                <img src="https://vips.com.mx/menu/img/comidas.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_comidas}>
                    <p>COMIDAS Y CENAS</p>
                </div>
            </Link>

            <Link href="/kids" className={styles.enlace_imagen_kids}>
                <img src="https://vips.com.mx/menu/img/infantil_1.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_kids}>
                    <p>VIPS KIDS</p>
                </div>
            </Link>

            <br />
            <br />

            <Link href="/festejo" className={styles.enlace_imagen_mexico}>
                <img src="https://vips.com.mx/menu/img/portada-pan-muerto.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_mexico}>
                    <p>PAN DE MUERTO RELLENO O TRADICIONAL</p>
                </div>
            </Link>

            <Link href="/clasicos" className={styles.enlace_imagen_clasicos}>
                <img src="https://vips.com.mx/menu/img/familia-de-clasicos_menu.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_clasicos}>
                    <p>VIVAN LOS CLÁSICOS VIPS</p>
                </div>
            </Link>

            <Link href="/dia" className={styles.enlace_imagen_dia}>
                <img src="https://vips.com.mx/menu/img/portada_mdd_comidas.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_dia}>
                    <p>MENÚ DEL DÍA</p>
                </div>
            </Link>

            <br />
            <br />

            <Link href="https://survey3.medallia.com/?vips1" className={styles.enlace_imagen_experiencia}>
                <img src="https://vips.com.mx/menu/img/evalua.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_experiencia}>
                    <p>COMPARTIR TU EXPERIENCIA</p>
                </div>
            </Link>

            <Link href="https://vapormicuenta.org/" className={styles.enlace_imagen_cuenta}>
                <img src="https://vips.com.mx/menu/img/vapormicuenta.jpg" alt="Descripción de la imagen" />
                <div className={styles.cuadro_color_cuenta}>
                    <p>VA POR MI CUENTA</p>
                </div>
            </Link>
      </div>

      <div className={styles.legales}>
      <p className={styles.informacion} id="parrafo">
        <strong onClick={toggleLegales}>Legales.</strong>
      </p>
      <div className={styles.contenidoLegales} style={{ display: mostrarLegales ? 'block' : 'none' }}>
        <p> Basado en El Plato del Bien Comer (NOM-043-SSA2-2012). La energía desplegada en platillos es calculada de la información nutrimental de cada uno de los ingredientes que lo forman. Las descripciones que integran más de una opción de platillo, despliegan el promedio de energía de las variables elegibles. Libre de Cal refiere a alimentos libres de energía de acuerdo al Sistema Mexicano de Alimentos Equivalentes 4ta edición. Nuestros alimentos son procesados con equipo y en un ambiente en contacto con alérgenos como: huevo, pescado, nueces de árbol, cacahuates, mariscos, lácteos, soya y trigo. Los gramajes en todos nuestros alimentos son aproximados, antes de su cocción y/o preparación. Te sugerimos pedir tus platillos de huevo y carne bien cocidos, si deseas otro término solicítalo / Precios en MXN / Nuestros precios incluyen IVA.</p>
      </div>
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

export default Menu;
