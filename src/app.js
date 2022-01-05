const fs = require("fs");
//  fs is file system
const {addMovie} = require("./utils/index");
// argv is an argument vector, the key

const app = () => {
    if (process.argv[2] === "title" && process.argv[4] === "actor") {
        addMovie(process.argv[3], process.argv[5]); 
        
        // const stringyObj = JSON.stringify({title: process.argv[3], actor: process.argv[5]});
        // fs.writeFileSync("./storage.json", stringyObj)
        // fs.writeFileSync("storage.txt", `title: ${process.argv[3]}, actor: ${process.argv[5]}`);
    } else {
        console.log("I don't understand!!!!!")
    }
    
    
};
app();