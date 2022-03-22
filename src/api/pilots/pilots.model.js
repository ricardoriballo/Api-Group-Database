// Requerir la librería de mongoose
const mongoose = require("mongoose");
// Creamos un SCHEMA -> Es un método de una clase que nos permite definir un modelo de datos.
const pilotSchema = new mongoose.Schema(
  // Type: es el tipo de dato
  // Required: si es un campo obligatorio
  // Trim: elimina los espacios al principio y final
  {
    name: { type: String, required: true, trim: true },
    age: { type: String, required: false, trim: true },
    nationality: { type: String, required: false, trim: true },
    date: { type: String, required: false, trim: true },
    height: { type: Number, required: false, trim: true },
    weight: { type: Number, required: false, trim: true },
    number: { type: Number, required: false, trim: true },
    championship: { type: Number, required: false, trim: true },
    img: { type: String, required: false, trim: true },
    race: { type: Number, required: false, trim: true }
  },
  // Timestamps: fecha de creación - modificación
  {
    timestamps: true,
  }
);

// Guardar en Actor la referencia y el Schema
// actors - es el nombre de mi colección en la DB
const Pilot = mongoose.model("pilots", pilotSchema);
// Exportar ES5
module.exports = Pilot;
