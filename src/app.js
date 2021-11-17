var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.use(cors({
    origin: '*'
}));

app.use(express.urlencoded({
  extended: true
}));

var jsonParser = bodyParser.json();

app.get('/experiencia-laboral', function(req, res) {
  experiencia_laboral = { 
    "experiencia-laboral": [
      {
        "empresa": "Parroquia Santa Rita",
        "descripcion": "Lider animador en la parroquia santa rita, donde cuidaba un grupo de 30 niños",
        "puesto": "Animador Lider",
        "fechaInicio": "01-07-2016",
        "fechaFin": "01-12-2018"
      },
      {
        "empresa": "EagerWorks",
        "descripcion": "Empresa de software dedicada a crear software a medida para empresas extranjeras y locales. Su foco principal es la creacion de applicaciones web y mobiles y el lenguaje de uso es Ruby",
        "puesto": "Full Stack Developer",
        "fechaInicio": "16-07-2020",
        "fechaFin": "Present"
      },
      {
        "empresa": "Profesor Paricular",
        "descripcion": "Profesor particular de programacion 1",
        "puesto": "Profesor",
        "fechaInicio": "16-07-2021",
        "fechaFin": "Present"
      }
    ]
  }
  res.send(experiencia_laboral);
});

app.post('/enviar-formulario', jsonParser, function(req, res) {
  const name = req.body.name;
  if (!name) {
    return res.status(400).send("Falta el nombre de contacto");
  }
  res.cookie("PW_2021-CV_Contacto", name);
  res.send("Something");
});

app.post("/*", jsonParser, function(req, res) {
  res.status(404).send("404 - No fue encontrado");
});

app.listen(process.env.PORT || 3000, (a) => {
  console.log("Servidor disponible en http://localhost:3000")
});
 
module.exports = app;