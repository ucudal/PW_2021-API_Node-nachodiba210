var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors({
    origin: '*'
}));

app.get('/experiencia-laboral', function(req, res) {
  experiencia_laboral = { 
    "experiencia_laboral": [
      {
        "empresa": "Parroquia Santa Rita",
        "descripcion": "Lider animador en la parroquia santa rita, donde cuidaba un grupo de 30 niños",
        "puesto": "Animador Lider",
        "fecha_inicio": "01-07-2016",
        "fecha_fin": "01-12-2018"
      },
      {
        "empresa": "EagerWorks",
        "descripcion": "Empresa de software dedicada a crear software a medida para empresas extranjeras y locales. Su foco principal es la creacion de applicaciones web y mobiles y el lenguaje de uso es Ruby",
        "puesto": "Full Stack Developer",
        "fecha_inicio": "16-07-2020",
        "fecha_fin": "Present"
      }
    ]
  }
  res.send(experiencia_laboral);
});

app.listen(process.env.PORT || 3000, (a) => {
  console.log("Servidor disponible en http://localhost:3000")
});
 
module.exports = app;