const fs = require('fs');
const path = require('path');

const paintingsPath = path.join(__dirname,"../data","paintings-nested.json");
const paintingsJson = fs.readFileSync(paintingsPath, 'utf8');
const paintingData = JSON.parse(paintingsJson);

module.exports = paintingData;      //This is NOT json