'use strict';

const { hashPassword } = require("../helpers/helper");

module.exports = {
  async up (queryInterface, Sequelize) {
    
    if(process.env.NODE_ENV !== 'production'){
      require("dotenv").config()
    }

    let data = [
      {
        username: "user1",
        email: "user1@email.com",
        password: hashPassword("qwerty"),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "user2",
        email: "user2@email.com",
        password: hashPassword("qwerty"),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert("Users", data)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {})
  }
};



