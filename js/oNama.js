positionsSerbian = {

    "position1":{
        "ime": "Lični Trener", 
         "opis":"Nesto lepo o njemu, sta je radio"
    }
,
    
    "position2":{
        "ime": "Lični Trener", 
         "opis":"Nesto lepo o njemu, sta je radio"
    },

    "position3":{
        "ime": "Nutricionista", 
         "opis":"Nesto lepo o njemu, sta je radio"
    },


}

positionsEnglish = {

    "position1":{
        "ime": "Personal training", 
         "opis":"Something nice"
    }
,
    
    "position2":{
        "ime": "Personal training", 
         "opis":"Something nice"
    },

    "position3":{
        "ime": "Nutritionist", 
         "opis":"Something nice"
    },


}

nagradeSerbian={

    "2020":{
        "mesto": "Prvo mesto",
        "opis":"Nesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestu"
    },
    "2019":{
        "mesto": "Drugo mesto",
        "opis":"Nesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestu"
    },
    "2018":{
        "mesto": "Treče mesto",
        "opis":"Nesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestu"
    },
    "2017":{
        "mesto": "Počeli sa radom",
        "opis":"Nesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestu"
    }

}
nagradeEnglish={

   "2020":{
        "mesto": "First place",
        "opis":"Something about placeSomething about placeSomething about placeSomething about placeSomething about placeSomething about placeSomething about placeSomething about placeSomething about place"
    },
    "2019":{
        "mesto": "Second place",
        "opis":"Something about placeSomething about placeSomething about placeSomething about placeSomething about place"
    },
    "2018":{
        "mesto": "Third place",
        "opis":"Something about placeSomething about placeSomething about placeSomething about placeSomething about place"
    },
    "2017":{
        "mesto": "First open",
        "opis":"Something about placeSomething about placeSomething about placeSomething about placeSomething about placeSomething about place"
    }

}


var positions = positionsSerbian;
var nagrade = nagradeSerbian;
if(localStorage.getItem("lang")==null || localStorage.getItem("lang")=="rs"){
                positions = positionsSerbian;
                nagrade = nagradeSerbian;



}else{
                 positions = positionsEnglish;
                 nagrade = nagradeEnglish;

}

for(let i = 0; i<=3; i++){
    $("#" + (2020-i)+"title").text(nagrade[(2020-i)+""]["mesto"]);
    $("#" + (2020-i)+"body").text(nagrade[(2020-i)+""]["opis"]);
}


for(let i = 1; i<=3;i++){
    $("#position" + i).text(positions["position" + i]["ime"]);
    $("#positionDescription" + i).text(positions["position" + i]["opis"]);
}