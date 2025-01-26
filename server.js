const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Configurer les fichiers statiques (public et src combinés)
app.use(express.static(path.join(__dirname, "public"))); // Fichiers statiques principaux
app.use(express.static(path.join(__dirname, "src"))); // Inclure les fichiers nécessaires de src

// Route principale
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// app.get("/mention", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "mention.html"));
// });
// app.get("/go", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "newsletter.html"));
// });

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
