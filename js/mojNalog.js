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
        button = '<input type="button" class="btn btn-danger otkazi" value="Otkazi">';

        var zakazani = JSON.parse(localStorage.getItem("rezervisaniTreninzi"));
        zakazani.forEach(trening => {

              $("#zakazaniTreninziTabela").append(
          startRow 
           + startCol +  trening.ime + endCol
           + startCol + trening.dan + endCol 
           + startCol + trening.termin + endCol
           + startCol + button + endCol
          + endRow  
        )
        });
//Treba dodati funcionalnost otkazivanja treninga
    }


     $(".otkazi").click(function () {

        var danUNedelji = ["nedelja","ponedeljak","utorak","sreda","cetvrtak","petak","subota"];

        var date = new Date();

        danUNedelji[date.getDay()]
        
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
        //Treba jos da se smanji iz tabele iz local storage treninzi
     });

});