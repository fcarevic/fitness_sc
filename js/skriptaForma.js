/*!
    * Start Bootstrap - Creative v6.0.1 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
    */
   $(document).ready(function(){
    LanguageSwitch2();
    $("#lang").click(function(){
      if(localStorage.getItem('lang')=='en')
      localStorage.setItem('lang', 'rs');
      else localStorage.setItem('lang','en');
     
      LanguageSwitch2();
      
  })
    $("#pdf").click(function(){
      let srpski = {
          "greskaTelefon": "Telefon nije unet ili je neispravan formatu",
          "greskaIme": "Niste uneli ime",
          "greskaPrezime": "Niste uneli prezime",
          "greskaDatum": "Izabrani datum je prošao ili nije unet",
          "greskaPoruka": "Niste uneli nikakvu poruku",
          "greskaEmail": "E-mail nije unet ili je u pogrešnom formatu"
      };
      let engleski = {
        "greskaTelefon": "Phone number not inserted or wrong format",
        "greskaIme": "First name not entered",
        "greskaPrezime": "Last name not entered",
        "greskaDatum": "Choosen date has passed or not entered",
        "greskaPoruka": "You have not entered any message",
        "greskaEmail": "E-mail wrong format or not entered"
    };
    let baza=srpski;
    if(localStorage.getItem('lang')=='en')baza=engleski;
       
      $("#name").css({"border-color" : "gray"});
      $("#prezime").css({"border-color" : "gray"});
      $("#date").css({"border-color" : "gray"});
      $("#message").css({"border-color" : "gray"});
      $("#email").css({"border-color" : "gray"});
      $("#telefon").css({"border-color" : "gray"});
      
       let flag = true;
       let imerex= /^[a-zA-Z]+$/
            if(!(imerex.test($("#name").val())) ) {
                $("#name").css({"border-color" : "red"});
                $.toast({
                  text: baza["greskaIme"],
                  icon: "warning"
        
                });
                flag=false;
            }
            if(!(imerex.test($("#prezime").val()))) {
                $("#prezime").css({"border-color" : "red"});
                $.toast({
                  text: baza["greskaPrezime"],
                  icon: "warning"
        
                }); 
                flag=false;}
          
            //testira datum da li je prazan ili prosao
             if( $("#date").val() == "")  { 
                $("#date").css({"border-color" : "red"}); 
                $.toast({
                  text: baza["greskaDatum"],
                  icon: "warning"
        
                });
                flag=false;}
             else {  let date = new Date( $("#date").val());
                  let curr = new Date();
                  if (curr.getTime()> date.getTime()) {
                    $("#date").css({"border-color" : "red"});
                    $.toast({
                      text: baza["greskaDatum"],
                      icon: "warning"
            
                    });
                     flag=false;
                  }
            }
             if( $("#message").val() == "")  { 
                    $("#message").css({"border-color" : "red"});
                    $.toast({
                      text: baza["greskaPoruka"],
                      icon: "warning"
            
                    });
                     flag=false;}

                    //provera regex za telefon mobilni +381 64 123 123 123
                    // 064 123 34 65 , +(381) 064 1234 34 34 , 
              
        
              let telrex= [ /^\d{9,11}$/ ,  /^\+(\()?\d{2,3}(\))?\d{9,10}$/ ];
              let flagTel=false;
              for(let i= 0 ; i < telrex.length;i++) {
                  if( (telrex[i].test($("#telefon").val()))) {
                    flagTel=true; break;
                    }
                }
               if(!flagTel) {
                 $("#telefon").css({"border-color" : "red"});
                 $.toast({
                  text: baza["greskaTelefon"],
                  icon: "warning"
        
                });
                  flag=false;
              }
              
          
            let emailreg= /^\w+[.\w]*@\w+([-\.]\w+)*(\.\w{2,3})+$/
            if(!emailreg.test($("#email").val())) {
              $("#email").css({"border-color" : "red"}); 
              $.toast({
                text: baza["greskaEmail"],
                icon: "warning"
      
              });
              flag=false;
            }
            
            if(!flag) return;
            
            let tipUsluge= 'Nutricionista';
            if(window.location.href.indexOf('masaza')!=-1){
              if(localStorage.getItem('lang')=='en')
              tipUsluge='Massage';
              else tipUsluge='Masaža';

            } else if (localStorage.getItem('lang')=='en'){
              tipUsluge='Nutritionist';
            }
            let zahtev= 'Zahtev za uslugama';
            let prava = `Privatne informacije su zaštićene zakonom o zaštiti ličnih informacija.
            <br> Hvala na poverenju!`;
             if(localStorage.getItem('lang')=='en'){
               zahtev= 'Services request';
               prava= 'Protection of privacy is under jurisdiction of Serbia law';  
             }
             zahtev+=' - ' + tipUsluge;
            
            //stampanje
            let el= document.getElementById("forma").cloneNode(true);
            $(el).addClass("col-12 pt-2");
            let stampa= document.createElement("div");
            stampa.setAttribute("class", "p-4");
            stampa.innerHTML = `<div class="text-center"> 
                <h2 class="title-section">
                <span class="title-regular">${zahtev}</h2> 
                </div><hr class="title-underline " /> 
                 <p> ${prava}
                  </p>`;
            stampa.appendChild(el);

            html2pdf(stampa);
            

    })






});

let nutricionista_opis_srpski = 'Lična dijeta ili lični jelovnik koji sastavlja nutricionista prema svakoj pojedinačnoj osobi može imati za cilj dobijanje na težini, mršavljenje ili održanje telesne težine (mase) uz stvaranje zdravih navika u ishrani.'
let nutricionista_opis_engleski= 'Personal diet by nitritiosnist is made regarding individue, with main purpose for weight gain, weight loss or weight balance. It helps you prevent obesity and anorexia';
let maser_opis_engleski= 'Proffesional massages, for your personal problem! Release neck, back or any other type of pain. Our masseur are one of a kind!';
let maser_opis_srpski='Profesionalne masaže, prilagođene vašim problemima! Oslobodite se bola u leđima, vratu ili drugim delovima tela. Naši maseri su najbolji.'
let placeholders_eng=['First name', 'Last name', 'Phone number '  ];
let textarea_placeholder_eng="Short description of your problem";
let placeholders_srb=['Ime', 'Prezime', 'Telefon '  ];
let textarea_placeholder_srb="Kratak opis problema";
let dugmetekst_SRB= 'POŠALJI ';
let dugmetekst_ENG= 'SEND ';
let slike_tekst_masaze_srp= ['Masaža leđa', 'Masaža nogu', 'Šijacu masaža'];
let slike_tekst_masaze_eng=[ 'Back massage', 'Leg massage', 'Shiatzu massage'];
let slike_tekst_nutr_srp= ['Ivana', 'Ishrana', 'Maja'];
let slike_tekst_nutr_eng=[ 'Ivana', 'Diet', 'Maja'];
let opisFormaNutricionista_srp='Zakažite pregled kod nutricioniste!';
let opisFormaNutricionista_eng='Schedule an appointment with our nutritionist!';
let opisFormaMasaza_srp='Zakažite masažu!';
let opisFormaMasaza_eng='Schedule massage!';
let broadc_nutr_srp = 'Nutricionista';
let broadc_nutr_eng = 'Nutritionist';
let broadc_mas_srp = 'Masaže';
let broadc_mas_eng = 'Massages';

let broadc=[];

let adresa_srb= `<br/>Ulica 3
<br/>34117 Palilula
<br/>Srbija</p>`;
let adresa_eng= `<br/>Ulica 3
<br/>34117 Palilula
<br/>Serbia</p>`;
let adresaTekst= "Adresa:";
let tekstTelefon="Telefon:";


let placeholders=placeholders_srb;
let opis= nutricionista_opis_srpski;
let txt_area_placeholder=textarea_placeholder_srb;
let dugmetekst= dugmetekst_SRB;
let adresa = adresa_srb;
let radnoVremeTekst= "Radno vreme:";
let moreinfo= "Više informacija";
let slike_tekst=[];
let opis_forma=[];

let jezik_srp= 'en';
let jezik_eng= 'rs';
var jezik=jezik_srp;


function LanguageSwitch2(){
  if(window.location.href.indexOf('masaza')!=-1){
    opis= maser_opis_srpski;
    opis_forma=opisFormaMasaza_srp;
    slike_tekst=slike_tekst_masaze_srp;
    broadc=broadc_mas_srp;
    
  }else {opis=nutricionista_opis_srpski;
  opis_forma=opisFormaNutricionista_srp;
  broadc=broadc_nutr_srp;
    slike_tekst=slike_tekst_nutr_srp;
}

  if(localStorage.getItem("lang") =='en'){
    console.log("sadasd");
    jezik=jezik_eng;
    if(window.location.href.indexOf('masaza')!=-1){
      opis= maser_opis_engleski;
      opis_forma=opisFormaMasaza_eng;
      slike_tekst=slike_tekst_masaze_eng;
      broadc=broadc_mas_eng;
      
    }else{
      broadc=broadc_nutr_eng;
      slike_tekst=slike_tekst_nutr_eng;
      opis_forma=opisFormaNutricionista_eng;
    opis=nutricionista_opis_engleski;}
    placeholders=placeholders_eng;
    
     txt_area_placeholder=textarea_placeholder_eng;
     dugmetekst= dugmetekst_ENG;
     adresa = adresa_eng;
     adresaTekst= "Adress:";
     tekstTelefon="Phone number:";
    radnoVremeTekst= "Open:";
    moreinfo="More info";

  }

  document.getElementById("name").placeholder= placeholders[0];
  document.getElementById("prezime").placeholder= placeholders[1];
  document.getElementById("telefon").placeholder= placeholders[2];
  document.getElementById("message").placeholder= txt_area_placeholder;
  document.getElementById("posalji").textContent=dugmetekst;
  document.getElementById("adresaTekst").textContent=adresaTekst;
  document.getElementById("tekstTelefon").textContent=tekstTelefon;
  document.getElementById("radnoVreme").textContent=radnoVremeTekst;
  document.getElementById("moreinfo").textContent=moreinfo;
  document.getElementById("opis").textContent=opis;
  document.getElementById("adresaa").innerHTML=adresa;
  let slikaTekst = document.getElementsByClassName("slikaTekst");
  for(let i=0; i< slikaTekst.length;i++) {
    slikaTekst[i].textContent=slike_tekst[i];
  }
  document.getElementById("opisForma").textContent=opis_forma;
  console.log(jezik);
  document.getElementById("lang").textContent=jezik;
  document.getElementById("link2").textContent=broadc;
  document.title='Fitness/' + broadc;




}