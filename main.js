const express = require('express');
const app = express();

const paintingRouter = require("./scripts/paintingRouter.js");   //has handlers
// const galleryRouter = require("./scripts/galleryRouter");

paintingRouter.handleAll(app);   //uses the handleAll. EX: localhost:8080/
paintingRouter.handleById(app);
//galleryRouter.



let port = 8080;

app.listen(port,()=> {  

    console.log(`Server is running on port ${port}`);
});