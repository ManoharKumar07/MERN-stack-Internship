const path = require("path");

function PathFunction() {
    console.log(`basename - ${path.basename('C:\\temp\\myfile.html')}`);
    
    console.log(`dirname - ${path.dirname('C:\\temp\\myfile.html')}`); // Corrected this line
    
    console.log(`extname - ${path.extname(__filename)}`);
}

module.exports = PathFunction;
