"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Companies", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      companyName: {
        type: Sequelize.STRING,
        field: "company_name",
      },
      companyWebsite: {
        type: Sequelize.STRING,
        field: "company_website",
      },
      companyAddress: {
        type: Sequelize.STRING,
        field: "company_address",
      },
      totalEmployee: {
        type: Sequelize.STRING,
        field: "total_employee",
      },
      userName: {
        type: Sequelize.STRING,
        field: "user_Name",
      },
      passowrd: {
        type: Sequelize.STRING,
        field: "password",
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
    await queryInterface.dropTable("Companies");
  },
};
