"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add the new columns
    await queryInterface.addColumn("courses", "hire_number", {
      type: Sequelize.STRING,
      allowNull: true, // Adjust the options as needed
    });
    await queryInterface.addColumn("courses", "job_type", {
      type: Sequelize.STRING,
      allowNull: true, // Adjust the options as needed
    });
    await queryInterface.addColumn("courses", "job_eligibilty", {
      type: Sequelize.STRING,
      allowNull: true, // Adjust the options as needed
    });
    await queryInterface.addColumn("courses", "salary_amount", {
      type: Sequelize.STRING,
      allowNull: true, // Adjust the options as needed
    });
    await queryInterface.addColumn("courses", "salary_type", {
      type: Sequelize.STRING,
      allowNull: true, // Adjust the options as needed
    });
  },

  down: async (queryInterface, Sequelize) => {
    // In case you need to rollback, you can remove the added columns here
    await queryInterface.removeColumn("courses", "hire_number");
    await queryInterface.removeColumn("courses", "job_type");
    await queryInterface.removeColumn("courses", "job_eligibilty");
    await queryInterface.removeColumn("courses", "salary_amount");
    await queryInterface.removeColumn("courses", "salary_type");
    // Remove more columns as needed
  },
};
