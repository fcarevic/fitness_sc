

var treninzi = ['Crossfit','Klasični pilates',  'Kružni trening'];

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
////////////////////////////////////////////////////
  $("#0 ,#1 , #2").on({
        mouseenter: function(){
            this.style.opacity= 0.5;
        },
        mouseleave: function(){
            this.style.opacity=1;
        },
        click: function(){
              let ind = parseInt(this.id);
                sessionStorage.setItem('kategorija',treninzi[ind]);
                loadPage("prikazKategorije");
        }

  });
  languageChange();

  $('body').css({"display" : "initial"});
  





})

let srpski_carousel=[{
    h5 : "Najnovija oprema",
    p : "Teretana opremljena najnovijom i najkvalitetnijom opremom"
},
{
    h5: "Najobučeniji instruktori",
    p : "Radno osoblje teretane sa evropskim licencama"

},
{
    h5: "Grupni treninzi",
    p: "Trenirajte u grupama, počnite odmah!"

}];
let engleski_carousel=[{
    h5 : "Newest equipment",
    p : "Center equiped with the best quality equipment"
},
{
    h5: "Highly educated instructors",
    p : "Working staff with foreign licences "

},
{
    h5: "Group practices",
    p: "Practice in a group, start immediately!"

}];

let srpski_treninzi= ['Crossfit', 'Klasični pilates', 'Kružni trening'];
let engleski_treninzi= ['Crossfit', 'Classic pilates', 'Circular training'];

let srpski_kontakt = ['Kontaktirajte nas', 'Za više informacija o pozovite broj ili pošaljite e-mail.'];
let englski_kontakt=[ 'Contact us', 'For more info call or e-mail us'];

function languageChange(){
    let carousel = srpski_carousel;
    let kontakt= srpski_kontakt;
    let treninzi= srpski_treninzi;
    let najtrazenijiTekst= 'Najtraženiji programi';
    if(localStorage.getItem("lang")=='en'){
      carousel=engleski_carousel;
      treninzi=engleski_treninzi;
      kontakt=englski_kontakt;  
      najtrazenijiTekst= 'Most visited programs';
    }

    $("#contactUs h2").text(kontakt[0]);
    $("#contactUs p").text(kontakt[1]);
    let najtrazenijTreninzi= document.getElementById("najtrazenijiTreninzi");
    let naslovi = najtrazenijTreninzi.getElementsByTagName("h3");
    for (let i =0 ; i< naslovi.length;i++){
        naslovi[i].textContent=treninzi[i];
    }

    let car_caption =document.getElementsByClassName('carousel-caption');
    for(let i = 0 ; i < car_caption.length;i++){
        let h5= car_caption[i].getElementsByTagName("h5")[0];
        let p= car_caption[i].getElementsByTagName("p")[0];
        h5.textContent=carousel[i].h5;
        p.textContent=carousel[i].p;
    }
    $("#h2Najtrazeniji").text(najtrazenijiTekst);

    

}