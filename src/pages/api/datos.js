// pages/api/datos.js

import datos from "../../data/datos.json";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(datos);
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
  