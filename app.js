const express = require("express");
const db = require("./models");
const cors = require("cors");

const routes = require("./routers/index");

const app = express();

app.use(express.json()); // Make sure this is before any route definitions
app.use(cors());

app.use(routes);

// Connect to the database
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get('/', (req, res) => {
  res.send('backend Codenine - TradisiRasa');
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Backend server is running at http://localhost:8000");
});
