let Evt = require("events").EventEmitter;
let ee = new Evt();
ee.addListener("oracle", oracleHandler);
// setTimeout(function(){
//     ee.emit("oracle");
// }, 2000);
let count = 0; 
let si = setInterval(function(){
       ee.emit("oracle");
       count+=1;
       if(count >=5){
           clearInterval(si);
           console.log("Oracle happened 5 times");
       }
},2000);

function oracleHandler(){
    console.log("Oracle Event Happened");
};