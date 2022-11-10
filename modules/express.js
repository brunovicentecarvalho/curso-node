const { resolveInclude } = require("ejs");
const express = require("express");
const CompanyModel = require('../src/models/companys.model');

const app = express();
app.use(express.json());
app.use((req,resp,next)=>{
    console.log(req.body);
    console.log(`Request type: ${req.method}`)
    next();
})
app.set("view engine", "ejs");
app.set("views", "src/views");

app.get("/views/companys", async (req,resp)=>{
    const companys = await CompanyModel.find({});
    resp.render("index", { companys });
})
const port = 8080;

app.get("/home", (req, resp)=>{
    try{
        resp.setHeader("content-type","text/html");
        resp.status(200).send("<h1>Hello World<h1>")
    }catch(error){
        resp.status(500).send(error.message);
    }
});

app.get('/registred-companys', async(req,resp)=>{
    try{
        const companys = await CompanyModel.find({});
        resp.status(200).json(companys);
    }catch(error){
        resp.status(500).send(error.message);
    }
})

app.get('/registred-companys/:id', async (req,resp)=>{
    try {
        const id = req.params.id;
        const company = await CompanyModel.find({id});
        return resp.status(200).json(company);
    } catch (error) {
        return resp.status(500).send(error.message)
    }
})

app.post('/registred-companys', async (req,resp)=>{
    try{
        const company = await CompanyModel.create(req.body);
        console.log(company);
        resp.status(201).json(company);
    }catch(error){
        resp.status(500).send(error.message);
    }
})

app.patch('/registred-companys/:id', async (req,resp)=>{
    try {
        const id = req.params.id;
        const company = await CompanyModel.findByIdAndUpdate(id,req.body, {new: true});
        return resp.status(200).json(company);
    } catch (error) {
        return resp.status(500).send(error.message);
    }
});

app.delete('/registred-companys/:id', async (req,resp)=>{
    try {
        const id = req.params.id;
        const company = await CompanyModel.findByIdAndRemove(id);
        return resp.status(200).json(company);
    } catch (error) {
        return resp.status(500).send(error.message);
    }
})

app.listen(port, ()=> {
    console.log(`Express server online on ${port}`);
})