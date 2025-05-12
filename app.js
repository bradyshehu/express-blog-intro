const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("<h1>Server del mio blog</h1>");
});

app.get("/bacheca", (req, res) => {
  const posts = [
    {
      title: "Ciambellone",
      content: "Ciambellone fatto in casa facile da preparare",
      img: "./img/ciambellone.jpeg",
      tags: ["Dolce", "Tradizionale", "Vegetariano"],
    },
    {
      title: "Cracker alla barbabietola",
      content: "Cracker deliziosi alla barbabietola",
      img: "./img/cracker_barbabietola.jpeg",
      tags: ["Snack", "Innovativo", "Vegano"],
    },
    {
      title: "Pane fritto dolce",
      content: "Pane fritto dolce, gustoso e rapido",
      img: "./img/pane_fritto_dolce.jpeg",
      tags: ["Dolce", "Tradizionale", "Vegetariano"],
    },
    {
      title: "Pasta barbabietola",
      content: "Pasta alla barbabietola, un primo particolare e colorato",
      img: "./img/pasta_barbabietola.jpeg",
      tags: ["Primo", "Innovativo", "Vegetariano"],
    },
    {
      title: "Torta paesana",
      content: "Torta paesana, come le facevano le nonne un tempo",
      img: "./img/torta_paesana.jpeg",
      tags: ["Dolce", "Tradizionale", "Vegetariano"],
    },
  ];

  res.json({ posts });
});

app.listen(port, () => {
  console.log("Il server é in ascolto sulla porta " + port);
});
