const UserRoutes = require('express').Router();
const {isAuth} = require("../../middlewares/auth.middlewares")
const { register, login, logout } = require('./users.controller');

UserRoutes.post('/register', register);
UserRoutes.post('/login', login);
UserRoutes.post('/logout', logout);

module.exports = UserRoutes;