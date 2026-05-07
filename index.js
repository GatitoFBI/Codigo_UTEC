const express = require("express");
const app = express();

function obtenerMensaje() {
  return "¡Hola Mundo desde Node.js en la nube!";
}

// Corregido: function bien escrito
function obtenerHora() {
  const ahora = new Date();
  return ahora.toLocaleString("es-PE", {timeZone: "America/Lima"});
}

app.get("/", (req, res) => {
  // Corregido: Llamada a obtenerHora()
  res.send(`${obtenerMensaje()}<br>Hora actual: ${obtenerHora()}`);
});

app.get("/health", (req, res) => res.status(200).send("ok"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
