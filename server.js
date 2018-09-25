

const express = require ('express');
const app = express();

// -> midlware para especificar un callback, y pasarle la ruta  <-- //
app.use(express.static(__dirname + '/public'));

app.get ('/', (req, res) =>{

  res.send('Hola express')



  res.send();

});

app.listen(3000)
console.log('Escuchando en el puerto 3000');
