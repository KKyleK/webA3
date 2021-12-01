const galleryData = require("./galleryProvider.js");
const message_handler = require("./paintingRouter.js");    //For send_message function

const handleAll = app => {

    app.get("/api/galleries", (req,resp) => {

        const matches = galleryData;
        message_handler.send_message(resp,matches,"No galleries found.");
    });
}

const handleByCountry = app => {

    app.get("/api/galleries/:country" ,(req,resp) => { 
        const matches = galleryData.filter(a => a.GalleryCountry.toLowerCase() == req.params.country.toLowerCase());              
        message_handler.send_message(resp,matches,"No galleries found in the specified country.");          
});
}

module.exports = {
    handleAll, handleByCountry     
}
