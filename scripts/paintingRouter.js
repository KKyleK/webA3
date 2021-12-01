const paintingData = require("./paintingProvider.js");

const handleAll = app => {

    app.get('/api/paintings', (req, resp) => {

        const matches = paintingData;
        send_message(resp,matches,"Paintings not found."); 
       
    });
}

const handleById = app => {

    app.get("/api/painting/:id", (req,resp) => {

        const matches = paintingData.filter(p => p.paintingID == req.params.id);       
        send_message(resp,matches,"No paintings with the specified id found."); 
       
});
}

const handleByGalleryId = app => {

    app.get("/api/painting/gallery/:id", (req,resp) => {

        const matches = paintingData.filter(p => p.gallery.galleryID == req.params.id);     
        send_message(resp,matches,"No paintings with the specified gallery id found."); 
});
}

const handleByArtistId = app => {

    app.get("/api/painting/artist/:id", (req,resp) => {

        const matches = paintingData.filter(p => p.artist.artistID == req.params.id);       
        send_message(resp,matches,"No paintings with the specified artist id found."); 
});
}

const handleByDate = app => {

    app.get("/api/painting/year/:min/:max", (req,resp) => {

        const matches = paintingData.filter(p => (p.yearOfWork <= req.params.max) &&  (p.yearOfWork >= req.params.min));       
        send_message(resp,matches,"No paintings with the specified date found."); 
});
}




const handleByText = app => {

    app.get("/api/painting/title/:text", (req,resp) => {

        const matches = paintingData.filter(p => {         //P is the paintings
            

            const description = p.details.description;
            const excerpt = p.details.excerpt;
            const word_lower = req.params.text.toLowerCase();


            if (excerpt){
                const lower_excerpt = excerpt.toLowerCase();
                if(lower_excerpt.search(word_lower) != -1){
                    return p;
                }
            }
            if (description){
                const lower_description = description.toLowerCase();
                if(lower_description.search(word_lower) != -1){
                    return p;
                }
            }
        });
        send_message(resp,matches,"No paintings with the given text description found."); 
});
}

const handleByName = app => {

    app.get("/api/painting/color/:name", (req,resp) => {

        const matches = paintingData.filter(p => {         //Tests every painting

            for (let c of p.details.annotation.dominantColors){   //Check each element inside of dominantColors

                const name = c.name;
              //  console.log(name);
                if(name){
                    const lower_name = name.toLowerCase();
                    if(lower_name == req.params.name.toLowerCase()){
                        return p;
                    }
                }
            }
        });
                
        send_message(resp,matches,"No paintings with the specified color name found."); 
});
}


function send_message(resp,matches,error_msg){
    if (matches.length > 0){
        resp.json(matches);
    }
    else{
        resp.json({"message": `${error_msg}`});
    }
    return;
}

module.exports = {
    handleAll, handleById, handleByGalleryId, handleByArtistId, handleByDate, handleByText, handleByName, send_message         //this is now a function I can invoke in main.js 
};