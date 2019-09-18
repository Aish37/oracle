var firstavenger = {
    title : "Ironman",
    power : 7
};

let secret = "Secret Mission";

let avengerslist = ["Ironman", "Captain America", "Thor", "Caprain Marvel", "Dr Strange", "Scarlet Witch", "Black Panther", "Black Widow", "Spiderman", "Hulk","Vision", "Hawkeye", "Antman"]

function checkpower(){
    if(firstavenger.power > 5){
        let temp = firstavenger.title+" is strong";
        firstavenger.title = temp;
    }
    return { htitle : firstavenger.title };
};

function showmission(){
    return secret
};
module.exports.firstavenger = firstavenger;
module.exports.checkpower = checkpower;
module.exports.avengerslist = avengerslist;