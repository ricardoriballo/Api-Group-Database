const { deleteImgCloudinary } = require("../../middlewares/deleteFile.middleware");
const Pilot = require("./pilots.model");

// Metodo para recuperar todos los pilots  de nuestra DB
const getAll = async (req, res, next) => {
  try {
    // find es un método de mongoose para recuperar todos los pilots
    const pilots = await Pilot.find().populate("race")
    // res - es loq ue enviaremos al frontal
    // cabecera - status 200 Todo OK
    // cuerpo -> pilots - json
    res.status(200).json(pilots);
  } catch (error) {
    return next(error);
  }
};

// Metodo para recuperar un pilot de nuestra DB
const getOne = async (req, res, next) => {
  try {
    // req -> recuperar valores de la request: http://jdhfjdh....10
    const { id } = req.params;
    // findById en el que por param recibe un id y te lo busca
    const pilot = await Pilot.findById(id);
    res.status(200).json(pilot);
  } catch (error) {
    return next(error);
  }
};

// Método para crear un nuevo pilot
const postOne = async (req, res, next) => {
  try {
    // Nuevo pilot para introducir los datos del front
    const pilot = new Pilot(req.body)
    if (req.file) pilot.img = req.file.path
    // Este body es la info que nos llega desde el front
    // Método de mongoose - que guarda el pilot en la DB
    const pilotDB = await pilot.save();
    return res.status(201).json(pilotDB);
  } catch (error) {
    return next(error);
  }
};

// Método para modificar un pilot en base a su id
const patchOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pilot = new Pilot(req.body);
    // id nos lo generan y es un numero único
    pilot._id = id;
    // updatear el actor -> Método de mongoose - que sustituye el pilot en la DB
    // Param 1- el id recuperado
    // param 2 - el actor con la info del front
    const updatePilot = await Pilot.findByIdAndUpdate(id, pilot);
    return res.status(200).json(updatePilot);
  } catch (error) {
    return next(error);
  }
};

// Método para eliminar un pilot en base a su id
const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    // borrar el actor -> Método de mongoose - que borra el actor en la DB por el id recuperado
    const pilot = await Pilot.findByIdAndDelete(id);
    if (pilot.img) deleteImgCloudinary(pilot.img);
    return res.status(200).json(pilot);
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
