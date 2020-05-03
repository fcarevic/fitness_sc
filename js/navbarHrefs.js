/*
    OVDE TREBA DA SE ODREDI PUTANJA DO FOLDERA PROJEKTA, ODNOSNO TEKUCI DIREKTORIJUM ZA INDEX.HTML
    ZNACI MORAJU DA POSTOJE SVE MOGUCE PUTANJE U OVIM IFOVIMA ISPOD I U ONDOSU NA NJIH DA SE ODREDI GDE SMO MI SADA
    I KOLIKO FOLDERA TREBA DA SE VRATIMO. 
    WINDOW.LOCATION.HREF VRACA PUNU PUTANJU DO FAJLA U KOM SI TRENUNTO, TO JE ONA PUTANJA STO SE VIDI U BROWSERU

*/
let url = window.location.href;
var base='';
if( url.indexOf('pregledTreninga/')!= -1 ){
 base = '../'
} else if( url.indexOf('treninzi/yoga/')!=-1) base='../../';
    else  if( url.indexOf('treninzi/')!=-1) base='../';
    else base = "./";


////////////////



$(document).ready(function(){
    $(".nav-item a , .dropdown-item").attr("href", "#");
    $("nav ul li a").click(function(){
        switch($(this).text()){
            case 'Početna': 
            
            window.location=base + 'index.html';
            break;
            
            case 'Yoga':
            case 'Pilates':
            case 'Core':
            case 'Cardio': 
            sessionStorage.setItem("tip",$(this).text());
            window.location=base + 'pregledTreninga/pregledTipa.html';

            break;

            case 'Nutricionista':
                window.location=base + 'nutricionista.html';
            break;
            
            case 'Masaže':
                window.location=base + 'masaza.html';
            break;
            case 'O nama':
                window.location=base + 'oNama.html';
            break;

            case 'Zakazivanje treninga':
                window.location=base + 'treninzi/zakazivanjeTreninga.html';
            break;

            case 'Moj profil':
                window.location=base + 'mojNalog.html';
            break;
            
        

         
        }


    })

});

////////////////////

/**
 * OVA FUNKCIJA SLUZI SA PRELAZAK NA STRANICU AKO NIJE PREKO NAVIGACIJE I AKO TREBA NESTO U SESIJI DA SE PAMTI PRE TOGA
 * PRVO ZAPAMTIS U SESIJI STA IT TREBA, PA POZIVAS OVU FUNKCIJU
 * 
 */

function loadPage(name){
    
    switch(name){
        case "prikazKategorije":
            window.location= base+"pregledTreninga/pregledKategorije.html"
            break;


    }
}