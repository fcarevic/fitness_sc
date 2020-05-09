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
    switchLanguage();
    $("#lang").click(function(){
        switchLanguage();
    })
    $(".nav-item a , .dropdown-item").attr("href", "#");
    $("nav ul li a").click(function(){
        switch($(this).text()){
            case 'Početna':
            case 'Home': 
            
            window.location=base + 'index.html';
            break;
            
            case 'Yoga':
            case 'Pilates':
            case 'Core':
            case 'Cardio': 
            case 'Joga':
            case 'Kardio':
            sessionStorage.setItem("tip",$(this).text());
            window.location=base + 'pregledTreninga/pregledTipa.html';

            break;

            case 'Nutricionista':
            case 'Nutritionist':
                window.location=base + 'nutricionista.html';
            break;
            
            case 'Masaže':
            case 'Massage' :
                window.location=base + 'masaza.html';
            break;
            case 'O nama':
            case 'About':
                window.location=base + 'oNama.html';
            break;

            case 'Zakazivanje treninga':
            case 'Reservations':
                window.location=base + 'treninzi/zakazivanjeTreninga.html';
            break;

            case 'Moj profil':
            case 'Profile':
                window.location=base + 'mojNalog.html';
            break;
            
        
         
         
        }


    });

    $('body').css({"display" : "initial"});

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

let sprski_nav = ['Početna', 'Usluge', 'Zakazivanje treninga', 'Moj profil', 'O nama'];
let engleski_nav = ['Home', 'Services', 'Reservations', 'Profile', 'About'];
let sprski_usluge = ['Treninzi','Pilates', 'Joga', 'Core','Kardio' ,'Nutricionista', 'Masaže'];
let engleski_usluge = ['Practices', 'Pilates', 'Yoga', 'Core','Cardio' ,'Nutritionist', 'Massage'];
let srpski_footer = 'Copyright © 2020 - Dušan Stijovic i Filip Carević, ETF Beograd';
let engleski_footer= 'Copyright © 2020 - Dušan Stijovic i Filip Carević, Faculty of Electrical Engineering, Belgrade';
let nav=[];
let usl= [];
let footertext=[];
function switchLanguage(){
        let lng = localStorage.getItem("lang");
        
        if(lng!='en'){
                nav=sprski_nav;
                usl=sprski_usluge;
                footertext=srpski_footer;
        } else {
            nav= engleski_nav; 
            usl=engleski_usluge;
            footertext=engleski_footer;
        }
        $("footer div div").text(footertext);

        let main= document.getElementById("mainNav");
        let navItems= main.getElementsByClassName("nav-link");
        for(let i =0 ; i<navItems.length; i++){
            navItems[i].textContent= nav[i];
        }

        let divTreninga = document.getElementById("mainNav");
        let items = divTreninga.getElementsByClassName("dropdown-item");
        console.log(items.length);
        for(let i =0 ; i<items.length; i++){
            items[i].textContent= usl[i];
        }

}