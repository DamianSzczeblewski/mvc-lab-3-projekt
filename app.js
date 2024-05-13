const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const homeRouter = require("./routes/home");
const eventRouter = require("./routes/events");

const PORT = 3000;

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(eventRouter);
app.use(homeRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost${PORT}`)
});