// pages/index.js (o cualquier otro componente)

import { useEffect, useState } from "react";

function Home() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET a la API
    fetch("/api/datos")
      .then((response) => response.json())
      .then((data) => setDatos(data))
      .catch((error) => console.error("Error al obtener los datos", error));
  }, []);

  return (
    <div>
      <h1>Datos Estáticos</h1>
      <ul>
        {datos.map((dato) => (
          <li key={dato.id}>
            <strong>{dato.nombre}</strong>: {dato.descripcion} 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home; 
