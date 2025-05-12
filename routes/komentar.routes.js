const express = require('express');
const router = express.Router();
const komentarController = require('../controllers/komentar.controller');

// Dapatkan komentar berdasarkan berita
router.get('/:id_berita', komentarController.getKomentarByBerita);

// Tambah komentar
router.post('/', komentarController.tambahKomentar);

module.exports = router;