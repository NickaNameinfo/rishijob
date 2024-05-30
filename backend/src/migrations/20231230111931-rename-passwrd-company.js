"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Rename the columns
    await queryInterface.renameColumn(
      "companies",
      "company_website",
      "passowrd"
    );
    // Add more renameColumn calls as needed

    // For example:
    // await queryInterface.renameColumn('your_table_name', 'old_column_name_2', 'new_column_name_2');
  },

  down: async (queryInterface, Sequelize) => {
    // In case you need to rollback, you can revert the changes here
    await queryInterface.renameColumn(
      "companies",
      "company_website",
      "passowrd"
    );
    // Add more renameColumn calls as needed

    // For example:
    // await queryInterface.renameColumn('your_table_name', 'new_column_name_2', 'old_column_name_2');
  },
};
