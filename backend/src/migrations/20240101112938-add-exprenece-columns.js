"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add the new columns
    await queryInterface.addColumn("courses", "experince", {
      type: Sequelize.STRING,
      allowNull: true, // Adjust the options as needed
    });
  },

  down: async (queryInterface, Sequelize) => {
    // In case you need to rollback, you can remove the added columns here
    await queryInterface.removeColumn("courses", "experince");
    // Remove more columns as needed
  },
};
