'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let data = [
      {
        image: "https://c.tenor.com/fJAoBHWymY4AAAAC/do-not-touch-it-programmer.gif",
        caption: "It works! Don't touch it",
        category: "Technology",
        UserId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: "https://i.imgflip.com/5f7ibr.jpg",
        caption: "Waiting for Response, Response: CORS",
        category: "Technology",
        UserId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        image: "https://miro.medium.com/max/564/1*AXsQ5DNPONfMCbNC1HhXqQ.jpeg",
        caption: "User : Awesome page, perfect feature",
        category: "Technology",
        UserId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    await queryInterface.bulkInsert("Memes", data)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Memes", null, {});
  }
};
