require('dotenv').config();
const express = require('express');
const pool = require('./db'); // Import the pool from db.js
const app = express();

app.use(express.json()); // For parsing application/json

// POST route for creating data
app.post('/data', async (req, res) => {
  try {
    const { field1, field2 } = req.body;
    const newData = await pool.query(
      "INSERT INTO your_table (field1, field2) VALUES ($1, $2) RETURNING *",
      [field1, field2]
    );
    res.json(newData.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// PUT route for updating data
app.put('/data/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { field1, field2 } = req.body;
    const updateData = await pool.query(
      "UPDATE your_table SET field1 = $1, field2 = $2 WHERE id = $3 RETURNING *",
      [field1, field2, id]
    );
    res.json(updateData.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// DELETE route for deleting data
app.delete('/data/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteData = await pool.query(
      "DELETE FROM your_table WHERE id = $1 RETURNING *",
      [id]
    );
    res.json(deleteData.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Server start
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
