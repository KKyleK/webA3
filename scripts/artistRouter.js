const artistData = require("./artistProvider.js");
const message_handler = require("./paintingRouter.js");    //For send_message function

const handleAll = app => {

    app.get("/api/artists", (req,resp) => {

        const matches = artistData;
        message_handler.send_message(resp,matches,"No artists not found.");
    });
}

const handleByCountry = app => {

    app.get("/api/artists/:country" ,(req,resp) => { 
        const matches = artistData.filter(a => a.Nationality.toLowerCase() == req.params.country.toLowerCase());                   //Single '=' so not case sensitive.
        message_handler.send_message(resp,matches,"No artists found with the specified nationality.");
});
}

module.exports = {
    handleAll,handleByCountry       //this is now a function I can invoke in main.js 
};