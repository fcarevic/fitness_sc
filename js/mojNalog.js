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
    "Karma Yoga": "Karma Yoga",
    "Radža Yoga": "Raja Yoga",
    "Hata Yoga" : "Hata Yoga",
    "Klasični pilates" : "Klasični pilates",
    "Reformer pilates" :"Reformer pilates",
    "Stott pilates":"Stott pilates",
    "Crossfit" :"Crossfit",
    "Abdomenalni trening":"Abdomenal trening",
    "Klasični trening" : "Klasični trening",
    "Kardio Box":"Kardio Box",
    "Trčanje": "Trčanje",
    "Kružni trening" : "Kružni trening",

}


imenaTreningaEnglish = {
    "Karma Yoga": "Karma Yoga",
    "Radža Yoga": "Radza Yoga",
    "Hata Yoga" : "Hata Yoga",
    "Klasični pilates" : "Classical pilates",
    "Reformer pilates" :"Reformer pilates",
    "Stott pilates":"Stott pilates",
    "Crossfit" :"Crossfit",
    "Abdomenalni trening":"Abdominal trening",
    "Klasični trening" : "Classical trening",
    "Kardio Box":"Cardio Box",
    "Trčanje": "Running",
    "Kružni trening" : "Circular trening",

}

imenaTreninga = {
    "Karma Yoga": "Karma Yoga",
    "Radža Yoga": "Radža Yoga",
    "Hata Yoga" : "Hata Yoga",
    "Klasični pilates" : "Klasični pilates",
    "Reformer pilates" :"Reformer pilates",
    "Stott pilates":"Stott pilates",
    "Crossfit" :"Crossfit",
    "Abdomenalni trening":"Abdomenalni trening",
    "Klasični trening" : "Klasični trening",
    "Kardio Box":"Kardio Box",
    "Trčanje": "Trčanje",
    "Kružni trening" : "Kružni trening",
    "Karma Yoga" : "Karma Yoga" ,
    "Raja Yoga" : "Radža Yoga",
    "Hata Yoga" : "Hata Yoga",
    "Classical pilates" :"Klasični pilates",
    "Reformer pilates" :"Reformer pilates",
    "Stott pilates" :"Stott pilates",
    "Crossfit" :"Crossfit",
    "Abodminal trening":"Abdomenalni trening",
    "Classical trenning" :"Klasični trening",
    "Cardio Box" : "Kardio Box",
    "Running":"Trčanje",
    "Circular trening":"Kružni trening"

}


var daniToUse = treningToDanSerbian;
var treningToUse = imenaTreningaSerbian;
var nemaZakazanih = "Nemate zakazazanih treninga";

if(localStorage.getItem("lang")==null || localStorage.getItem("lang")=="rs"){
        var header = headerSerbian;
        var buttonOtkazi = "Otkazi";
        $("#bread1").text("Moj profil");
        daniToUse = treningToDanSerbian;
        $("#lang").text("en");
        treningToUse = imenaTreningaSerbian;
        nemaZakazanih = "Nemate zakazazanih treninga";
        
       
     


}
else{
    var header = headerEnglish;
    var buttonOtkazi = "Cancel";
    $("#bread1").text("My profil")
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
        var header = headerEnglish;
        var buttonOtkazi = "Cancel";
        $("#bread1").text("My profil")
        $("#lang").text("rs");
        treningToUse = imenaTreningaEnglish;
        nemaZakazanih = "You don't have any training scheduled";
    
        localStorage.setItem("lang", "en");
        daniToUse = treningToDanEnglish;

    } else{
        var header = headerSerbian;
        var buttonOtkazi = "Otkazi";
        $("#bread1").text("Moj profil");
        daniToUse = treningToDanSerbian;
        $("#lang").text("en");
        localStorage.setItem("lang", "rs");
        treningToUse = imenaTreningaSerbian;
        nemaZakazanih = "Nemate zakazazanih treninga";
        
       
    }

     $("#zakazaniTreninziTabelaTelo").empty();
    
     if(sessionStorage.getItem("rezervisaniTreninzi") == null || JSON.parse(sessionStorage.getItem("rezervisaniTreninzi")).length == 0){
        $("#zakazaniTreninziTabelaTelo").append(
          startRow + "<td colspan =" + "4" + ">" + nemaZakazanih + endCol + endRow  
        )
    } else {
      
        var zakazani = JSON.parse(sessionStorage.getItem("rezervisaniTreninzi"));
            
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
            var currentDay = date.getDay();
            if( currentDay == 0) currentDay = 7;
       
            var currentHour = date.getHours();
            var currentMinutes = date.getMinutes();
        
           
           
           
            var dan = trening.dan;
            var termin = trening.termin;

            var regex = /^(..|.):?(.|..)?-.{1,5}$/;
            var result = termin.match(regex);
            var treningDan = danUNedelji[dan];
            var treningHour = parseInt(result[1]);
            treningMinutes = 0;
            console.log(treningMinutes);
            regex = /^.{1,2}:(.|..)-.{1,5}$/;
            var result = termin.match(regex);
            if(result != null){
                treningMinutes = parseInt(result[1]);
            }
            console.log(treningMinutes);

            currentHour = currentHour +  Math.floor((currentMinutes + 30) / 60); 
            currentMinutes =  Math.floor((currentMinutes + 30)%60);
            if( currentDay > treningDan || ( currentDay==treningDan && currentHour > treningHour) || ( currentDay==treningDan && currentHour == treningHour && currentMinutes  >=  treningMinutes) ){
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

    for(let i = 0;i<=3;i++){
        $("#" + i).text(header[i]);
    }
    $(".otkazi").click(function () {

    
        var treningName = $(this).closest('tr').find('td:eq(0)').text();
        var dan = $(this).closest('tr').find('td:eq(1)').text();
        var termin = $(this).closest('tr').find('td:eq(2)').text();
 
 
 
        var zakazani = JSON.parse(sessionStorage.getItem("rezervisaniTreninzi"));
 
        
        trening =  zakazani.find(function(jedanTrening){
         return (jedanTrening.ime.localeCompare(imenaTreninga[treningName]) == 0 && 
         jedanTrening.termin.localeCompare(termin)==0 && 
         jedanTrening.dan.localeCompare(terminToSerbian[dan]) == 0)
     });
 
        zakazani =  zakazani.filter(function(jedanTrening){
             return !(jedanTrening.ime.localeCompare(imenaTreninga[treningName]) == 0 && 
             jedanTrening.termin.localeCompare(termin)==0 && 
             jedanTrening.dan.localeCompare(terminToSerbian[dan]) == 0)
         });
 
         $(this).parent().parent().remove();
         sessionStorage.setItem("rezervisaniTreninzi",JSON.stringify(zakazani));
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
})





    if(sessionStorage.getItem("rezervisaniTreninzi") == null || JSON.parse(sessionStorage.getItem("rezervisaniTreninzi")).length == 0){
        $("#zakazaniTreninziTabelaTelo").append(
          startRow + "<td colspan =" + "4" + ">" + nemaZakazanih + endCol + endRow  
        )
    } else {
      
        var zakazani = JSON.parse(sessionStorage.getItem("rezervisaniTreninzi"));
            
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
            var currentDay = date.getDay();
            if( currentDay == 0) currentDay = 7;
       
            var currentHour = date.getHours();
            var currentMinutes = date.getMinutes();
        
           
           
           
            var dan = trening.dan;
            var termin = trening.termin;

            var regex = /^(..|.):?(.|..)?-.{1,5}$/;
            var result = termin.match(regex);
            var treningDan = danUNedelji[dan];
            var treningHour = parseInt(result[1]);
            treningMinutes = 0;
            console.log(treningMinutes);
            regex = /^.{1,2}:(.|..)-.{1,5}$/;
            var result = termin.match(regex);
            if(result != null){
                treningMinutes = parseInt(result[1]);
            }
            console.log(treningMinutes);

            currentHour = currentHour +  Math.floor((currentMinutes + 30) / 60); 
            currentMinutes =  Math.floor((currentMinutes + 30)%60);
            if( currentDay > treningDan || ( currentDay==treningDan && currentHour > treningHour) || ( currentDay==treningDan && currentHour == treningHour && currentMinutes  >=  treningMinutes) ){
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


     $(".otkazi").click(function () {

    
       var treningName = $(this).closest('tr').find('td:eq(0)').text();
       var dan = $(this).closest('tr').find('td:eq(1)').text();
       var termin = $(this).closest('tr').find('td:eq(2)').text();



       var zakazani = JSON.parse(sessionStorage.getItem("rezervisaniTreninzi"));

       
       trening =  zakazani.find(function(jedanTrening){
        return (jedanTrening.ime.localeCompare(imenaTreninga[treningName]) == 0 && 
        jedanTrening.termin.localeCompare(termin)==0 && 
        jedanTrening.dan.localeCompare(terminToSerbian[dan]) == 0)
    });

       zakazani =  zakazani.filter(function(jedanTrening){
            return !(jedanTrening.ime.localeCompare(imenaTreninga[treningName]) == 0 && 
            jedanTrening.termin.localeCompare(termin)==0 && 
            jedanTrening.dan.localeCompare(terminToSerbian[dan]) == 0)
        });

        $(this).parent().parent().remove();
        sessionStorage.setItem("rezervisaniTreninzi",JSON.stringify(zakazani));
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

});