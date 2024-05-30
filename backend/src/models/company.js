"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.hasMany(models.Customer, {
        targetKey: "id",
        foreignKey: "id",
        as: "customer",
      });
    }
  }
  Company.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      companyName: {
        type: DataTypes.STRING,
        field: "company_name",
      },
      companyEmail: {
        type: DataTypes.STRING,
        field: "company_email",
      },
      companyNumber: {
        type: DataTypes.STRING,
        field: "company_number",
      },
      companyWebsite: {
        type: DataTypes.STRING,
        field: "company_website",
      },
      companyAddress: {
        type: DataTypes.STRING,
        field: "company_address",
      },
      totalEmployee: {
        type: DataTypes.STRING,
        field: "total_employee",
      },
      userName: {
        type: DataTypes.STRING,
        field: "user_Name",
      },
      password: {
        type: DataTypes.STRING,
        field: "password",
      },
      companyLogo: {
        type: DataTypes.STRING,
        field: "company_logo",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "create_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      sequelize,
      modelName: "Company",
      timestamps: true,
      underscored: true,
      defaultScope: {
        // exclude hash by default
        attributes: { exclude: ["password"] },
      },
      scopes: {
        // include hash with this scope
        withHash: { attributes: {} },
      },
    }
  );
  return Company;
};
