"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.hasMany(models.Customer, {
        targetKey: "id",
        foreignKey: "id",
        as: "customer",
      });
    }
  }
  Course.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      jobTitle: {
        type: DataTypes.STRING,
        field: "job_title",
      },
      jobCategory: {
        type: DataTypes.STRING,
        field: "job_category",
      },
      salaryFrom: {
        type: DataTypes.STRING,
        field: "salary_from",
      },
      salaryTo: {
        type: DataTypes.STRING,
        field: "salary_to",
      },
      jobLocation: {
        type: DataTypes.STRING,
        field: "job_location",
      },
      jobdesCription: {
        type: DataTypes.STRING,
        field: "job_description",
      },
      jobSkills: {
        type: DataTypes.STRING,
        field: "job_skills",
      },
      jobQualification: {
        type: DataTypes.STRING,
        field: "job_qualification",
      },
      courseStatus: {
        type: DataTypes.STRING,
        field: "course_status",
      },
      companyName: {
        type: DataTypes.STRING,
        field: "company_name",
      },
      hireNumber: {
        type: DataTypes.STRING,
        field: "hire_number",
      },
      jobType: {
        type: DataTypes.STRING,
        field: "job_type",
      },
      hiringCandidates: {
        type: DataTypes.STRING,
        field: "hiring_candidates",
      },
      jobEligibilty: {
        type: DataTypes.STRING,
        field: "job_eligibilty",
      },
      salaryAmount: {
        type: DataTypes.STRING,
        field: "salary_amount",
      },
      salaryType: {
        type: DataTypes.STRING,
        field: "salary_type",
      },
      experince: {
        type: DataTypes.STRING,
        field: "experince",
      },
      companyId: {
        type: DataTypes.STRING,
        field: "companyId",
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
      modelName: "Course",
      timestamps: true,
      underscored: true,
    }
  );
  return Course;
};
