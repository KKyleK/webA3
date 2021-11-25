
const fs = require('fs');
const path = require('path');

const galleriesPath = path.join(__dirname,"../data","galleries.json"); 
const galleriesJson = fs.readFileSync(galleriesPath, 'utf8'); 

module.exports = galleriesJson;