const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const SurveyAnswer = sequelize.define("survey_answer", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: "id",
        },
        section: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "section",
        },
        question: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: "question",
        },
        answers: {
            type: DataTypes.JSON,
            allowNull: false,
            field: "answers",  // Store answers as JSON
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: "createdAt",
        },
        updatedAt: {
            type: DataTypes.DATE,
            timestamps: true,
            allowNull: true,
            field: "updatedAt",
        }
    });

    return SurveyAnswer;
};
