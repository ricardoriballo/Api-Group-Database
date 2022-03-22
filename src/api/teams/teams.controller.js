const Team = require("./teams.model");

// Metodo para recuperar todos los equipos de nuestra DB
const getAll = async (req, res, next) => {
  try {
    // Popular datos -> sin ello te devuelve unicamente los ids
    const teams = await Team.find().populate("pilots")
    console.log(teams)
    res.status(200).json(teams);
  } catch (error) {
    return next(error);
  }
};

// Metodo para recuperar un equipo de nuestra DB
const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id).populate("pilots")
    res.status(200).json(team);
  } catch (error) {
    return next(error);
  }
};

// Método para crear un team
const postOne = async (req, res, next) => { console.log(req.body);
  try {
    const team = new Team(req.body);
    //   team.name = req.body.name;
    //   team.country = req.body.country;
    //   team.director = req.body.director;
    //   team.director = req.body.director;
    //   team.img = req.body.img;
    //   team.country = req.body.country;
    const teamDB = await team.save();
    return res.status(201).json(teamDB);
  } catch (error) {
    return next(error);
  }
};

// Método para modificar un team en base a su id
const patchOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const team = new Team(req.body);
    team._id = id;
    const updateTeam = await Team.findByIdAndUpdate(id, team);
    return res.status(200).json(updateTeam);
  } catch (error) {
    return next(error);
  }
};

// Método para eliminar un team en base a su id
const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const team = await Team.findByIdAndDelete(id);
    return res.status(200).json(team);
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
