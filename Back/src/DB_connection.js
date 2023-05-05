require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const usersModel = require("./models/User");
const favsModel = require("./models/Favorite")

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/Rickandmorty2

console.log(DB_USER)

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/rickandmorty`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

usersModel(sequelize);
favsModel(sequelize)
//


// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite} = sequelize.models;

User.belongsToMany( Favorite, {through: "user_favorite" })
Favorite.belongsToMany( User, {through: "user_favorite" })

sequelize.sync({ force: false }).then(() => {
   console.log('Tablas creadas correctamente');
}).catch(error => {
   console.error('Error creando las tablas:', error);
});


module.exports = {
   ...sequelize.models,
   conn: sequelize
};
