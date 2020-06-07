var baza_sr = new Map();
var baza_en = new Map();
let ocena=0;
var mapaKomentara= [];

let yoga = {

    "karma": {
        "naslov": "Karma joga",
        "opis": " Karma joga je joga nesebičnog služenja. Bazira se na dobrovoljnim radu i služenju drugima, bez očekivanja nagrade. Prihvatanjem svega kako jeste - kao najboljeg, put je karma joge.",
        "slikeOsnova": '../assets/slike/yoga/kharma/kharma',
        "trajanje": 45,
        "tezina": 3,
        "ocena": 4,
        "video": [
            "https://www.youtube.com/embed/iNz2RrXSM2g",
            "https://www.youtube.com/embed/q8pNumZjxjY"
        ]
    },
    "hata": {
        "naslov": "Hata joga",
        "opis": " Pravi balans mirovanja (stagnacije) i pokreta, a njen primarni fokus je na fizičkim vežbama (asanama) i joga disanju (pranajama).",
        "slikeOsnova": "../assets/slike/yoga/hatha/hatha",
        "trajanje": 30,
        "tezina": 5,
        "ocena": 3,
        "video": [
            "https://www.youtube.com/embed/iNz2RrXSM2g",
            "https://www.youtube.com/embed/q8pNumZjxjY"
        ]
    },
    "raja": {
        "naslov": "Radža joga",
        "opis": " Vežbanje položaja (asana), disanja, koncentracije i meditacije a radi postizanja konačnog oslobođenja ",
        "slikeOsnova": "../assets/slike/yoga/raja/raja",
        "trajanje": 60,
        "tezina": 4,
        "ocena": 5,
        "video": [
            "https://www.youtube.com/embed/iNz2RrXSM2g",
            "https://www.youtube.com/embed/q8pNumZjxjY"
        ]
    }
};

let pilates = {
    "klasicni": {
        "naslov": "Klasični pilates",
        "opis": " Pilates je inovativni i siguran mind&body program. Vežbajući Pilates razvijate svesnost o svom telu, dobru posturu i lake i graciozne pokrete.",
        "slikeOsnova": "../assets/slike/pilates/klasicnipilates/pilates",
        "trajanje": 45,
        "tezina": 3,
        "ocena": 4,
        "video": [
            "https://www.youtube.com/embed/le1iFVxW8eY",
            "https://www.youtube.com/embed/A9VIAS4yKSk"
        ]

    },
    "reformer": {
        "naslov": "Reformer pilates",
        "opis": " Sam trening je dinamičniji, zabavniji i delotvorniji a rezultati evidentniji u dalekom kraćem vremenu nego kod pilatesa na podlozi. Na naprednom vežbačkom nivou, u jednom Reforemer času postiže se i efekat sagorevanja viška masnoće paralelno sa izduživanjem i učvršćivanjem mišića. Istovremeno, svaka Reformer vežba po prirodi i isteže mišiće koje vežba.",
        "slikeOsnova": "../assets/slike/pilates/reformerPilates/pilates",
        "trajanje": 60,
        "tezina": 4,
        "ocena": 4,
        "video": [
            "https://www.youtube.com/embed/le1iFVxW8eY",
            "https://www.youtube.com/embed/A9VIAS4yKSk"
        ]
    },
    "stott": {
        "naslov": "Stott pilates",
        "opis": "      Uz pomoć STOTT PILATESA očuvaćete gipkost, izdužiti mišiće i što je još važnije imaćete pravilno držanje tela, jer ćete ojačati mišiće koji čine potporu kičmenog stuba.",
        "slikeOsnova": "../assets/slike/pilates/stottPilates/pilates",
        "trajanje": 30,
        "tezina": 5,
        "ocena": 5,
        "video": [
            
            "https://www.youtube.com/embed/le1iFVxW8eY",
            'https://www.youtube.com/embed/8m7cJ-dlXz8'
            
        ]
    },



}
let cardio = {
    "boks": {
        "naslov": "Kardio Boks",
        "opis": "Cardio box – rocks! Da, kardio boks razbija! Teško je opisati zadovoljstvo ove vrste treninga onom ko to nije probao.",
        "slikeOsnova": "../assets/slike/cardio/box/box",
        "trajanje": 45,
        "tezina": 3,
        "ocena": 4,
        "video": [
            "https://www.youtube.com/embed/VwwqUZks_6Y",
            "https://www.youtube.com/embed/3yGv78qMn3w"
        ]

    },
    "trcanje": {
        "naslov": "Trčanje",
        "opis": "Opustite mozak, sagorite kalorije, družite se!",
        "slikeOsnova": "../assets/slike/cardio/running/running",
        "trajanje": 60,
        "tezina": 4,
        "ocena": 4,
        "video": [
            "https://www.youtube.com/embed/dAe9JkKYxek",
            "https://www.youtube.com/embed/k89UOatgfnU"
        ]
    },
    "kruzni": {
        "naslov": "Kružni trening",
        "opis": "Najdinamičniji, najzabavniji i najproduktivniji vid treninga. Rezultati primetni u najkraćem roku",
        "slikeOsnova": "../assets/slike/cardio/mix/mix",
        "trajanje": 30,
        "tezina": 5,
        "ocena": 4,
        "video": [
            "https://www.youtube.com/embed/_Zem0_qsDg0",
            "https://www.youtube.com/embed/8DZktowZo_k"
        ]
    },

};
let core = {
    "crossfit": {
        "naslov": "Crossfit",
        "opis": "Crossfit će vas učiniti jačim, fit u kratkom vremenskom periodu, toniranim i mišićavim putem različitih tipova treninga.",
        "slikeOsnova": "../assets/slike/core/crossfit/crossfit",
        "trajanje": 45,
        "tezina": 3,
        "ocena": 3,
        "video": [
            "https://www.youtube.com/embed/UeqcLhcMO7A",
            "https://www.youtube.com/embed/tEjlccQFkKE"
        ]

    },
    "abdomenal": {
        "naslov": "Abdomenalni trening",
        "opis": "Dovedite stomak do iygleda o kakvom ste uvek sanjali!",
        "slikeOsnova": "../assets/slike/core/abdomenal/abdomenal",
        "trajanje": 60,
        "tezina": 4,
        "ocena": 2,
        "video": [
            "https://www.youtube.com/embed/UeqcLhcMO7A",
            "https://www.youtube.com/embed/tEjlccQFkKE"
        ]
    },
    "klasicni": {
        "naslov": "Klasični trening",
        "opis": "Intenzivan trening jačanja celog tela, zabavan i pre svega efektivan!",
        "slikeOsnova": "../assets/slike/core/classic/classic",
        "trajanje": 30,
        "tezina": 5,
        "ocena": 5,
        "video": [
            "https://www.youtube.com/embed/2vLndKrwTUI",
            "https://www.youtube.com/embed/qYlv_C_4sZk"
        ]
    },
};


let yoga_en = {

    "karma": {
        "naslov": "Kharma yoga",
        "opis": " Kharma yoga is known as a philosophy of a unselfish servant. It is built on principles of  volounteering and helping, without any expectation for a reward. Acceptance of unchanged as the best form , basis of kharma yoga is.",
        "slikeOsnova": '../assets/slike/yoga/kharma/kharma',
        "trajanje": 45,
        "tezina": 3,
        "ocena": 4,
        "video": [
            "https://www.youtube.com/embed/iNz2RrXSM2g",
            "https://www.youtube.com/embed/q8pNumZjxjY"
        ]
    },
    "hata": {
        "naslov": "Hatha yoga",
        "opis": " Balance of stngation an movement, wtih primary focus on  physical exercises (asanas) and breathing (pranayas).",
        "slikeOsnova": "../assets/slike/yoga/hatha/hatha",
        "trajanje": 30,
        "tezina": 5,
        "ocena": 3,
        "video": [
            "https://www.youtube.com/embed/iNz2RrXSM2g",
            "https://www.youtube.com/embed/q8pNumZjxjY"
        ]
    },
    "raja": {
        "naslov": "Raja yoga",
        "opis": "Body postures (asanas), breathing, concentration and meditation with main purpose for spiritual relief ",
        "slikeOsnova": "../assets/slike/yoga/raja/raja",
        "trajanje": 60,
        "tezina": 4,
        "ocena": 5,
        "video": [
            "https://www.youtube.com/embed/iNz2RrXSM2g",
            "https://www.youtube.com/embed/q8pNumZjxjY"
        ]
    }
};

let pilates_en = {
    "klasicni": {
        "naslov": "Classic pilates",
        "opis": " Pilates is inovative  mind&body program. It helps you develop conscience for your body, better posture and easy and elegant moves.",
        "slikeOsnova": "../assets/slike/pilates/klasicnipilates/pilates",
        "trajanje": 45,
        "tezina": 3,
        "ocena": 4,
        "video": [
            "https://www.youtube.com/embed/le1iFVxW8eY",
            "https://www.youtube.com/embed/A9VIAS4yKSk"
        ]

    },
    "reformer": {
        "naslov": "Reformer pilates",
        "opis": " Exercises are more dinamycal, entertaining and effective , results are expected much faster than pilates on hard floor. Advanced levels classes  burn fat, strech and stengthen muscles. At the same time, every Reformer exercise naturally strech crucial muscles .",
        "slikeOsnova": "../assets/slike/pilates/reformerPilates/pilates",
        "trajanje": 60,
        "tezina": 4,
        "ocena": 4,
        "video": [
            "https://www.youtube.com/embed/le1iFVxW8eY",
            "https://www.youtube.com/embed/A9VIAS4yKSk"
        ]
    },
    "stott": {
        "naslov": "Stott pilates",
        "opis": " STOTT PILATESA helps you perserve flexibility, stretch muscles and, most importantly, corrects body posture, by strengthening spine muscles.",
        "slikeOsnova": "../assets/slike/pilates/stottPilates/pilates",
        "trajanje": 30,
        "tezina": 5,
        "ocena": 5,
        "video": [
            
            "https://www.youtube.com/embed/le1iFVxW8eY",
            'https://www.youtube.com/embed/8m7cJ-dlXz8'
            
        ]
    },



}

let core_en = {
    "crossfit": {
        "naslov": "Crossfit",
        "opis": "Crossfit makes you stronger, fitter in no time, by tuned and intense body workouts.",
        "slikeOsnova": "../assets/slike/core/crossfit/crossfit",
        "trajanje": 45,
        "tezina": 3,
        "ocena": 3,
        "video": [
            "https://www.youtube.com/embed/UeqcLhcMO7A",
            "https://www.youtube.com/embed/tEjlccQFkKE"
        ]

    },
    "abdomenal": {
        "naslov": "Abdominal training",
        "opis": "Bring your abdomen to the desired look!",
        "slikeOsnova": "../assets/slike/core/abdomenal/abdomenal",
        "trajanje": 60,
        "tezina": 4,
        "ocena": 2,
        "video": [
            "https://www.youtube.com/embed/UeqcLhcMO7A",
            "https://www.youtube.com/embed/tEjlccQFkKE"
        ]
    },
    "klasicni": {
        "naslov": "Classic training",
        "opis": "Intensive trainig, strenghtens body, effective and entertaining!",
        "slikeOsnova": "../assets/slike/core/classic/classic",
        "trajanje": 30,
        "tezina": 5,
        "ocena": 5,
        "video": [
            "https://www.youtube.com/embed/2vLndKrwTUI",
            "https://www.youtube.com/embed/qYlv_C_4sZk"
        ]
    },
};

let cardio_en = {
    "boks": {
        "naslov": "Cardio Box",
        "opis": "Cardio box – rocks! It is true! It is hard to explain pleasure to someone who never tried it before.",
        "slikeOsnova": "../assets/slike/cardio/box/box",
        "trajanje": 45,
        "tezina": 3,
        "ocena": 4,
        "video": [
            "https://www.youtube.com/embed/VwwqUZks_6Y",
            "https://www.youtube.com/embed/3yGv78qMn3w"
        ]

    },
    "trcanje": {
        "naslov": "Running",
        "opis": "Brain relaxing, burns fat, all that in group!",
        "slikeOsnova": "../assets/slike/cardio/running/running",
        "trajanje": 60,
        "tezina": 4,
        "ocena": 4,
        "video": [
            "https://www.youtube.com/embed/dAe9JkKYxek",
            "https://www.youtube.com/embed/k89UOatgfnU"
        ]
    },
    "kruzni": {
        "naslov": "Circular training",
        "opis": "The most entertaining, effective and intensive  training with fastest results",
        "slikeOsnova": "../assets/slike/cardio/mix/mix",
        "trajanje": 30,
        "tezina": 5,
        "ocena": 4,
        "video": [
            "https://www.youtube.com/embed/_Zem0_qsDg0",
            "https://www.youtube.com/embed/8DZktowZo_k"
        ]
    },

};
baza_sr.set(yoga.raja.naslov, yoga.raja);
baza_sr.set(yoga.hata.naslov, yoga.hata);
baza_sr.set(yoga.karma.naslov, yoga.karma);
baza_sr.set(pilates.klasicni.naslov, pilates.klasicni);
baza_sr.set(pilates.reformer.naslov, pilates.reformer);
baza_sr.set(pilates.stott.naslov, pilates.stott);
baza_sr.set(core.abdomenal.naslov, core.abdomenal);
baza_sr.set(core.klasicni.naslov, core.klasicni);
baza_sr.set(core.crossfit.naslov, core.crossfit);
baza_sr.set(cardio.boks.naslov, cardio.boks);
baza_sr.set(cardio.kruzni.naslov, cardio.kruzni);
baza_sr.set(cardio.trcanje.naslov, cardio.trcanje);




baza_en.set(yoga_en.raja.naslov, yoga_en.raja);
baza_en.set(yoga_en.hata.naslov, yoga_en.hata);
baza_en.set(yoga_en.karma.naslov, yoga_en.karma);
baza_en.set(pilates_en.klasicni.naslov, pilates_en.klasicni);
baza_en.set(pilates_en.reformer.naslov, pilates_en.reformer);
baza_en.set(pilates_en.stott.naslov, pilates_en.stott);
baza_en.set(core_en.abdomenal.naslov, core_en.abdomenal);
baza_en.set(core_en.klasicni.naslov, core_en.klasicni);
baza_en.set(core_en.crossfit.naslov, core_en.crossfit);
baza_en.set(cardio_en.boks.naslov, cardio_en.boks);
baza_en.set(cardio_en.kruzni.naslov, cardio_en.kruzni);
baza_en.set(cardio_en.trcanje.naslov, cardio_en.trcanje);
var baza = null;


initDatabase();

function initDatabase(){
    if(localStorage.getItem('bazaEN')==null){
        let arrayen = Array.from(baza_en, ([name, value]) => ({ name, value }));
        let arraysr = Array.from(baza_sr, ([name, value]) => ({ name, value }));
        localStorage.setItem('bazaEN', JSON.stringify(arrayen));
        localStorage.setItem('bazaSR', JSON.stringify(arraysr));
    }

    let arrayen= JSON.parse(localStorage.getItem('bazaEN'));
    let arraysr= JSON.parse(localStorage.getItem('bazaSR'));
    baza_en = new Map();
    baza_sr=new Map();
    arrayen.forEach(el=>{
        baza_en.set(el.name, el.value);
    });
    arraysr.forEach(el=>{
        baza_sr.set(el.name, el.value);
    });

}




//////////////////////////////


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
                sessionStorage.setItem('tip', dohvatiTip());
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

if(localStorage.getItem('bazaEN')!=null){
        let srpski_tr=JSON.parse(localStorage.getItem('bazaSR'));
        let engleski_tr=JSON.parse(localStorage.getItem('bazaEN'));
        console.log(srpski_tr);
        srpski_tr.forEach(el1=>{
            console.log(el1.name+ "  " + el1.value.ocena);
        })
        srpski_tr=srpski_tr.sort((el1,el2)=>{
        
                    return el2.value.ocena-el1.value.ocena;
        });
        console.log(srpski_tr);
        engleski_tr= engleski_tr.sort((el1,el2)=>{
            console.log(el1.name+ "  " + el1.value.ocena);
            return el2.value.ocena-el1.value.ocena;
});

let slike = document.getElementsByClassName("crossfit");
    
    for(let i = 0 ; i < srpski_treninzi.length;i++){
            srpski_treninzi[i]= srpski_tr[i].name;
            engleski_treninzi[i]= engleski_tr[i].name;
            slike[i].style.backgroundImage = `url('${(srpski_tr[i].value.slikeOsnova+(i+1)).substr(1)}.jpg')`;
           
    }

    
}


function dohvatiTip(){
    let imenaTreninga = {
        "Karma joga": "Joga",
        "Radža joga": "Joga",
        "Hata joga" : "Joga",
        "Klasični pilates" : "Pilates",
        "Reformer pilates" :"Pilates",
        "Stott pilates":"Pilates",
        "Crossfit" :"Core",
        "Abdomenalni trening":"Core",
        "Klasični trening" : "Core",
        "Kardio Boks":"Kardio",
        "Trčanje": "Kardio",
        "Kružni trening" : "Kardio",
        "Kharma yoga" : "Yoga" ,
        "Raja yoga" : "Yoga",
        "Hatha yoga" : "Yoga",
        "Classic pilates" :"Pilates",
        "Reformer pilates" :"Pilates",
        "Stott pilates" :"Pilates",
        "Crossfit" :"Core",
        "Abodminal training":"Core",
        "Classic training" :"Core",
        "Cardio Box" : "Cardio",
        "Running":"Cardio",
        "Circular training":"Cardio"
    
    }
    return imenaTreninga[sessionStorage.getItem('kategorija')];
    


}

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
    document.title='Fitness/' + broadcumb;

    

}