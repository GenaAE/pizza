require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');

const app = express();

const PORT = process.env.PORT || 4000;

const indexRouter = require('./routes/index.routes');

serverConfig(app);

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`РААБОТАЕМ на ${PORT} порту`);
});
