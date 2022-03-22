// Importar con ES5
// Requerimos la librería
const dotenv = require('dotenv');
// Ejecutamos método para usar .env
dotenv.config();
// Requerimos la librería para conectarnos a nuestra DB
const mongoose = require('mongoose');

// URI de mongo recuperada del .env
const mongoDb = process.env.MONGO_DB;

// Mi conexión es async -> no se conecta inmediatamente
const connect = async () => {
    // Donde intentaremos conectarnos
    try {
        // Método de Mongoose 
        // 1- Param URI [donde quiero que te conectes]
        // 2- Param {configuración} -> Parsear los datos de url
        const db = await mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true })
        // Nombre de DB y el Host en el que está
        const { name, host } = db.connection;
        console.log(`Conectado a la DB 👀: ${name} en el host❤️: ${host}`);
    } catch (error) {
        console.error(`No se ha podido conectar a la DB 💔`, error)
    }
}

//exportarla para usarla en otro punto - index.js
// Exportar funciones con ES5
module.exports = { connect };

