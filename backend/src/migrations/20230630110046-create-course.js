"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Courses", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      jobTitle: {
        type: Sequelize.STRING,
        field: "job_title",
      },
      jobCategory: {
        type: Sequelize.STRING,
        field: "job_category",
      },
      salaryFrom: {
        type: Sequelize.STRING,
        field: "salary_from",
      },
      salaryTo: {
        type: Sequelize.STRING,
        field: "salary_to",
      },
      jobLocation: {
        type: Sequelize.STRING,
        field: "job_location",
      },
      jobdesCription: {
        type: Sequelize.STRING,
        field: "job_description",
      },
      jobSkills: {
        type: Sequelize.STRING,
        field: "job_skills",
      },
      jobQualification: {
        type: Sequelize.STRING,
        field: "job_qualification",
      },
      courseStatus: {
        type: Sequelize.STRING,
        field: "course_status",
      },
      createdAt: {
        type: Sequelize.DATE,
        field: "create_at",
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Courses");
  },
};
