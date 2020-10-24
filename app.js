import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile('/assets/image.png', { root : __dirname});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});