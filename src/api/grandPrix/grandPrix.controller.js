const GrandPrix = require("./grandPrix.model");

// Metodo para recuperar todos lor premios de nuestra DB
const getAll = async (req, res, next) => {
  try {
    // find es un método de mongoose para recuperar todos los premios
    const grandPrix = await GrandPrix.find();
    // res - es loq ue enviaremos al frontal
    // cabecera - status 200 Todo OK
    // cuerpo -> GrandPrix - json
    res.status(200).json(grandPrix);
  } catch (error) {
    return next(error);
  }
};

// Metodo para recuperar un premio de nuestra DB
const getOne = async (req, res, next) => {
  try {
    // req -> recuperar valores de la request: http://jdhfjdh....10
    const { id } = req.params;
    // findById en el que por param recibe un id y te lo busca
    const grandPrix = await GrandPrix.findById(id);
    res.status(200).json(grandPrix);
  } catch (error) {
    return next(error);
  }
};

// Método para crear un nuevo premio
const postOne = async (req, res, next) => {
  console.log(req.body);
  try {
    // Nuevo actor para introducir los datos del front
    const grandPrix = new GrandPrix(req.body);
    // Este body es la info que nos llega desde el front
    console.log("Dentro del try" + req.body);
    // Método de mongoose - que guarda el premio en la DB
    const grandPrixDB = await grandPrix.save();
    return res.status(201).json(grandPrixDB);
  } catch (error) {
    return next(error);
  }
};

// Método para modificar un actor en base a su id
const patchOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const grandPrix = new GrandPrix(req.body);
    // id nos lo generan y es un numero único
    grandPrix._id = id;
    // updatear el premio -> Método de mongoose - que sustituye el premio en la DB
    // Param 1- el id recuperado
    // param 2 - el premio con la info del front
    const updategrandPrix = await GrandPrix.findByIdAndUpdate(id, grandPrix);
    return res.status(200).json(updategrandPrix);
  } catch (error) {
    return next(error);
  }
};

// Método para eliminar un premio en base a su id
const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    // borrar el premio -> Método de mongoose - que borra el premio en la DB por el id recuperado
    const grandPrixDB = await GrandPrix.findByIdAndDelete(id);
    return res.status(200).json(grandPrixDB);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
};
