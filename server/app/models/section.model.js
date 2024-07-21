const { DataTypes } = require('sequelize');
// const { sequelize } = require(".");
// const path = require('path');

module.exports = (sequelize) => {
    const Section = sequelize.define("section", {
        id:{
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: "id",
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "name",
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
    return Section;
}