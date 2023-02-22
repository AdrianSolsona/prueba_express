
const express = require('express');
const app = express();
const PORT = 3000;

//A partir de ahora, la constante app contiene todos los métodos de express
//para su uso según me convenga.

const router = require('./router')

app.use(express.json());



app.get('/persona/:name', (req, res) => {
    let nombre = req.params.name;
    let almuerzo = req.query.almuerzo;
    let merienda = req.query.merienda;

    res.send(`Hola ${nombre}, vas a almorzar ${almuerzo} y a merendar ${merienda}`);
})

app.use(router)

app.listen(PORT, ()=>{
    console.log(`Servidor levantado en puerto ${PORT}`);
})


