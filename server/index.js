const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(PORT, () => console.log(`Outlet App listening on port ${PORT}`));
