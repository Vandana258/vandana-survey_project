const { DataTypes } = require('sequelize');
// const { sequelize } = require(".");
// const path = require('path');

module.exports = (sequelize) => {
    const User = sequelize.define("user", {
        id:{
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: "id",
        },
        email:{
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
            field: "email",
        },
        password:{
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "password",
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull: false, 
            defaultValue: DataTypes.NOW,
            field: "createdAt",
        },
        updatedAt:{
            type: DataTypes.DATE,
            timestamps: true,
            allowNull: true,
            field: "updatedAt",
        }
    });
    return User;
}