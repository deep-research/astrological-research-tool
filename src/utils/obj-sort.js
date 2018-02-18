var cities = require("./cities.json")
var fs = require('fs');

function SortByName(a, b){
  var aName = a.name.toLowerCase();
  var bName = b.name.toLowerCase();
  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}

var sorted = cities.sort(SortByName);
    
fs.writeFile('city-sort.json', JSON.stringify(sorted), (err) => {  
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Cities saved!');
});