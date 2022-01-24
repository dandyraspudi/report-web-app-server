require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routers');
const cors = require('cors');
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(router);

app.listen(port, () => {
  console.log('listening port ' + port);
})

module.exports = app;
