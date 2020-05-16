$(document).ready(function () {
    
   var treninzi = { 
     
    "yoga1" : {
        "ime": "Karma Yoga",
        "termini": ["8-10", "12-14", "12-14", "14-15", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [20,0,0,0,0,0,0]
    },

     "yoga2" : {
        "ime": "Radža Yoga",
        "termini": ["21:10-10", "10-12", "12-14", "14-16", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    },

    "yoga3": {
        "ime": "Hata Yoga",
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
        "ime": "Klasični pilates",
        "termini": ["14-16", "18-20", "12-14", "14-16", "16-18", "18-20", "21-22"], 
        "ponedeljak": [20,20,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [11,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [20,20,0,0,0,20,00]
    },
    "pilates2" : {
        "ime": "Reformer pilates",
        "termini": ["16-18", "12-13", "12-14", "14-16", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [20,0,0,0,0,0,0]
    },
    "pilates3" : {
        "ime": "Stott pilates",
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
        "ime": "Crossfit",
        "termini": ["16:30-18:30", "18:30-20:30", "12-14", "14-16", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    },
    "core2" : {
        "ime": "Abdomenalni trening",
        "termini": ["15-16:30", "18:30-20:30", "12-14", "14-16", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    },
    "core3" : {
        "ime": "Klasični trening",
        "termini": ["21-23", "23-1", "12-14", "14-16", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    },
    "cardio1": {
        "ime": "Kardio Boks",
        "termini": ["8-10", "12-14", "12-14", "14-16", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    },
    "cardio2" : {
        "ime": "Trčanje",
        "termini": ["10-12", "14-16", "12-14", "14-16", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    },
    "cardio3" : {
        "ime": "Kružni trening",
        "termini": ["6-8", "16-18", "12-14", "14-16", "16-18", "18-20", "20-22"], 
        "ponedeljak": [0,0,0,0,0,0,0],
        "utorak":  [20,10,10,0,0,0,0],
        "sreda": [0,0,0,0,0,0,0],
        "cetvrtak": [0,0,0,0,0,0,0],
        "petak": [0,0,0,0,0,0,0],
        "subota": [0,0,0,0,0,0,0],
        "nedelja": [0,0,0,0,0,0,0]
    }
    
}

imenaTreningaSerbian = {
    "yoga1":   "Karma Joga",
    "yoga2": "Radža Joga",
    "yoga3": "Hata Joga",
    "pilates1": "Klasični pilates",
    "pilates2": "Reformer pilates",
    "pilates3":"Stott pilates",
    "core1": "Crossfit",
    "core2": "Abdomenalni trening",
    "core3": "Klasični trening",
    "cardio1":"Kardio Box",
    "cardio2": "Trčanje",
    "cardio3" : "Kružni trening"

}
 
imenaTreningaEnglish = {
    "yoga1":"Kharma Yoga"  ,
    "yoga2": "Raja Yoga",
    "yoga3":"Hatha Yoga",
    "pilates1":"Classical pilates",
    "pilates2":"Reformer pilates",
    "pilates3":"Stott pilates",
    "core1":"Crossfit",
    "core2":"Abodminal training",
    "core3":"Classical training",
    "cardio1":"Cardio Box",
    "cardio2":"Running",
    "cardio3": "Circular training"

}

   if(localStorage.getItem("treninziRaspored") == null){
       localStorage.setItem("treninziRaspored", JSON.stringify(treninzi));
   }

   


   treninzi = JSON.parse(localStorage.getItem("treninziRaspored"));

   treninziBase = ["pilates", "yoga", "core", "cardio"]


   
   var danUNedeljiSrpski = ["Ponedeljak","Utorak","Sreda","Cetvrtak","Petak","Subota","Nedelja"];
   var danUNedeljiEngleski  = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
   var daniZaTabelu = [];

   var danUNedelji = ["ponedeljak","utorak","sreda","cetvrtak","petak","subota","nedelja"];
   var zakazanTrening = "Zakazan"
   var prosaoTrening = "prosao"
   var breadpart1 = "Zakazivanje treninga";
   var breadpart2 = "imeTreninga";
   var dostupanTrening = "Dostupno";
   var imenaToUSe = imenaTreningaSerbian;
   var canceled ="Otkazan";
   var imateZakazaniUDatomTerminu = "Imate zakazan trening u datom terminu";


   if(localStorage.getItem("lang") == null || localStorage.getItem("lang") == "rs"){
  
        daniZaTabelu = danUNedeljiSrpski;
        zakazanTrening = "   Rezervisan  ";
        prosaoTrening = "      Prosao     ";
        breadpart1 = "Rezervisanje treninga";
        dostupanTrening = "Dostupno";
        imenaToUSe = imenaTreningaSerbian;
        imateZakazaniUDatomTerminu = "Imete zakazan trening u datom terminu";
        $("#lang").text("en");
        
       

   }else {
       if(localStorage.getItem("lang")=="en"){

            daniZaTabelu = danUNedeljiEngleski;
            zakazanTrening = "    Reserved   ";
            prosaoTrening = "     Finished    ";
            breadpart1 = "Training reservation";
            var dostupanTrening = "Available";
            imenaToUSe = imenaTreningaEnglish;
            canceled ="Otkazan";
            imateZakazaniUDatomTerminu = "You have training in this termin";          
            $("#lang").text("rs");
       }
   }

  for(let i = 2;i<=8;i++){
      $("#" + i).text(daniZaTabelu[i - 2])
  }
 

$("#lang").click(function(){

    if($(this).text() == "en"){
            imenaToUSe = imenaTreningaEnglish;

            for ( let i = 0; i < 2; i++ ){
                for(let j = 1; j <= 7;j ++){

                    var vrednost = $("#" + i + "" + j).attr("value");

                    if(vrednost == canceled){
                        $("#" + i + "" + j).attr("value","Canceled"); 
                        $("#" + i + "" + j).attr("disabled","disabled");  
                        continue;
                    }
                
                    if(vrednost == zakazanTrening) {
                        $("#" + i + "" + j).attr("value",  "    Reserved   ");
                    } else {
                        if(vrednost==prosaoTrening) {
                            $("#" + i + "" + j).attr("value","     Finished    ");
                        } else {
                                var regex = /^.*Dostupno (..|.)$/;
                                var text =  $("#" + i + "" + j).attr("value");
                                console.log(text);
                                var number = parseInt(text.match(regex)[1]);
                                dostupanTrening = "Available";
                                $("#" + i + "" + j).attr("value", dostupanTrening + " " + number);
                        }
                    }
        
                }
            }

        canceled = "Canceled"
        daniZaTabelu = danUNedeljiEngleski;
        zakazanTrening = "    Reserved   ";
        prosaoTrening = "     Finished    ";
        breadpart1 = "Training reservation";
        dostupanTrening = "Available";
        $("#lang").text("rs");
        localStorage.setItem("lang", "en");
        imateZakazaniUDatomTerminu = "You have training in that";
    }  else {
        imenaToUSe = imenaTreningaSerbian;
        canceled ="Canceled";
        for ( let i = 0; i < 2; i++ ){
            for(let j = 1; j <= 7;j ++){

                
    
                var vrednost = $("#" + i + "" + j).attr("value");

                
                if(vrednost == canceled){
                    $("#" + i + "" + j).attr("value","Otkazan"); 
                    $("#" + i + "" + j).attr("disabled","disabled");  
                    continue;
                }
                if(vrednost == zakazanTrening) {
                    $("#" + i + "" + j).attr("value",  "   Rezervisan  ");
                } else {
                    if(vrednost==prosaoTrening) {
                        $("#" + i + "" + j).attr("value", "      Prosao     ");
                    } else {
                            var regex = /^.*Available (..|.)$/;
                            var text =  $("#" + i + "" + j).attr("value");
                            console.log(text);
                            var number = parseInt(text.match(regex)[1]);
                            dostupanTrening = "Dostupno";
                            $("#" + i + "" + j).attr("value", dostupanTrening + " " + number);
                    }
                }
    
            }
        }

    
        canceled = "Otkazan"
        daniZaTabelu = danUNedeljiSrpski;
        zakazanTrening = "   Rezervisan  ";
        prosaoTrening = "      Prosao     ";
        breadpart1 = "Rezervisanje treninga";
        dostupanTrening = "Dostupno";
        $("#lang").text("en");
        localStorage.setItem("lang", "rs");
        imateZakazaniUDatomTerminu = "Imate zakazan trening u datom terminu";

    }
    

    for(let i = 2;i<=8;i++){
        $("#" + i).text(daniZaTabelu[i - 2])
    }

    var url = new URL(window.location.href);
    var parameter = url.searchParams.get("trening");

    var trening = treninzi[parameter];
    $("#tipTreninga").text(imenaToUSe[parameter]);
    breadpart2 = imenaToUSe[parameter];
    $("#bread1").text(breadpart1);
    $("#bread2").text(breadpart2);


})


 
   var MAXMEMBER = 20;

    var url = new URL(window.location.href);
    var parameter = url.searchParams.get("trening");

    var trening = treninzi[parameter];

    breadpart2 = imenaToUSe[parameter];
    $("#bread1").text(breadpart1);
    $("#bread2").text(breadpart2);

   $("#tipTreninga").text(imenaToUSe[parameter]);

   
    for ( let i = 0; i < 2; i++ ){
            $("#" + i + "" + 0).text(trening["termini"][i]);   
    }

      

    var date = new Date();
   
  
    for ( let i = 0; i < 2; i++ ){
        for(let j = 1; j <= 7;j ++){

            if(trening[danUNedelji[j - 1]][i] == -1){
                $("#" + i + "" + j).attr("value",canceled); 
                $("#" + i + "" + j).attr("disabled","disabled");  
                continue;
            }

            $("#" + i + "" + j).attr("value","  " + dostupanTrening + " " + (20 - trening[danUNedelji[j - 1]][i]));
            
            if( dostupanTrening == "Dostupno" )
                    var regex = /^.*Dostupno (..|.)$/;
            else 
                var regex = /^.*Available (..|.)$/;
            var text =  $("#" + i + "" + j).attr("value");
            var number = parseInt(text.match(regex)[1]);
            var number = 20 - number;
            if( number == MAXMEMBER ){
                $("#" + i + "" + j).attr("disabled","disabled");
            }


            termin = trening["termini"][i];
            var begining = getTerminDateBegining(termin,j);
            var end = getTerminDateEnd(termin, j);
            if(localStorage.getItem("rezervisaniTreninzi") == null){
                rezervisaniTreninzi = [];
            } else {
                rezervisaniTreninzi = JSON.parse(localStorage.getItem("rezervisaniTreninzi"));
            }
    
             if ( rezervisaniTreninzi != [] && rezervisaniTreninzi.find(function(jedanTrening){
                return jedanTrening.ime == trening["ime"] && 
                  jedanTrening.pocetak == begining.getTime() &&
                  jedanTrening.kraj == end.getTime();
                }) != null ){
                    $("#" + i + "" + j).attr("disabled","disabled");
                    $("#" + i + "" + j).attr("value",zakazanTrening);
                }
   


            if(date.getTime()>begining.getTime()){
                $("#" + i + "" + j).attr("disabled","disabled");
                $("#" + i + "" + j).attr("value", prosaoTrening);
            }

    
        }
    }


    $(".scheduleTrening").click(function(){
        if( dostupanTrening == "Dostupno" )
                 var regex = /^.*Dostupno (..|.)$/;
        else 
                 var regex = /^.*Available (..|.)/;
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

     var begining = getTerminDateBegining(trening["termini"][row], col);
      var end = getTerminDateEnd(trening["termini"][row], col);
     
        found = false;
        rezervisaniTreninzi.forEach(jedanTrening => {
            if(begining.getTime() >= jedanTrening.pocetak && begining.getTime() <jedanTrening.kraj ||
            end.getTime()>jedanTrening.pocetak && end.getTime()<=jedanTrening.kraj ){
                found = true;
            }
            
        });

        if(found){
            alert(imateZakazaniUDatomTerminu);
            return;
        }
        

        number++;
        console.log(number);  
        $(this).attr("disabled","disabled");
        $(this).attr("value", zakazanTrening);
       
        trening[danUNedelji[col - 1]][row]++;
        localStorage.setItem("treninziRaspored", JSON.stringify(treninzi));
              
        rezervisaniTreninzi.push({
                "ime":trening["ime"],
                "termin": trening["termini"][row], 
                "dan" : danUNedelji[col - 1],
                "pocetak":begining.getTime(),
                "kraj":end.getTime(), 
                "defaultIme":parameter
        })
        console.log(rezervisaniTreninzi);
        localStorage.setItem("rezervisaniTreninzi", JSON.stringify(rezervisaniTreninzi));
       
    })

    localStorage.setItem("treninziRaspored", JSON.stringify(treninzi));


    function getTerminDateBegining(termin, dayOfWeek){
        var regex = /^(..|.):?(.|..)?-.{1,5}$/;
        var result = termin.match(regex);
        var treningHour = parseInt(result[1]);
        var treningMinutes = 0;
        regex = /^.{1,2}:(.|..)-.{1,5}$/;
        var result = termin.match(regex);
        if(result != null){
            treningMinutes = parseInt(result[1]);
        }
    
        var begining = new Date();
        var day = begining.getDay();
        if  (day == 0) day = 7;
        var dif = dayOfWeek - day ;
        begining.setMinutes(parseInt(treningMinutes));
        begining.setHours(parseInt(treningHour));
        begining.setSeconds(0);
        begining.setMilliseconds(0);
        begining.setTime(begining.getTime() + dif*24*60*60*1000);
      
        return begining;
    }
    
    function getTerminDateEnd(termin, dayOfWeek){
        var regex = /^.{1,5}-(..|.):?(.|..)?$/;
        var result = termin.match(regex);
        var treningHour = parseInt(result[1]);
        var treningMinutes = 0;
        regex = /^.{1,5}-.{1,2}:(.|..)$/;
        var result = termin.match(regex);
        if(result != null){
            treningMinutes = parseInt(result[1]);
        }
    
        var end = new Date();
        var day = end.getDay();
        if  (day == 0) day = 7;
        var dif = dayOfWeek - day ;
        end.setMinutes(parseInt(treningMinutes));
        end.setHours(parseInt(treningHour));
        end.setSeconds(0);
        end.setMilliseconds(0);
        end.setTime(end.getTime() + dif*24*60*60*1000);
        return end;
    }
});


