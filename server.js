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

app.get("/mentions", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "mentions.html"));
});

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
