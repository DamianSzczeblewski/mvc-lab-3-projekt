const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");
const eventsPath = path.join(rootDir, "data", "events.json");

const getEventsFromFile = (callback) => {
    fs.readFile(eventsPath, (err, data) => {
        if(err) {
            return callback([]);
        }
        callback(JSON.parse(data));
    });
}

module.exports = class Event {
    constructor(nazwa, data, ilosc) {
        this.nazwa = nazwa;
        this.data = data;
        this.ilosc = ilosc;
    }

    static fetchAll(callback) {
        getEventsFromFile(callback);
    }

    static reserve(callback) {
        
    }
};