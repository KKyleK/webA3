const galleryData = require("./galleryProvider.js");
const gallerydata = require("./galleryProvider.js");


const handleAll = app => {
    app.get('/', (req, resp) => {
        resp.json(galleryData);
    });
}

module.exports = {
    handleAll         //this is now a function I can invoke in main.js 
};