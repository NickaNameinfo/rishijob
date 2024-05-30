"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Job.hasMany(models.Customer, {
        targetKey: "id",
        foreignKey: "id",
        as: "customer",
      });
    }
  }
  Job.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      userName: {
        type: DataTypes.STRING,
        field: "user_name",
      },
      name: {
        type: DataTypes.STRING,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        field: "phone_number",
      },
      email: {
        type: DataTypes.STRING,
      },
      jobTitle: {
        type: DataTypes.STRING,
        field: "job_title",
      },
      jobCategory: {
        type: DataTypes.STRING,
        field: "job_category",
      },
      jobLocation: {
        type: DataTypes.STRING,
        field: "job_location",
      },
      experience: {
        type: DataTypes.STRING,
      },
      resume: {
        type: DataTypes.STRING,
      },
      companyName: {
        type: DataTypes.STRING,
        field: "company_name",
      },
      jobStatus: {
        type: DataTypes.STRING,
        field: "job_status",
      },
      companyId: {
        type: DataTypes.STRING,
        field: "companyId",
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
      modelName: "Job",
      timestamps: true,
      underscored: true,
    }
  );
  return Job;
};
