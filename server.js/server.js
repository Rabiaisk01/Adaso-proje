const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res) => {
    res.send('Test Deneme');
});

app.listen(port, () => {
    console.log('Sunucu http://localhost:${port} adresinde çalışıyor!');
        console.log('Tarayıcınızda bu adresi açarak kontrol edebilirsiniz.');        
});
