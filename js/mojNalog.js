$(document).ready(function () {
    
    
    var startRow = "<tr>"
    var startCol = "<td>"
    var endRow = "</\td>"
    var endCol = "</\td>"


  

    if(localStorage.getItem("rezervisaniTreninzi") == null){
        $("#zakazaniTreninziTabela").append(
          startRow + "<td colspan =" + "4" + ">" + "Nemate nijedan zakazan trening" + endCol + endRow  
        )
    } else {
      
        var zakazani = JSON.parse(localStorage.getItem("rezervisaniTreninzi"));
            
        var buttonStart = '<input type="button" class="btn btn-danger otkazi" value="Otkazi" ';
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
     

     var date = new Date();
     var currentDay = date.getDay();
     if( currentDay == 0) currentDay = 7;

     var currentHour = date.getHours();
     var currentMinutes = date.getMinutes();
 
    zakazani.forEach(trening => {
            var buttonEnd = bittonEndActive;
           
           
           
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
            if( currentDay > treningDan || ( currentDay==treningDan && currentHour >= treningHour) || ( currentDay==treningDan && currentHour == treningHour - 1 && currentMinutes  + 30 >=  treningMinutes) ){
                buttonEnd = buttonEndDisabled;
            }

            $("#zakazaniTreninziTabela").append(
                startRow 
                + startCol +  trening.ime + endCol
                + startCol + trening.dan + endCol 
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



       var zakazani = JSON.parse(localStorage.getItem("rezervisaniTreninzi"));

       zakazani =  zakazani.filter(function(jedanTrening){
            return !(jedanTrening.ime.localeCompare(treningName) == 0 && 
            jedanTrening.termin.localeCompare(termin)==0 && 
            jedanTrening.dan.localeCompare(dan) == 0)
        });
        $(this).parent().parent().remove();
        localStorage.setItem("rezervisaniTreninzi",JSON.stringify(zakazani));


       var treninzi = JSON.parse(localStorage.getItem("treninziRaspored"));
      
       var trening = treninzi[treningName.toLowerCase()];   
       var redNumber = trening["termini"].indexOf(termin);
       trening[dan.toLowerCase()][redNumber]--;
       localStorage.setItem("treninziRaspored", JSON.stringify(treninzi));
    })

});