let fs = require("fs");
var pdata;
fs.readFile("./hero.json","utf-8", function(err, data){
    if(err){
        console.log(err)
    }else{
        pdata = JSON.parse(data);
            console.log(pdata.data);
            pdata.data.push({   
                "title" : "Spiderman",
                "firstName" : "Peter",
                "lastName" : "Parker"
            });
        console.log(pdata.data);
        fs.writeFileSync("./hero.json", JSON.stringify(pdata));
    }
});