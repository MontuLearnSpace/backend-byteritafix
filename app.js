const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Routes placeholder
app.get('/', (req, res) => {
  res.send('Progress Sementara Minggu 5 (Pengembangan Backend)');
});

const beritaRoutes = require('./routes/berita.routes');
app.use('/api/berita', beritaRoutes);

const komentarRoutes = require('./routes/komentar.routes');
app.use('/api/komentar', komentarRoutes);

module.exports = app;