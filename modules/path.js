const path = require('path');

//Archive name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//Archive extension
console.log(path.extname(__filename));

//Archive infos
console.log(path.parse(__filename));

//Join path of archives
console.log(path.join(__dirname, "test", "test2"));