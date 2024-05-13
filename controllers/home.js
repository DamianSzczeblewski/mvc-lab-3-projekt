const Event = require("../models/event");

const renderHomePage = (_request, response) => {
  Event.fetchAll((events) => {
    response.render("home", {
      pageTitle: "Home",
      events
    })
  })
};

module.exports = { renderHomePage };