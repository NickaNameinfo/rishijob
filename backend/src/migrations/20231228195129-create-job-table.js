"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Jobs", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      userName: {
        type: Sequelize.STRING,
        field: "user_name",
      },
      name: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        field: "phone_number",
      },
      email: {
        type: Sequelize.STRING,
      },
      jobTitle: {
        type: Sequelize.STRING,
        field: "job_title",
      },
      jobCategory: {
        type: Sequelize.STRING,
        field: "job_category",
      },
      jobLocation: {
        type: Sequelize.STRING,
        field: "job_location",
      },
      experience: {
        type: Sequelize.STRING,
      },
      resume: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Jobs");
  },
};
