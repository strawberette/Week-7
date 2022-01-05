const fs = require("fs");
const prompt = require("prompt-sync") ({sigint: true});
const movieArray = fs.existsSync("./storage.json") ? require("../storage.json") : []
// fs.existsSync looks at the file from the perspective of the app.js, which is running in src. require looks at the file from the perspective of the current file (src/utils/index.js), therefore we need the double dot.

const addMovie = (title, actor) => {
    
try {
    let newObj = JSON.stringify({title: title, actor: actor});
    const releaseDate = prompt("What is the movie release date?  ");
    // const final = JSON.stringify( JSON.parse( stringObj ).push( releaseDate) );
    
    newObj = JSON.parse(newObj); //change to obj
    newObj.releaseDate = releaseDate; //add something
  
  
    movieArray.push(newObj)
    fs.writeFileSync("./storage.json", JSON.stringify(movieArray));
    
    // const storage = fs.readFileSync("./storage.json")
  
    // storage.push(releaseDate)

} catch (error) {
    console.log(error)
}
}
module.exports = {
    addMovie
}