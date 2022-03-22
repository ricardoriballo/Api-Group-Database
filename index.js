// Importar Express -> Métodos o funciones para gestionar mi server
const express = require("express");
// Importar Cors -> Librería que gestiiona proxies o urls permitadas
const cors = require("cors");

//Metodo de config cloudinary
const { configCloudinary } = require("./src/utils/cloudinary/cloudinary")

// Método de conexión de la DB
const { connect } = require("./src/utils/database/db");

//Rotas endpoints
const TeamsRouts = require("./src/api/teams/teams.routers");
const PilotRouter = require('./src/api/pilots/pilots.routers');
const GrandPrixRoutes = require("./src/api/grandPrix/grandPrix.routers");
const UserRoutes = require('./src/api/users/users.routes')


// Ejecutar mi función de conexión a la DB
connect();


// Inicializar Express
const app = express();

// // Transformación de datos
app.use(express.json());

//Ejecutamos el metodo de cloudinary
configCloudinary()

// // No codifica caracteres reservador que tienene un significado especial en la URI.
app.use(
express.urlencoded({
extended: false,
})
);

// Config de Proxies + CORS
app.use(cors());

app.use("/api/teams", TeamsRouts);
app.use("/api/pilots", PilotRouter);
app.use("/api/grandprix", GrandPrixRoutes);
app.use('/api/users', UserRoutes)




// // Nuestro primer EndPoint - PROVISIONAL
app.use("/api", (req, res, next) => "im alive");

// Seleccionar Puerto del .env y si no existe poner 8080
const PORT = process.env.PORT || 8081;

// Escuchadores d enuestro server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port 🙈: ${PORT}`);
});

// Capturador de Error
app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

// Errores del server 500
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
