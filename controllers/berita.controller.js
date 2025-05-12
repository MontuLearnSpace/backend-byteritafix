const pool = require('../config/db');

exports.getAllBerita = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM berita');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};