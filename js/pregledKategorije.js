var baza = new Map();

let yoga ={
    
    "karma":{ 
    "naslov" : "Karma joga",
    "opis": " Karma joga je joga nesebičnog služenja. Bazira se na dobrovoljnim radu i služenju drugima, bez očekivanja nagrade. Prihvatanjem svega kako jeste - kao najboljeg, put je karma joge.",
     "slikeOsnova":'../assets/slike/yoga/kharma/kharma',
     "trajanje":45,
    "tezina":3,
    "ocena":4,
    "video" : [
        "https://www.youtube.com/embed/iNz2RrXSM2g",
        "https://www.youtube.com/embed/q8pNumZjxjY"
    ]
    }, 
    "hata": { 
        "naslov" : "Hata joga",
        "opis": " Pravi balans mirovanja (stagnacije) i pokreta, a njen primarni fokus je na fizičkim vežbama (asanama) i joga disanju (pranajama).",
           "slikeOsnova":"../assets/slike/yoga/hatha/hatha",
        "trajanje":30,
        "tezina":5,
        "ocena":3,
        "video" : [
            "https://www.youtube.com/embed/iNz2RrXSM2g",
            "https://www.youtube.com/embed/q8pNumZjxjY"
        ]
    },
    "raja":{ 
        "naslov" : "Radža joga",
        "opis": " Vežbanje položaja (asana), disanja, koncentracije i meditacije a radi postizanja konačnog oslobođenja ",
        "slikeOsnova":"../assets/slike/yoga/raja/raja",
        "trajanje":60,
        "tezina":4,
        "ocena":5,
        "video" : [
            "https://www.youtube.com/embed/iNz2RrXSM2g",
            "https://www.youtube.com/embed/q8pNumZjxjY"
        ]
    }
};

let pilates = {
    "klasicni": { 
        "naslov" : "Klasični pilates",
        "opis": " Pilates je inovativni i siguran mind&body program. Vežbajući Pilates razvijate svesnost o svom telu, dobru posturu i lake i graciozne pokrete.",
        "slikeOsnova":"../assets/slike/pilates/klasicnipilates/pilates",
        "trajanje":45,
        "tezina":3,
         "ocena" : 4,
         "video": [
            "https://www.youtube.com/embed/le1iFVxW8eY",
            "https://www.youtube.com/embed/A9VIAS4yKSk"
        ]
    
    },
    "reformer": { 
        "naslov" : "Reformer pilates",
        "opis": " Sam trening je dinamičniji, zabavniji i delotvorniji a rezultati evidentniji u dalekom kraćem vremenu nego kod pilatesa na podlozi. Na naprednom vežbačkom nivou, u jednom Reforemer času postiže se i efekat sagorevanja viška masnoće paralelno sa izduživanjem i učvršćivanjem mišića. Istovremeno, svaka Reformer vežba po prirodi i isteže mišiće koje vežba.",
        "slikeOsnova":"../assets/slike/pilates/reformerPilates",
        "trajanje":60,
        "tezina":4,
        "ocena": 4,
        "video": [
            "https://www.youtube.com/embed/le1iFVxW8eY",
            "https://www.youtube.com/embed/A9VIAS4yKSk"
        ]
    },
    "stott":{ 
        "naslov" : "Stott pilates",
        "opis": "      Uz pomoć STOTT PILATESA očuvaćete gipkost, izdužiti mišiće i što je još važnije imaćete pravilno držanje tela, jer ćete ojačati mišiće koji čine potporu kičmenog stuba.",
        "slikeOsnova":"../assets/slike/pilates/stottPilates",
        "trajanje":30,
        "tezina":5,
        "ocena":5,
        "video": [
            "https://www.youtube.com/embed/le1iFVxW8eY",
            "https://www.youtube.com/embed/A9VIAS4yKSk"
        ]
    },



}
let cardio = {
    "boks": { 
        "naslov" : "Kardio Boks",
        "opis": "Cardio box – rocks! Da, kardio boks razbija! Teško je opisati zadovoljstvo ove vrste treninga onom ko to nije probao.",
         "slikeOsnova":"../assets/slike/cardio/box/box",
        "trajanje":45,
        "tezina":3,
        "ocena" : 4,
        "video": [
           "https://www.youtube.com/embed/VwwqUZks_6Y",
           "https://www.youtube.com/embed/3yGv78qMn3w"
       ]
    
    },
    "trcanje":{ 
        "naslov" : "Trčanje",
        "opis": "Opustite mozak, sagorite kalorije, družite se!",
         "slikeOsnova":"../assets/slike/cardio/running/running",
        "trajanje":60,
        "tezina":4,
        "ocena" : 4,
        "video": [
           "https://www.youtube.com/embed/dAe9JkKYxek",
           "https://www.youtube.com/embed/k89UOatgfnU"
       ]
    },
    "kruzni":{ 
        "naslov" : "Kružni trening",
        "opis": "Najdinamičniji, najzabavniji i najproduktivniji vid treninga. Rezultati primetni u najkraćem roku",
         "slikeOsnova":"../assets/slike/cardio/mix/mix",
        "trajanje":30,
        "tezina":5,
        "ocena" : 4,
        "video": [
           "https://www.youtube.com/embed/_Zem0_qsDg0",
           "https://www.youtube.com/embed/8DZktowZo_k"
       ]
    },
    
};
let core = {
    "crossfit":{ 
        "naslov" : "Crossfit",
        "opis": "Crossfit će vas učiniti jačim, fit u kratkom vremenskom periodu, toniranim i mišićavim putem različitih tipova treninga.",
        "slikeOsnova":"../assets/slike/core/crossfit/crossfit",
        "trajanje":45,
        "tezina":3,
        "ocena" : 3,
         "video": [
           "https://www.youtube.com/embed/UeqcLhcMO7A",
            "https://www.youtube.com/embed/tEjlccQFkKE"
        ]
    
    },
    "abdomenal":{ 
        "naslov" : "Abdomenalni trening",
        "opis": "Dovedite stomak do iygleda o kakvom ste uvek sanjali!",
         "slikeOsnova":"../assets/slike/core/abdomenal/abdomenal",
        "trajanje":60,
        "tezina":4,
        "ocena" : 2,
        "video": [
            "https://www.youtube.com/embed/UeqcLhcMO7A",
             "https://www.youtube.com/embed/tEjlccQFkKE"
         ]
    },
    "klasicni":{ 
        "naslov" : "Klasični trening",
        "opis": "Intenzivan trening jačanja celog tela, zabavan i pre svega efektivan!",
         "slikeOsnova":"../assets/slike/core/classic/classic",
        "trajanje":30,
        "tezina":5,
        "ocena" : 5,
         "video": [
            "https://www.youtube.com/embed/2vLndKrwTUI",
            "https://www.youtube.com/embed/qYlv_C_4sZk"
        ]
    },  
};


baza.set(yoga.raja.naslov,yoga.raja);
baza.set(yoga.hata.naslov,yoga.hata);
baza.set(yoga.karma.naslov,yoga.karma);
baza.set(pilates.klasicni.naslov,pilates.klasicni);
baza.set(pilates.reformer.naslov,pilates.reformer);
baza.set(pilates.stott.naslov,pilates.stott);
baza.set(core.abdomenal.naslov,core.abdomenal);
baza.set(core.klasicni.naslov,core.klasicni);
baza.set(core.crossfit.naslov,core.crossfit);
baza.set(cardio.boks.naslov,cardio.boks);
baza.set(cardio.kruzni.naslov,cardio.kruzni);
baza.set(cardio.trcanje.naslov,cardio.trcanje);









$(document).ready(function(){
   let el = baza.get(sessionStorage.getItem("kategorija"));
   $("#naslov").text(el.naslov);
   $("#trajanje").text(el.trajanje);
   $("#ocena").text(el.ocena);
   $("#tezina").text(el.tezina);
   $("#opis").text(el.opis);

   let slike = document.getElementsByClassName("d-block");
   for(let i =0 ; i< slike.length ; i++){
       slike[i].src = el.slikeOsnova + (i+2)+'.jpg';
   }
   
   let video = document.getElementsByTagName("iframe");
   for(let i =0 ; i< video.length ; i++){
       video[i].src = el.video[i] ;
   }

});