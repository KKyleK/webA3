//This needs to have all the functions. 



const paintingData = require("./paintingProvider.js");


const handleAll = app => {
    app.get('/api/paintings', (req, resp) => {
        resp.json(paintingData);
    });
}

const handleById = app => {

    app.get("/api/paintings/:id", (req,resp) => {

        const matches = paintingData.filter(p => p.paintingID == req.params.id);       //filter targets arrays of objects (not json)
        if (matches.length> 0 ){
            resp.json(matches);
        }
        else{
            resp.json({"message": "no paintings for provided id"});
        }
});
}

const handleById = app => {

    app.get("/api/paintings/:id", (req,resp) => {

        const matches = paintingData.filter(p => p.paintingID == req.params.id);       //filter targets arrays of objects (not json)
        if (matches.length> 0 ){
            resp.json(matches);
        }
        else{
            resp.json({"message": "no paintings for provided id"});
        }
});
}






module.exports = {
    handleAll,handleById          //this is now a function I can invoke in main.js 
};