
let url = window.location.href;
var base='';
if( url.indexOf('pregledTreninga/')!= -1 ){
 base = '../'
} else if( url.indexOf('treninzi/yoga/')!=-1) base='../../';
    else  if( url.indexOf('treninzi/')!=-1) base='../';
    else base = "./";

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
            
            
        }



    })

});

function loadPage(name){
    
    switch(name){
        case "prikazKategorije":
            window.location= base+"pregledTreninga/pregledKategorije.html"
            break;


    }
}