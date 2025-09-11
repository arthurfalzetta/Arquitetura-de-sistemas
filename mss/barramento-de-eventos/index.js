const axios = require("axios");
const express = require("express");
const app = express();
app.use(express.json());

app.post("/eventos", (req, res) => {
  const evento = req.body;
  //enviar para o mss de lembretes
  axios.post("http://localhost:4000/eventos", evento);
  //enviar para observacoes
  axios.post("http://localhost:5000/eventos", evento);
  //enviar para consulta
  axios.post("http://localhost:6000/eventos", evento);
  //enviar para classificacao
  axios.post("http://localhost:7000/eventos", evento);
  res.status(200).send({ msg: "ok" });
});

app.listen(10000, () => {
  console.log("Barramento de eventos. Porta 10000.");
});
