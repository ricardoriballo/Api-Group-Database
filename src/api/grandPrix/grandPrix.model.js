// Requerir la librería de mongoose
const mongoose = require("mongoose");
// Creamos un SCHEMA -> Es un método de una clase que nos permite definir un modelo de datos.
const grandPrixSchema = new mongoose.Schema(
  // Type: es el tipo de dato
  // Required: si es un campo obligatorio
  // Trim: elimina los espacios al principio y final
  {
    name: { type: String, required: true, trim: true },
    circuit: { type: String, required: true, trim: true },
    country: { type: String, required: false, trim: true },
    date: { type: String, required: false, trim: true },
    length: { type: Number, required: false, trim: true },
    laps: { type: Number, required: false, trim: true },
    distance: { type: Number, required: false, trim: true }
  },
  // Timestamps: fecha de creación - modificación
  {
    timestamps: true,
  }
);

// Guardar en Actor la referencia y el Schema
// actors - es el nombre de mi colección en la DB
const GrandPrix = mongoose.model("grandprixes", grandPrixSchema);
// Exportar ES5
module.exports = GrandPrix;
