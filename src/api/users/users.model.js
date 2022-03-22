const mongoose = require('mongoose');
// Librería para encriptar nuestra contraseña
const bcrypt = require('bcrypt');
//Importar nuestros validadores
const {validationPassword, validationEmail} = require("../../utils/validators/validators")

const userSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, required: true },
        surname: { type: String, trim: true, required: true },
        password: { type: String, trim: true, required: true },
        email: { type: String, trim: true, required: true },
    }
);

// Tenemos que guardar la contraseña encriptada - para ello usamos el método mongoose pre("save")
userSchema.pre("save", function(next){
    if (!validationPassword(this.password)) {
        //TODO: Create ERROR
        return next(new Error());
    }
    if (!validationEmail(this.email)) {
        //TODO: Create ERROR
        return next(new Error());
    }
    // Encriptar la password en nuestra DB
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

const User = mongoose.model('users', userSchema);
module.exports = User;