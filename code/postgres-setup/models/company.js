"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Company extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Company.hasMany(models.Organization, {
                foreignKey: "company_id",
                as: "organizations",
                onDelete: "CASCADE"
            });
        }
    }
    Company.init({
        company_name: DataTypes.STRING,
        primary_email: DataTypes.STRING
    }, {
        sequelize,
        modelName: "Company",
    });
    return Company;
};