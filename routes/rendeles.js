// routes/rendeles.js
const express = require('express');
const router = express.Router();

// Példa fogadási rend
let rendeles = [
    { id: 1, orvos: 'Dr. Kovács', nap: 'Hétfő', ido: '08:00-12:00' },
    { id: 2, orvos: 'Dr. Nagy', nap: 'Kedd', ido: '09:00-14:00' },
    { id: 3, orvos: 'Dr. Szabó', nap: 'Szerda', ido: '10:00-16:00' },
    { id: 4, orvos: 'Dr. Kiss', nap: 'Csütörtök', ido: '08:00-12:00' },
    { id: 5, orvos: 'Dr. Farkas', nap: 'Péntek', ido: '11:00-15:00' },
];

// Fogadási rend lekérdezése
router.get('/', (req, res) => {
    res.json(rendeles);
});

// Új időpont hozzáadása
router.post('/', (req, res) => {
    const { orvos, nap, ido } = req.body;
    const ujId = rendeles.length ? rendeles[rendeles.length - 1].id + 1 : 1;
    const ujRendeles = { id: ujId, orvos, nap, ido };
    rendeles.push(ujRendeles);
    res.status(201).json(ujRendeles);
});

// Időpont törlése
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    rendeles = rendeles.filter(r => r.id != id);
    res.status(204).send();
});

module.exports = router;
