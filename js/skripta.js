



var treninzi=[];

$(document).ready(function(){
    if ($("#mainNav").offset().top > 100)
    {
        $(".dropdown-item").addClass("white");
    $(".dropdown-item").removeClass(" blackNav blackPoz");
} 
    else {
        $(".dropdown-item").addClass("blackNav");
     $(".dropdown-item").removeClass("white blackPoz");
 };



    $(window).scroll(function(){
        if ($("#mainNav").offset().top > 100)
        {
            $(".dropdown-item").addClass("white");
        $(".dropdown-item").removeClass(" blackNav blackPoz");
   } 
        else {
            $(".dropdown-item").addClass("blackNav");
         $(".dropdown-item").removeClass("white blackPoz");
     }});
  $(window).resize(function(){
        if(window.innerWidth>=992){
            if ($("#mainNav").offset().top > 100)
            {
                $(".dropdown-item").addClass("white");
            $(".dropdown-item").removeClass(" blackNav blackPoz");
       } 
            else {
                $(".dropdown-item").addClass("blackNav");
             $(".dropdown-item").removeClass("white blackPoz");
      
            }
        }else {
            $(".dropdown-item").addClass("white");
            $(".dropdown-item").removeClass(" blackNav blackPoz");

        }


  })

        $(".dropdown-item").on({
            mouseenter: function(){
                if ($("#mainNav").offset().top > 100 || window.innerWidth<992 ){
                 $(this).addClass("blackPoz");
                 $(this).removeClass("white blackNav");
                 }
                  else  { 
                    $(this).addClass("white");
                    $(this).removeClass("blackPoz blackNav");
               
            
            }
                    },
            mouseleave: function(){
                if ($("#mainNav").offset().top > 100 || window.innerWidth<992)
                {
                    $(this).addClass("white");
                $(this).removeClass("blackPoz blackNav");
           } 
                else {
                    $(this).addClass("blackNav");
                 $(this).removeClass("white blackNav");
             };


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
  $("#lang").click(function(){
      if(localStorage.getItem('lang')=='en')
      localStorage.setItem('lang', 'rs');
      else localStorage.setItem('lang','en');
      languageChange();
  })

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
let broadcumb_srpski ="Početna";
let broadcumb_en ="Home";
let broadcumb= [];
let jezik_srp= 'en';
let jezik_eng= 'rs';
let jezik=[];
function languageChange(){
    let carousel = srpski_carousel;
    let kontakt= srpski_kontakt;
     treninzi= srpski_treninzi;
    let najtrazenijiTekst= 'Najtraženiji programi';
    jezik=jezik_srp;
    broadcumb = broadcumb_srpski;
    if(localStorage.getItem("lang")=='en'){
        jezik=jezik_eng;
      carousel=engleski_carousel;
      treninzi=engleski_treninzi;
      kontakt=englski_kontakt;  
      broadcumb= broadcumb_en;
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


    $("#link1").text(broadcumb);
    $("#lang").text(jezik);

    

}