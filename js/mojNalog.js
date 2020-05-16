$(document).ready(function () {


    
    var startRow = "<tr>"
    var startCol = "<td>"
    var endRow = "</\td>"
    var endCol = "</\td>"


    headerSerbian  = ["Ime", "Dan", "Termin", "Otkazi"];
    headerEnglish = ["Name", "Day", "Termin", "Cancel"];
    
    var treningToDanSerbian = {
        "nedelja" : "nedelja",
        "ponedeljak" : "ponedeljak",
        "utorak" :  "utorak",
        "sreda" : "sreda",
        "cetvrtak" : "cetvrtak",
        "petak" : "petak",
        "subota" :"subota" 
 };

 var treningToDanEnglish = {
    "nedelja" : "sunday" ,
    "ponedeljak" :"monday",
    "utorak" : "tuesday",
    "sreda" :  "wednesday",
    "cetvrtak":"thursday",
    "petak"  :  "friday",
    "subota" :  "saturday" 
};
  
var terminToSerbian = {
    "nedelja" : "nedelja",
    "ponedeljak" : "ponedeljak",
    "utorak" :  "utorak",
    "sreda" : "sreda",
    "cetvrtak" : "cetvrtak",
    "petak" : "petak",
    "subota" :"subota" ,
    "sunday":"nedelja" ,
    "monday":"ponedeljak",
    "tuesday":"utorak",
    "wednesday":"sreda",
    "thursday":"cetvrtak",
    "friday":"petak",
    "saturday" :"subota"
};


imenaTreningaSerbian = {
    "Karma Yoga": "Karma Joga",
    "Radža Yoga": "Radža Joga",
    "Hata Yoga" : "Hata Joga",
    "Klasični pilates" : "Klasični pilates",
    "Reformer pilates" :"Reformer pilates",
    "Stott pilates":"Stott pilates",
    "Crossfit" :"Crossfit",
    "Abdomenalni trening":"Abdomenalni trening",
    "Klasični trening" : "Klasični trening",
    "Kardio Box":"Kardio Boks",
    "Trčanje": "Trčanje",
    "Kružni trening" : "Kružni trening",

}


imenaTreningaEnglish = {
    "Karma Yoga": "Kharma Yoga",
    "Radža Yoga": "Raja Yoga",
    "Hata Yoga" : "Hatha Yoga",
    "Klasični pilates" : "Classical pilates",
    "Reformer pilates" :"Reformer pilates",
    "Stott pilates":"Stott pilates",
    "Crossfit" :"Crossfit",
    "Abdomenalni trening":"Abdominal training",
    "Klasični trening" : "Classical training",
    "Kardio Box":"Cardio Box",
    "Trčanje": "Running",
    "Kružni trening" : "Circular training",

}

imenaTreninga = {
    "Karma Joga": "Karma Yoga",
    "Radža Joga": "Radža Yoga",
    "Hata Joga" : "Hata Yoga",
    "Klasični pilates" : "Klasični pilates",
    "Reformer pilates" :"Reformer pilates",
    "Stott pilates":"Stott pilates",
    "Crossfit" :"Crossfit",
    "Abdomenalni trening":"Abdomenalni trening",
    "Klasični trening" : "Klasični trening",
    "Kardio Box":"Kardio Box",
    "Trčanje": "Trčanje",
    "Kružni trening" : "Kružni trening",
    "Kharma Yoga" : "Karma Yoga" ,
    "Raja Yoga" : "Radža Yoga",
    "Hatha Yoga" : "Hata Yoga",
    "Classical pilates" :"Klasični pilates",
    "Reformer pilates" :"Reformer pilates",
    "Stott pilates" :"Stott pilates",
    "Crossfit" :"Crossfit",
    "Abodminal training":"Abdomenalni trening",
    "Classical training" :"Klasični trening",
    "Cardio Box" : "Kardio Box",
    "Running":"Trčanje",
    "Circular training":"Kružni trening"

}


var daniToUse = treningToDanSerbian;
var treningToUse = imenaTreningaSerbian;
var nemaZakazanih = "Nemate zakazazanih treninga";
var buttonOtkazi = "Otkazi";
var header = headerEnglish;

if(localStorage.getItem("lang")==null || localStorage.getItem("lang")=="rs"){
        header = headerSerbian;
        buttonOtkazi = "Otkazi";
        $("#bread1").text("Moj profil");
        daniToUse = treningToDanSerbian;
        $("#lang").text("en");
        treningToUse = imenaTreningaSerbian;
        nemaZakazanih = "Nemate zakazazanih treninga";
        
       
     


}
else{
    header = headerEnglish;
    buttonOtkazi = "Cancel";
    $("#bread1").text("My profile")
    $("#lang").text("rs");
    daniToUse = treningToDanEnglish;
    treningToUse = imenaTreningaEnglish;
    nemaZakazanih = "You don't have any training scheduled";

}



for(let i = 0;i<=3;i++){
    $("#" + i).text(header[i]);
}



$("#lang").click(function(){
    if($(this).text() == "en"){
        header = headerEnglish;
        buttonOtkazi = "Cancel";
        $("#bread1").text("My profile")
        $("#lang").text("rs");
        treningToUse = imenaTreningaEnglish;
        nemaZakazanih = "You don't have any training scheduled";
    
        localStorage.setItem("lang", "en");
        daniToUse = treningToDanEnglish;

    } else{
        header = headerSerbian;
        buttonOtkazi = "Otkazi";
        $("#bread1").text("Moj profil");
        daniToUse = treningToDanSerbian;
        $("#lang").text("en");
        localStorage.setItem("lang", "rs");
        treningToUse = imenaTreningaSerbian;
        nemaZakazanih = "Nemate zakazazanih treninga";
        
       
    }

     $("#zakazaniTreninziTabelaTelo").empty();
    
     if(localStorage.getItem("rezervisaniTreninzi") == null || JSON.parse(localStorage.getItem("rezervisaniTreninzi")).length == 0){
        $("#zakazaniTreninziTabelaTelo").append(
          startRow + "<td colspan =" + "4" + ">" + nemaZakazanih + endCol + endRow  
        )
    } else {
     prikaziTreninge();
    }

    for(let i = 0;i<=3;i++){
        $("#" + i).text(header[i]);
    }
    addHandler();
    
})

    if(localStorage.getItem("rezervisaniTreninzi") == null || JSON.parse(localStorage.getItem("rezervisaniTreninzi")).length == 0){
        $("#zakazaniTreninziTabelaTelo").append(
          startRow + "<td colspan =" + "4" + ">" + nemaZakazanih + endCol + endRow  
        )
    } else {
        prikaziTreninge();

    }

    function prikaziTreninge(){
        var zakazani = JSON.parse(localStorage.getItem("rezervisaniTreninzi"));
                
        var buttonStart = '<input type="button" class="btn btn-danger otkazi" value=' +  buttonOtkazi;
        var buttonEndDisabled = " disabled>";
        var bittonEndActive = ">";
        var danUNedelji = {
            "nedelja " : 7,
            "ponedeljak" : 1,
            "utorak" : 2,
            "sreda" : 3,
            "cetvrtak" : 4,
            "petak" : 5,
            "subota" :6 
     };
     
    
    
     zakazani.forEach(trening => {
        var buttonEnd = bittonEndActive;
        var date = new Date();
        date.setTime(date.getTime() + 30*60*1000);
        
       
       var begining = trening.pocetak;
       var end = trening.kraj;
       
      
    
       if (date.getTime()>=begining){
         buttonEnd = buttonEndDisabled;
       }
    
        $("#zakazaniTreninziTabelaTelo").append(
            startRow 
            + startCol +  treningToUse[trening.ime] + endCol
            + startCol + daniToUse[trening.dan] + endCol 
            + startCol + trening.termin + endCol
            + startCol + buttonStart + buttonEnd + endCol
            + endRow  
        )
    
    
    
    
    
    });
    
    }
    
    function addHandler(){
        $(".otkazi").click(function () {
            var danToBroj = {
                "nedelja" : 7,
                "ponedeljak" : 1,
                "utorak" : 2,
                "sreda" : 3,
                "cetvrtak" : 4,
                "petak" : 5,
                "subota" :6 
         };
        
            var treningName = $(this).closest('tr').find('td:eq(0)').text();
            var dan = $(this).closest('tr').find('td:eq(1)').text();
            var termin = $(this).closest('tr').find('td:eq(2)').text();
     
     
     
            var zakazani = JSON.parse(localStorage.getItem("rezervisaniTreninzi"));
     
            var begining = getTerminDateBegining(termin, danToBroj[terminToSerbian[dan]]);
            var end = getTerminDateEnd(termin, danToBroj[terminToSerbian[dan]]);

            
            trening =  zakazani.find(function(jedanTrening){
             return (jedanTrening.ime.localeCompare(imenaTreninga[treningName]) == 0 && 
             jedanTrening.pocetak == begining.getTime() && 
             jedanTrening.kraj == end.getTime())
            });
     
            zakazani =  zakazani.filter(function(jedanTrening){
                 return !(jedanTrening.ime.localeCompare(imenaTreninga[treningName]) == 0 && 
                 jedanTrening.pocetak==begining.getTime() && 
                 jedanTrening.kraj == end.getTime())
             });
     
             $(this).parent().parent().remove();
             localStorage.setItem("rezervisaniTreninzi",JSON.stringify(zakazani));
             var treninzi = JSON.parse(localStorage.getItem("treninziRaspored"));
           
     
             if(zakazani.length == 0){
                     $("#zakazaniTreninziTabelaTelo").append(
                         startRow + "<td colspan =" + "4" + ">" + nemaZakazanih + endCol + endRow  
                       )
                 }
            var trening = treninzi[trening.defaultIme];   
            var redNumber = trening["termini"].indexOf(termin);
            trening[terminToSerbian[dan.toLowerCase()]][redNumber]--;
            localStorage.setItem("treninziRaspored", JSON.stringify(treninzi));
         })
    }


    addHandler();

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

