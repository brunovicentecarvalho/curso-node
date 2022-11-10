const mongoose = require ('mongoose');

const connectToDB = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.clgtmsc.mongodb.net/?retryWrites=true&w=majority`,(error)=>{
        if(error){
            return console.log("Error to connect to DB");
        }

        return console.log("Sucessfull connect to DB");
    });

}

module.exports = connectToDB;