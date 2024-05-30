"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create the new table
    await queryInterface.createTable("Companies", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      companyName: {
        type: Sequelize.STRING,
        field: "company_name",
      },
      companyEmail: {
        type: Sequelize.STRING,
        field: "company_email",
      },
      companyNumber: {
        type: Sequelize.STRING,
        field: "company_number",
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
      password: {
        type: Sequelize.STRING,
        field: "password",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "create_at",
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "updated_at",
      },
    });

    // Additional configuration like indexes and foreign keys can be added here.
  },

  down: async (queryInterface, Sequelize) => {
    // In case you need to rollback, you can drop the table
    await queryInterface.dropTable("Companies");
  },
};
