const fs = require('fs');
const path = require('path');

const artistsPath = path.join(__dirname,'../data',"artists.json");  
const artistsJson = fs.readFileSync(artistsPath, 'utf8');  

module.exports = artistsJson;