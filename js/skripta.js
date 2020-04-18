var niz= [
    '<br> <br><br><br><p class="text-muted mb-0 ">Ukoliko ste u duši Spartanac ili Spartanka – ovaj trening je idealan za vas.</p><br> <br><br>',
    '<br> <br><br><br><p class="text-muted mb-0 ">Oslobadnjanje od stresa za lepse polovine.</p><br> <br><br>',
    '<br> <br><br><br><p class="text-muted mb-0 ">Sve u sluzbi vaseg zdravlja.</p><br> <br><br>'
                   ];
var niz2 = [' <br> <br><br><br><br><br> <br><br><h3 class="h4 mb-2 crna rounded">Crossfit</h3>',
' <br> <br><br><br><br><br> <br><br><h3 class="h4 mb-2 crna rounded">Pilates</h3>',
' <br> <br><br><br><br><br> <br><br><h3 class="h4 mb-2 crna rounded">Spinning</h3>'
];

function prikaziTekst(id, enter){
    return;
    elem=document.getElementById(id);
    let br = parseInt(elem.id);
    if(enter)
    elem.innerHTML =  niz[br];
    else elem.innerHTML =  niz2[br];
}


$(document).ready(function(){

        $(".dropdown-item").on({
            mouseenter: function(){
                if ($("#mainNav").offset().top > 100)
                 $(this).css({
                        "color" :"white",
                        "background-color" : "black" 
                    });
                else 
                $(this).css({
                    "background-color" : "white" ,
                    "color" : "black"
                });
                    },
            mouseleave: function(){
                if ($("#mainNav").offset().top > 100)
                $(this).css({
                    "color": "black",
                    "background-color" : "white"
                });
                else  $(this).css({
                    "color" :"lightgrey",
                    "background-color" : "transparent" 
                });


            }


        })






})