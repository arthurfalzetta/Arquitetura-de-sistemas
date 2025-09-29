const axios = require("axios");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.json());

const observacoesPorLembreteId = {};
const { v4: uuidv4 } = require("uuid");

const funcoes = {
  ObservacaoClassificada: (observacao) => {
    const observacoes = observacoesPorLembreteId[observacao.lembreteId];
    const obsParaAtualizar = observacoes.find((o) => o.id === observacao.id);
    obsParaAtualizar.status = observacao.status;
    //emitir evento do tipo ObservacaoAtualizad

    axios.post("http://localhost:10000/eventos", {
      tipo: "ObservacaoAtualizada",
      dados: {
        id: observacao.id,
        texto: observacao.texto,
        lembreteId: observacao.lembreteId,
        status: observacao.status,
      },
    });
  },
};

app.post("/lembretes/:id/observacoes", async (req, res) => {
  const idObs = uuidv4();
  const { texto } = req.body;
  //req.params dá acesso à lista de parâmetros da URL
  const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || [];
  observacoesDoLembrete.push({ id: idObs, texto });
  observacoesPorLembreteId[req.params.id] = observacoesDoLembrete;

  await axios.post("http://localhost:10000/eventos", {
    tipo: "ObservacaoCriada",
    dados: {
      id: idObs,
      texto,
      lembreteId: req.params.id,
    },
  });
  res.status(201).send(observacoesDoLembrete);
});

app.post("/eventos", (req, res) => {
  console.log(req.body)
  funcoes[req.body.tipo](req.body.dados);
  res.status(200).send({ msg: "ok" });
});

app.get("/lembretes/:id/observacoes", (req, res) => {
  res.send(observacoesPorLembreteId[req.params.id] || []);
});

app.listen(5000, () => {
  console.log("Lembretes na porta 5000");
});
