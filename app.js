const express = require("express");
const db = require("./models");
const cors = require("cors");
const routes = require("./routers/index");
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Make sure this is before any route definitions
app.use(cors());
app.use(routes);

// Connect to the database
db.sequelize.authenticate()
  .then(() => {
    // Sync the database
    return db.sequelize.sync();
  })
  .then(() => {
    console.log("Connection to the database has been established successfully");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.get('/', (req, res) => {
  res.send('backend Codenine - TradisiRasa');
});

// GET: Fetch all resep from the database
app.get('/detailresep', async (req, res) => {
  try {
    const detailResep = await db.DetailReseps.findAll();
    res.json(detailResep);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Backend server is running at http://localhost:${process.env.PORT || 8000}`);
});
