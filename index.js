const express = require('express');

// init app
const PORT = 4000;
const app = express();

app.get('/', (req, res) => res.send('<h1>Hello tresmerge! hi</h1>'))

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`, ))