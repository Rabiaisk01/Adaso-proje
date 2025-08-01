const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinbde çalışıyor`);
});