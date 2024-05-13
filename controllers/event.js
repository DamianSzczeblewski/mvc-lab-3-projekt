const Event = require("../models/event");

const renderSelectEventPage = (_request, response) => {
  Event.fetchAll((events) => {
    response.render("event", {
      pageTitle: "Rezerwuj bilety",
      events
    })
  })
};

const renderTicketPage = (_request, response) => {
  
};

module.exports = { renderSelectEventPage, renderTicketPage };