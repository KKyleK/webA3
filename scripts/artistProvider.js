const fs = require('fs');
const path = require('path');

const artistsPath = path.join(__dirname,'../data',"artists.json");  
const artistsJson = fs.readFileSync(artistsPath, 'utf8');  
const artistData = JSON.parse(artistsJson);

module.exports = artistData;