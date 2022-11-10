const dotenv = require('dotenv');
const connectToDB = require('./src/database/connect');
dotenv.config();
connectToDB();
require("./modules/express");
//const {Http} = require("./modules/http");

//require("./modules/path")
//require("./modules/fs");
//const empresa = new Empresa("Banco LALALA");
//console.log(empresa.factoryName());
