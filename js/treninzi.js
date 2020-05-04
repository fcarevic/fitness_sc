$(document).ready(function () {
    
   var treninzi = { 
     
    "yoga1" : {
        "ime": "Yoga1",
        "termini": ["8:30-10", "10-12", "12-14", "14-15", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    },

     "yoga2" : {
        "ime": "Yoga2",
        "termini": ["8-10", "10-12", "12-14", "14-16", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    },

    "yoga3": {
        "ime": "Yoga3",
        "termini": ["8-10", "10-12", "12-14", "14-16", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    },

    "pilates1" : {
        "ime": "Pilates1",
        "termini": ["6:30-8:30", "10-12", "12-14", "14-16", "16-18", "18-20", "21-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    },
    "pilates2" : {
        "ime": "Pilates2",
        "termini": ["8-10", "10-12", "12-14", "14-16", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    },
    "pilates3" : {
        "ime": "Pilates3",
        "termini": ["8-10", "10-12", "12-14", "14-16", "16-18", "18-20", "20-22"], 
        "ponedeljak": [00,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    },
    "core1" : {
        "ime": "core1",
        "termini": ["8-10", "10-12", "12-14", "14-16", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    },
    "core2" : {
        "ime": "core2",
        "termini": ["8-10", "10-12", "12-14", "14-16", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    },
    "core3" : {
        "ime": "core3",
        "termini": ["8-10", "10-12", "12-14", "14-16", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    },
    "cardio1": {
        "ime": "cardio1",
        "termini": ["8-10", "10-12", "12-14", "14-16", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    },
    "cardio2" : {
        "ime": "cardio2",
        "termini": ["8-10", "10-12", "12-14", "14-16", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    },
    "cardio3" : {
        "ime": "cardio3",
        "termini": ["8-10", "10-12", "12-14", "14-16", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    }
    
}

   if(localStorage.getItem("treninziRaspored") == null){
       localStorage.setItem("treninziRaspored", JSON.stringify(treninzi));
   }

  
   var MAXMEMBER = 20;

   
    treninzi = JSON.parse(localStorage.getItem("treninziRaspored"));
    var url = new URL(window.location.href);
    var parameter = url.searchParams.get("trening");

    var trening = treninzi[parameter];
    $("#tipTreninga").text(trening["ime"]);
   
    for ( let i = 0; i < 7; i++ ){
     
            $("#" + i + "" + 0).text(trening["termini"][i]);
            console.log(trening["termini"][i]);
            console.log( "#" + 1 + "" + i);
        
    }

    var danUNedelji = ["ponedeljak","utorak","sreda","cetvrtak","petak","subota","nedelja"];

      

    var date = new Date();
    var currentDay = date.getDay();
    if( currentDay == 0) currentDay = 7;

    var currentHour = date.getHours();
    var currentMinutes = date.getMinutes();

    for ( let i = 0; i < 7; i++ ){
        for(let j = 1; j <= 7;j ++){

            $("#" + i + "" + j).attr("value","Dostupno " + trening[danUNedelji[j - 1]][i] + "/20");
            
            var regex = /^Dostupno (..|.)\/20$/;
            var text =  $("#" + i + "" + j).attr("value");
            var number = parseInt(text.match(regex)[1]);
            if( number == MAXMEMBER ){
                $("#" + i + "" + j).attr("disabled","disabled");
            }


            if(localStorage.getItem("rezervisaniTreninzi") == null){
                rezervisaniTreninzi = [];
            } else {
                rezervisaniTreninzi = JSON.parse(localStorage.getItem("rezervisaniTreninzi"));
            }
    
             if ( rezervisaniTreninzi != [] && rezervisaniTreninzi.find(function(jedanTrening){
    
                return jedanTrening.ime == trening["ime"] && 
                jedanTrening.termin == trening["termini"][i] && 
                jedanTrening.dan ==  danUNedelji[j - 1] }) != null ){
                    $("#" + i + "" + j).attr("disabled","disabled");
            }
            //Dodati da ne moze da rezervise ako je proslo vreme treninga 

               
            var treningName = trening.ime;
            var dan = j;
            var termin = trening["termini"][i];

            var regex = /^(..|.):?(.|..)?-.{1,5}$/;
            var result = termin.match(regex);
            var treningDan = dan;
            var treningHour = parseInt(result[1]);
            var treningMinutes = 0;
            regex = /^.{1,2}:(.|..)-.{1,5}$/;
            var result = termin.match(regex);
            if(result != null){
                treningMinutes = parseInt(result[1]);
            }
            if( currentDay > treningDan || ( currentDay==treningDan && currentHour > treningHour) || ( currentDay==treningDan && currentHour == treningHour && currentMinutes>= treningMinutes) ){
                $("#" + i + "" + j).attr("disabled","disabled");
            }

    
        }
    }


    $(".scheduleTrening").click(function(){


        var regex = /^Dostupno (..|.)\/20$/;
        var text = $(this).attr("value");
        var number = parseInt(text.match(regex)[1]);
        var id = $(this).attr("id");
        var row = parseInt(id.charAt(0));
        var col = parseInt(id.charAt(1));

        treninzi = JSON.parse(localStorage.getItem("treninziRaspored"));
        var url = new URL(window.location.href);
        var parameter = url.searchParams.get("trening");

        var trening = treninzi[parameter];


        if(localStorage.getItem("rezervisaniTreninzi") == null){
            rezervisaniTreninzi = [];
        } else {
            rezervisaniTreninzi = JSON.parse(localStorage.getItem("rezervisaniTreninzi"));
        }

        

        number++;
        console.log(number);  
        $(this).attr("disabled","disabled");
        $(this).attr("value", "Dostupno " + number + "/20");
        trening[danUNedelji[col - 1]][row]++;
        localStorage.setItem("treninziRaspored", JSON.stringify(treninzi));
        rezervisaniTreninzi.push({
                "ime":trening["ime"],
                "termin": trening["termini"][row], 
                "dan" : danUNedelji[col - 1]
        })
        console.log(rezervisaniTreninzi);
        localStorage.setItem("rezervisaniTreninzi", JSON.stringify(rezervisaniTreninzi));
       
    })

});