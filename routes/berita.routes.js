const express = require('express');
const router = express.Router();
const beritaController = require('../controllers/berita.controller');

router.get('/', beritaController.getAllBerita);

module.exports = router;