const express = require('express');
const app = express();

const paintingRouter = require("./scripts/paintingRouter.js");   //has handlers
const artistRouter = require("./scripts/artistRouter.js");   //has handlers
const galleryRouter = require("./scripts/galleryRouter.js")

paintingRouter.handleAll(app);   //uses the handleAll. EX: localhost:8080/
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

app.listen(port,()=> {  

    console.log(`Server is running on port ${port}`);
});