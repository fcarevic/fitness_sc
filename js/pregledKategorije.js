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

let jezik_srp= 'en';
let jezik_eng= 'rs';
let jezik=[];
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
    

console.log(baza_sr);
}



function languageSwitch() {
    jezik=jezik_srp;
    if (localStorage.getItem("lang") == 'en') {baza = baza_en;
        jezik=jezik_eng;
    }
    else baza = baza_sr;
    let el = baza.get(sessionStorage.getItem("kategorija"));
    $("#naslov").text(el.naslov);
    $("#trajanje").text(el.trajanje);

    $("#opis").text(el.opis);

    let slike = document.getElementsByClassName("slika");
    for (let i = 0; i < slike.length; i++) {
        slike[i].src = el.slikeOsnova + (i + 2) + '.jpg';
    }

    let video = document.getElementsByTagName("iframe");
    for (let i = 0; i < video.length; i++) {
        video[i].src = el.video[(i + 1) % video.length];
    }
    let nova_ocena= el.ocena;
    let obj=null;
    if(mapaKomentara.length!=0)
    for(let i = 0 ; i < mapaKomentara.length; i++){
    if(mapaKomentara[i].kategorija==sessionStorage.getItem("kategorija")){
     obj=mapaKomentara[i]; 
        }
    }
     if(obj!=null) {
      nova_ocena= Math.floor(((nova_ocena*2 + obj.ocena))/3);
     }




    for (let i = 0; i < nova_ocena; i++) {
        $("#star" + i).removeClass("grey");
        $("#star" + i).css({ "color": "gold" });

    }

    for (let i = 0; i < el.tezina; i++) {

        $("#trophy" + i).removeClass("grey");
        $("#trophy" + i).css({ "color": "gold" });

    }

    let trtext='Trajanje :';
    let teztext= 'Tezina :';
    let ocenatext= "Ocena :";
    let abouttext= 'O treningu';
    let komentariTekst= "Komentari";
    let txtareaplaceholder='Ostavite komentar...'
    let dugmePosalji= "POŠALJI";
    


    if(localStorage.getItem('lang')=='en'){
            trtext="Duration :"
        teztext="Level :"
        ocenatext= 'Grade :';
        abouttext = 'About';
        komentariTekst='Comments';
        txtareaplaceholder='Leave a comment';
        dugmePosalji='SEND';
    }

    $("#trajanjeTekst").text(trtext);
    $("#tezinaTekst").text(teztext);
    $("#about").text(abouttext);
    $(".ocenaTekst").text(ocenatext);
    $("#komentariTekst").text(komentariTekst);    
    document.getElementsByTagName("textarea")[0].placeholder=txtareaplaceholder;
    $("#posalji").text(dugmePosalji);  

    let broadcumb1= sessionStorage.getItem("tip");
    let broadcumb2=sessionStorage.getItem("kategorija");
    $("#link1").text(broadcumb1);
    
    $("#link2").text(broadcumb2);
    $("#lang").text(jezik);
    document.title='Fitness/' + broadcumb2;




}

function prevediSesiju(){
      let kategorija=null;
      let tip = null;
        switch(sessionStorage.getItem('kategorija')){
            case "Running":  kategorija = "Trčanje"; break; 
            case "Kružni trening": kategorija = "Circular training"; break; 
            case "Trčanje":  kategorija = "Running"; break; 
            case "Circular training": kategorija = "Kružni trening"; break; 
            case "Cardio box": kategorija = "Kardio boks"; break; 
            case "Kardio boks": kategorija = "Cardio box"; break; 

            case "Klasični pilates": kategorija = "Classic pilates"; break; 
            case "Classic pilates": kategorija = "Klasični pilates"; break;

            case "Radža joga": kategorija = "Raja yoga"; break;
            case "Raja yoga": kategorija = "Radža joga"; break;
            case "Kharma yoga": kategorija = "Karma joga"; break;
            case "Karma joga": kategorija = "Kharma yoga"; break;
            case "Hatha yoga": kategorija = "Hata joga"; break;
            case "Hata joga": kategorija = "Hatha yoga"; break;

            case "Klasični trening":  kategorija = "Classic training"; break;
            case "Classic training":  kategorija = "Klasični trening"; break;
            case "Abdominal training":  kategorija = "Abdomenalni trening"; break;
            case "Abdomenalni trening":  kategorija = "Abdominal training"; break;

        }

        switch(sessionStorage.getItem('tip')){
            case 'Joga' : tip = 'Yoga'; break;
            case 'Yoga' : tip = 'Joga'; break;
            case 'Cardio': tip = 'Kardio'; break;
            case 'Kardio': tip= 'Cardio'; break;

        }
        if(tip!=null)
        sessionStorage.setItem('tip',tip );
        if(kategorija!=null)
        sessionStorage.setItem('kategorija', kategorija);



}




$(document).ready(function () {
    if(localStorage.getItem("komentari") != null)
  mapaKomentara = JSON.parse(localStorage.getItem("komentari"));

    languageSwitch();
    updateMojKomentar();

   

    $("#lang").click(function(){
        if(localStorage.getItem('lang')=='en')
        localStorage.setItem('lang', 'rs');
        else localStorage.setItem('lang','en');
        prevediSesiju();
        languageSwitch();
    })
    $("#link1").click(function(){
        loadPage('prikazTipa');
    });
    $("#dugme").click(function(){
        ostaviKomentar();
    });
    $("#1").click({id:"1"}, colorStars);
    $("#2").click({id:"2"},colorStars);
    $("#3").click({id:"3"},colorStars);
    $("#4").click({id:"4"},colorStars);
    $("#5").click({id:"5"},colorStars);
    $(".okvir").css({ "display": "initial" });
    

}
);


function ostaviKomentar(){
    let vreme= new Date();
   let sviZakazi = JSON.parse(localStorage.getItem("rezervisaniTreninzi"));
    console.log(sviZakazi);
    if(sviZakazi==null)  {
        $.toast({
          text: "Niste prisustvovali treningu",
          icon: "warning"

        });

        ;return;};

    let flag= false;
    for(let i= 0 ;i<sviZakazi.length;i++){
        console.log(prevediDusanovJezik());
        
      if( prevediDusanovJezik() == sviZakazi[i].ime)
                  if( sviZakazi[i].kraj > vreme.getTime()) console.log('usao ovde') ;
                  else flag=true;
      
           
    }
    console.log(flag);
    let porukagreska= "Niste prisustvovali treningu";
        if(localStorage.getItem('lang')=='en') porukagreska = 'Did not attend this training';
    if(!flag) {
        $.toast({
            text: porukagreska,
            icon: "warning"
  
          });

        return;};
    let komentar=  $("#komentar").val();
    if( komentar=="") {
        $("#komentar").css({
            "border-color" : "red"
        });
        return ;
    }       
   
     let vremeTekst = vreme.toLocaleDateString();
    let obj = {
        "kategorija" : sessionStorage.getItem("kategorija"),
        "tekst": komentar,
        "ocena": ocena,
        "vreme":vremeTekst
    };
    let tekst= 'Komentar vec postoji';
    if(localStorage.getItem('lang')=='en') tekst = 'Already commented';
    var imavec=false;
    mapaKomentara.forEach(el=>{
      if( el.kategorija==sessionStorage.getItem('kategorija') && !imavec)
         {
             

            $.toast({
                text: tekst,
                icon: "warning"
      
              });
      
              imavec=true;
              
         }

    });

if(imavec) return;


     mapaKomentara.push (obj);
     prevediSesiju();
     let obj2 = {
        "kategorija" : sessionStorage.getItem("kategorija"),
        "tekst": komentar,
        "ocena": ocena,
        "vreme":vremeTekst
    };
     mapaKomentara.push(obj2);
     prevediSesiju();
    
     localStorage.setItem("komentari", JSON.stringify(mapaKomentara));
      
    updateMojKomentar();
     

    

}
function colorStars(element){
    
    
    
    ocena= parseInt(element.data.id);
        
        
    for(let i = 0 ;i < 5;i++ ){
    if(ocena>i){
     document.getElementById(i+1).style.color="gold";
    }
    else{  
        document.getElementById(i+1).style.color="grey";
        }
    }

}




function updateMojKomentar(){
   /// return;
   $("#brojKomentara").text('0');
   let obj=null;
   if(mapaKomentara.length==0)return;
   for(let i = 0 ; i < mapaKomentara.length; i++){
   if(mapaKomentara[i].kategorija==sessionStorage.getItem("kategorija")){
    obj=mapaKomentara[i]; 
   }
   }
    if(obj==null) return;
    $("#mojKomentarTekst").text(obj.tekst);
    console.log('vreme ' + obj.vreme);
    $("#mojKomentarVreme").text(obj.vreme);

    let zvezde= document.getElementsByClassName("be-comment-time")[0].getElementsByClassName("fa-star");
    for (let i =0 ; i< obj.ocena;i++) zvezde[i].setAttribute("class", "fa fa-star gold");
    $("#brojKomentara").text('1');
    let el = baza.get(sessionStorage.getItem("kategorija"));
    let nova_ocena = Math.floor((el.ocena  + obj.ocena)/2);
    for (let i = 0; i < 5; i++) {
        if(i<nova_ocena){


        $("#star" + i).removeClass("grey");
        $("#star" + i).css({ "color": "gold" });}
        else  $("#star" + i).css({ "color": "grey" });

    }
    if(localStorage.getItem('lang')=='en'){
            baza_en.get(sessionStorage.getItem("kategorija")).ocena=nova_ocena;
            prevediSesiju(); 
            baza_sr.get(sessionStorage.getItem("kategorija")).ocena=nova_ocena;
            prevediSesiju();

    } else {
        prevediSesiju();
        baza_en.get(sessionStorage.getItem("kategorija")).ocena=nova_ocena;
        prevediSesiju(); 
        baza_sr.get(sessionStorage.getItem("kategorija")).ocena=nova_ocena;
        

    }
    let arrayen = Array.from(baza_en, ([name, value]) => ({ name, value }));
    let arraysr = Array.from(baza_sr, ([name, value]) => ({ name, value }));
    localStorage.setItem('bazaEN', JSON.stringify(arrayen));
    localStorage.setItem('bazaSR', JSON.stringify(arraysr));

     
    document.getElementById("mojKomentar").style.visibility="visible";

}

function prevediDusanovJezik(){


   
let imenaTreninga = {
    "Karma joga": "Karma Yoga",
    "Radža joga": "Radža Yoga",
    "Hata joga" : "Hata Yoga",
    "Klasični pilates" : "Klasični pilates",
    "Reformer pilates" :"Reformer pilates",
    "Stott pilates":"Stott pilates",
    "Crossfit" :"Crossfit",
    "Abdomenalni trening":"Abdomenalni trening",
    "Klasični trening" : "Klasični trening",
    "Kardio Boks":"Kardio Boks",
    "Trčanje": "Trčanje",
    "Kružni trening" : "Kružni trening",
    "Kharma yoga" : "Karma Yoga" ,
    "Raja yoga" : "Radža Yoga",
    "Hatha yoga" : "Hata Yoga",
    "Classic pilates" :"Klasični pilates",
    "Reformer pilates" :"Reformer pilates",
    "Stott pilates" :"Stott pilates",
    "Crossfit" :"Crossfit",
    "Abodminal training":"Abdomenalni trening",
    "Classic training" :"Klasični trening",
    "Cardio Box" : "Kardio Boks",
    "Running":"Trčanje",
    "Circular training":"Kružni trening"

}

 return imenaTreninga[sessionStorage.getItem('kategorija')]; 

}