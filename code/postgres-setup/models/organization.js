"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Organization extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Organization.hasMany(models.Account, {
                foreignKey: "organization_id",
                as: "accounts",
                onDelete: "CASCADE"
            });
        }
    }
    Organization.init({
        organization_name: DataTypes.STRING,
        primary_email: DataTypes.STRING
    }, {
        sequelize,
        modelName: "Organization",
    });
    return Organization;
};