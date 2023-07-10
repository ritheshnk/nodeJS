const fs= require("fs");

fs.writeFile("greetings.txt","Hello Rithesh",(err)=>{
    if(err) throw err;
    console.log("the file is saved sucessfully");
})