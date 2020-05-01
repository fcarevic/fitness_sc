function scrolled(){
    if ($("#mainNav").offset().top < 100) {
        $("#mainNav").addClass("black");
        $("#mainNav").removeClass("navbar-scrolled");
        $(".dropdown-item").addClass("black");
    }
     else 
        {$("#mainNav").removeClass("black");
        $(".dropdown-item").removeClass("black");
        $("#mainNav").addClass("navbar-scrolled");
    }
}
$(document).ready(function(){
    scrolled();
    $(window).scroll(scrolled);
    
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
                    "background-color" : "black" 
                });


            }
      });

      $("#treningDrop").on({
            mouseenter: function(){
                $(".treningCol").collapse('show');
            },
            
            
      });

      $(".treningCol").on({
          mouseleave: function(){
              
            $(".treningCol").collapse('hide');
          }
      });
///////////////////////////////////////
$("li img").click(function() {
    switch(this.id){
        case "naziv":  sortByName(); break;
        case "trajanje"  : sortByDuration(); break;
        case "tezina": sortByQuality(); break;
    }
    
});


      update();






});

var baza = [
{ 
    "naslov" : "Klasični pilates",
    "opis": " Pilates je inovativni i siguran mind&body program. Vežbajući Pilates razvijate svesnost o svom telu, dobru posturu i lake i graciozne pokrete.",
    "slika":"../assets/slike/pilates/klasicniPilates-1.jpg",
    "trajanje":45,
    "tezina":3

},
{ 
    "naslov" : "Reformer pilates",
    "opis": " Sam trening je dinamičniji, zabavniji i delotvorniji a rezultati evidentniji u dalekom kraćem vremenu nego kod pilatesa na podlozi. Na naprednom vežbačkom nivou, u jednom Reforemer času postiže se i efekat sagorevanja viška masnoće paralelno sa izduživanjem i učvršćivanjem mišića. Istovremeno, svaka Reformer vežba po prirodi i isteže mišiće koje vežba.",
    "slika":"../assets/slike/pilates/reformerPilates.jpg",
    "trajanje":60,
    "tezina":4
},
{ 
    "naslov" : "Stott pilates",
    "opis": "      Uz pomoć STOTT PILATESA očuvaćete gipkost, izdužiti mišiće i što je još važnije imaćete pravilno držanje tela, jer ćete ojačati mišiće koji čine potporu kičmenog stuba.",
    "slika":"../assets/slike/pilates/stottPilates.jpg",
    "trajanje":30,
    "tezina":5
},

];

function sortByName(){
    baza.sort(function(a,b) { return a.naslov>b.naslov? 1 : ((a.naslov<b.naslov)?-1: 0) });
    update();
}
function sortByQuality() {
    baza.sort(function(a,b) { return a.tezina-b.tezina});
    update();
}
function sortByDuration() {
    baza.sort(function(a,b) { return a.trajanje-b.trajanje});
    update();
}
function update(){
    let naslovi= document.getElementsByClassName("card-header");
    let opisi =   document.getElementsByClassName("card-text");
    let slike =  document.getElementsByClassName("card-img-top");
    let tezine = document.getElementsByClassName("tezina");
    let trajanja = document.getElementsByClassName("trajanje");
 for(let i=0 ; i< naslovi.length;i++){
     naslovi[i].innerHTML=baza[i].naslov;
    opisi[i].innerHTML=baza[i].opis;
    slike[i].src=baza[i].slika;
    tezine[i].innerHTML=baza[i].tezina;
    trajanja[i].innerHTML=baza[i].trajanje;
    }


}