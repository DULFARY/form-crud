const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
const Form = sequelize.define('form', {

    // Definimos las columnas aquí

    first_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING,
         allowNull: true
    },

    email : {
        type: DataTypes.STRING,
         allowNull: true
    },

    password: {
        type: DataTypes.STRING,
         allowNull:  true
    },

    birthday: {
        type: DataTypes.DATEONLY,
         allowNull: true
    },


});

module.exports = Form;