import { setTimeout } from 'timers/promises';

const express = require('express');
const app = express();
const port = 9090;

app.get('/', async (req, res) => {

  await setTimeout(2000);

  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
