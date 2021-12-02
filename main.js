const express = require('express');
const app = express();

const paintingRouter = require("./scripts/paintingRouter.js");   //Import the api requests.
const artistRouter = require("./scripts/artistRouter.js");       
const galleryRouter = require("./scripts/galleryRouter.js")

paintingRouter.handleAll(app);                //Handle the api requests
paintingRouter.handleById(app);
paintingRouter.handleByGalleryId(app); 
paintingRouter.handleByArtistId(app);
paintingRouter.handleByDate(app);
paintingRouter.handleByText(app);
paintingRouter.handleByName(app);

artistRouter.handleAll(app);
artistRouter.handleByCountry(app);

galleryRouter.handleAll(app);
galleryRouter.handleByCountry(app);
let port = 8080;

app.listen(port,()=> {      //start server
    console.log(`Server is running on port ${port}`);
});