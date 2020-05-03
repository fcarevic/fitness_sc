var yoga = [
    { 
        "naslov" : "Karma joga",
        "opis": " Duhovni rast prihvatanja rada bez očekivanja rezultata i nagrada,  oslobađanje ega",
         "slika":"../assets/slike/yoga/kharma/kharma1.jpg",
        "trajanje":45,
        "tezina":3
    
    },
    { 
        "naslov" : "Radža joga",
        "opis": " Vežbanje položaja (asana), disanja, koncentracije i meditacije a radi postizanja konačnog oslobođenja ",
        "slika":"../assets/slike/yoga/raja/raja1.jpg",
        "trajanje":60,
        "tezina":4
    },
    { 
        "naslov" : "Hata joga",
        "opis": " Pravi balans mirovanja (stagnacije) i pokreta, a njen primarni fokus je na fizičkim vežbama (asanama) i joga disanju (pranajama).",
           "slika":"../assets/slike/yoga/hatha/hatha1.jpg",
        "trajanje":30,
        "tezina":5
    },
    
    ];
var pilates = [
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
var cardio = [
    { 
        "naslov" : "Kardio Boks",
        "opis": "Cardio box – rocks! Da, kardio boks razbija! Teško je opisati zadovoljstvo ove vrste treninga onom ko to nije probao.",
         "slika":"../assets/slike/cardio/box/box1.jpg",
        "trajanje":45,
        "tezina":3
    
    },
    { 
        "naslov" : "Trčanje",
        "opis": "Opustite mozak, sagorite kalorije, družite se!",
         "slika":"../assets/slike/cardio/running/running1.jpg",
        "trajanje":60,
        "tezina":4
    },
    { 
        "naslov" : "Kružni trening",
        "opis": "Najdinamičniji, najzabavniji i najproduktivniji vid treninga. Rezultati primetni u najkraćem roku",
         "slika":"../assets/slike/cardio/mix/mix1.jpg",
        "trajanje":30,
        "tezina":5
    },
    
    ];
var core = [
        { 
            "naslov" : "Crossfit",
            "opis": "Crossfit će vas učiniti jačim, fit u kratkom vremenskom periodu, toniranim i mišićavim putem različitih tipova treninga.",
            "slika":"../assets/slike/core/crossfit/crossfit1.jpg",
            "trajanje":45,
            "tezina":3
        
        },
        { 
            "naslov" : "Abdomenalni trening",
            "opis": "Dovedite stomak do iygleda o kakvom ste uvek sanjali!",
             "slika":"../assets/slike/core/abdomenal/abdomenal1.jpg",
            "trajanje":60,
            "tezina":4
        },
        { 
            "naslov" : "Klasični trening",
            "opis": "Intenzivan trening jačanja celog tela, zabavan i pre svega efektivan!",
             "slika":"../assets/slike/core/classic/classic1.jpg",
            "trajanje":30,
            "tezina":5
        },
        
        ];
var baza;
//postavi bazu da pokazuje na odgovarajući tip 
switch(sessionStorage.getItem("tip")){
    case 'Pilates' : baza= pilates;
            break;
    case 'Yoga': baza= yoga;
    break;
    case 'Cardio': baza = cardio;
        break;
    case 'Core': baza = core;
      break;
}





$(document).ready(function(){
   
///////////////////////////////////////
$("li img").click(function() {
    switch(this.id){
        case "naziv":  sortByName(); break;
        case "trajanje"  : sortByDuration(); break;
        case "tezina": sortByQuality(); break;
    }
    
});


$(".card input").click(function(){
  
    let ind  = parseInt(this.id);
    sessionStorage.setItem("kategorija", baza[ind].naslov);
    loadPage("prikazKategorije");

});

      update();






});


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
    
    let trajanja = document.getElementsByClassName("trajanje");
 for(let i=0 ; i< naslovi.length;i++){
     naslovi[i].innerHTML=baza[i].naslov;
   // opisi[i].innerHTML=baza[i].opis;
    slike[i].src=baza[i].slika;
   
    
    for(let j =0 ; j< baza[i].tezina ; j++){
       
        $("#trophy"+(i*5+j)).removeClass("grey");
        $("#trophy"+(i*5+j)).css({ "color": "gold"});
         
       }
    trajanja[i].innerHTML=" " +baza[i].trajanje + "<sup>min<sup>" ;
    }


}