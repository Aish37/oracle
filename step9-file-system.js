let fs = require("fs");

fs.readFile("./temp.txt","utf-8",function(error, data){
    if(error){
        console.log(error.code)
    }else{
        let tempdata = data;
        console.log(tempdata);
    }
});
console.log("Next Line");