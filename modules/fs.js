const { error } = require('console');
const fs = require('fs');
const path = require('path');


//Create a directory
fs.mkdir(path.join(__dirname, "/test"), (error)=>{
    if(error){
        console.log('Erro :', error);
    }

    console.log("Directory created with success");
});

//Create a file into the created directory
fs.writeFile(path.join(__dirname, "test", "test.html"), "Hello Node", (error)=>{
    if(error){
        console.log("Error:", error);
    }
    console.log("Successfull script of archive creation");

    //Append an info to the archive
    fs.appendFile(path.join(__dirname, "test", "test.html"), " and the appendend info", (error)=>{
        if(error){
            console.log("Error :", error);
        }
    
        console.log("Info appended with sucess");
    })

    //Read the created file
    fs.readFile(path.join(__dirname, "/test", "test.html"), "utf8", (error,data)=>{
    if(error){
        console.log("Error :", error);
    }
    console.log("Archive info : ",data);
    })
});


