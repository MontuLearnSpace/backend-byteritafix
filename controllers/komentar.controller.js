const pool = require('../config/db');

// Ambil komentar berdasarkan id_berita
exports.getKomentarByBerita = async (req, res) => {
  const { id_berita } = req.params;

  try {
    const result = await pool.query(
      `SELECT k.id, k.isi_komentar, k.tanggal, u.nama AS nama_user
       FROM komentar k
       JOIN users u ON k.id_user = u.id
       WHERE k.id_berita = $1
       ORDER BY k.tanggal ASC`,
      [id_berita]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Tambah komentar baru
exports.tambahKomentar = async (req, res) => {
  const { isi_komentar, id_user, id_berita } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO komentar (isi_komentar, id_user, id_berita)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [isi_komentar, id_user, id_berita]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};