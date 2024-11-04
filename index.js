// index.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware a JSON adatok kezelésére
app.use(express.json());

// Statikus fájlok kiszolgálása
app.use(express.static('public'));

// Rendelés router betöltése
const rendelesRouter = require('./routes/rendeles');
app.use('/rendeles', rendelesRouter);

// Szerver indítása
app.listen(port, () => {
    console.log(`A szerver fut a http://localhost:${port} címen`);
});
