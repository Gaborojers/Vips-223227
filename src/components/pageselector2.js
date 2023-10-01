import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/desayunos2.module.css'

function PageSelector() {
  const router = useRouter();
  const [selectedPage, setSelectedPage] = useState("");

  const handlePageChange = (e) => {
    setSelectedPage(e.target.value);
  };

  const handleRedirect = () => {
    if (selectedPage) {
      router.push(selectedPage);
    }
  };

  return (
    <div className={styles.selectContainer}>
        <select
          id="pageSelect"
          value={selectedPage}
          onChange={handlePageChange}
          className={styles.select}
        >
          <option value="">Selecciona una página</option>
            <optgroup label='DESAYUNOS'>
            <option value="/">Jugos</option>
          <option value="/">Bebidas</option>
          <option value="/">Cafetería</option>
          <option value="/">Panadería</option>
          <option value="/">Hot Cakes y Pan Francés</option>
          <option value="/">Huevos y Omelettes</option>
          <option value="/">Chilaquiles</option>
          <option value="/">Enchiladas</option>
          <option value="/">Almuerzos</option>
          <option value="/">Postres y Malteadas</option>
            </optgroup>
            <optgroup label='COMIDAS Y CENAS'>
            <option value="/">Bebidas</option>
          <option value="/">Limonadas VIPS</option>
          <option value="/">Bebidas con Alcohol</option>
          <option value="/">Entradas</option>
          <option value="/">Sopas</option>
          <option value="/">Ensaladas</option>
          <option value="/">Especialidades mexicanas</option>
          <option value="/">Aves</option>
          <option value="/">Carnes y pescados</option>
          <option value="/">Sándwiches</option>
          <option value="/">Hamburguesas</option>
          <option value="/">Cafetería</option>
          <option value="/">Panadería</option>
          <option value="/">Postres y malteadas</option>
            </optgroup>
            <optgroup label='KIDS'>
            <option value="/">Desayunos</option>
          <option value="/">Sopas</option>
          <option value="/">Comidas</option>
          <option value="/">Adicionales</option>
            </optgroup>
        </select>
        <button onClick={handleRedirect}>Ir</button>
      </div>
  );
}

export default PageSelector;
