const express = require("express");

const eventController = require("../controllers/event");

const router = express.Router();

router.get("/select-event", eventController.renderSelectEventPage);

module.exports = router;