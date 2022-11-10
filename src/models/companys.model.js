const mongoose = require ('mongoose');

const companySchema = new mongoose.Schema({
    companyName:{
        type: String,
        required: true,
    },
    serviceType:{
        type: String,
        required: true
    },
    location:{
        type: String, 
        required: true
    }
});

const CompanyModel = mongoose.model("Company", companySchema);
module.exports = CompanyModel;