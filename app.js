const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require ('body-parser');
const cors = require("cors");
const sequelize = require ('./config/database.js');
const routes = require ('./routes/routes.js');

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api', routes);
app.get("/", (req, res) => {
    res.json({ status: 200, message: "Hi welcome to node sequelize crud" })
  })
sequelize.sync().then(() => {
    console.log('Database connected');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
})
module.exports = app;