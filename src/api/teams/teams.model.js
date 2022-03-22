// Requerir la librería de mongoose
const mongoose = require("mongoose");
// Creamos un SCHEMA -> Es un método de una clase que nos permite definir un modelo de datos.
const teamSchema = new mongoose.Schema(
  // Type: es el tipo de dato
  // Required: si es un campo obligatorio
  // Trim: elimina los espacios al principio y final
  {
    name: { type: String, required: true, trim: true },
    country: { type: String, required: false, trim: true },
    director: { type: String, required: false, trim: true },
    coach: { type: String, required: false, trim: true },
    img: { type: String, required: false, trim: true },
    pilots: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "pilots",
        required: false,
      },
    ],
  },
  // Timestamps: fecha de creación - modificación
  {
    timestamps: true,
  }
);

// Guardar en Actor la referencia y el Schema
// actors - es el nombre de mi colección en la DB
const Team = mongoose.model("teams", teamSchema);
// Exportar ES5
module.exports = Team;
