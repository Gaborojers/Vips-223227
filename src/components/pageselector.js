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
            <option value="/jugos">Jugos</option>
          <option value="/bebidasd">Bebidas</option>
          <option value="/cafeteriad">Cafetería</option>
          <option value="/panaderiad">Panadería</option>
          <option value="/hotcakes">Hot Cakes y Pan Francés</option>
          <option value="/huevos">Huevos y Omelettes</option>
          <option value="/chilaquiles">Chilaquiles</option>
          <option value="/enchiladas">Enchiladas</option>
          <option value="/almuerzo">Almuerzos</option>
          <option value="/postresd">Postres y Malteadas</option>
            </optgroup>
            <optgroup label='COMIDAS Y CENAS'>
            <option value="/bebidasc">Bebidas</option>
          <option value="/limonadasc">Limonadas VIPS</option>
          <option value="/alcoholc">Bebidas con Alcohol</option>
          <option value="/entradas">Entradas</option>
          <option value="/sopasc">Sopas</option>
          <option value="/ensaladas">Ensaladas</option>
          <option value="/tacos">Especialidades mexicanas</option>
          <option value="/aves">Aves</option>
          <option value="/carnes">Carnes y pescados</option>
          <option value="/sandwich">Sándwiches</option>
          <option value="/hamburguesas">Hamburguesas</option>
          <option value="/cafe">Cafetería</option>
          <option value="/pan">Panadería</option>
          <option value="/postres">Postres y malteadas</option>
            </optgroup>
            <optgroup label='KIDS'>
            <option value="/desayunosk">Desayunos</option>
          <option value="/sopask">Sopas</option>
          <option value="/comidask">Comidas</option>
          <option value="/adicionales">Adicionales</option>
            </optgroup>
        </select>
        <button onClick={handleRedirect}>Ir</button>
      </div>
  );
}

export default PageSelector;
