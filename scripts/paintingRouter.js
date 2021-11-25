const data = require("./paintingProvider.js");

// Add More calls below... (1 per function)

const handleAll = app => {
    app.get('/', (req, resp) => {
        resp.json(data);
    });
}

module.exports = {
    handleAll         //this is now a function I can invoke in main.js 
};