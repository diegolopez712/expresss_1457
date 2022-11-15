require('dotenv').config()
const express = require('express') //incluir un paquete en node
const hbs = require('hbs')
const app = express()
const port = process.env.PORT

//Especificar el directorio público
app.use( express.static('public') )

// Motor de plantilla
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
    //res.send('Página de Inicio')
    res.render('home',{
      nombre:'Home'
    })
  });


  app.get('/contacto', (req, res) =>{
  //res.sendFile(__dirname + '/public/views/contacto.html')
  res.render('contacto',{
    nombre:'Contacto'
  })
})

app.get('*', (req, res) =>{
  //res.send('Página no encontrada')
  //res.sendFile(__dirname + '/public/views/404.html')
  res.render('404',{
    nombre:'Página no encontrada'
  })
})

//Verficar si el puerto si está escuchando
app.listen(port, () => {
    console.log(`Escuchando app el puerto ${port}`)
})

