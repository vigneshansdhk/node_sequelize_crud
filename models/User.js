const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const user = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    tableName: 'users', // Explicitly define table name if needed
    timestamps: true, // Add timestamps if needed   
});

module.exports = user;
