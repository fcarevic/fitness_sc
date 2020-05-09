/*!
    * Start Bootstrap - Creative v6.0.1 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
    */
   $(document).ready(function(){
  
    $("#pdf").click(function(){
       
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
                flag=false;
            }
            if(!(imerex.test($("#prezime").val()))) {
                $("#prezime").css({"border-color" : "red"});
                 flag=false;}
          
            //testira datum da li je prazan ili prosao
             if( $("#date").val() == "")  { 
                $("#date").css({"border-color" : "red"}); 
                flag=false;}
             else {  let date = new Date( $("#date").val());
                  let curr = new Date();
                  if (curr.getTime()> date.getTime()) {
                    $("#date").css({"border-color" : "red"});
                     flag=false;
                  }
            }
             if( $("#message").val() == "")  { 
                    $("#message").css({"border-color" : "red"});
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
                  flag=false;
              }
              
          
            let emailreg= /^\w+@\w+([-\.]\w+)*(\.\w{2,3})+$/
            if(!emailreg.test($("#email").val())) {
              $("#email").css({"border-color" : "red"}); flag=false;
            }
            
            if(!flag) return;
            
            //stampanje
            let el= document.getElementById("forma").cloneNode(true);
            $(el).addClass("col-12 pt-2");
            let stampa= document.createElement("div");
            stampa.setAttribute("class", "p-4");
            stampa.innerHTML = '<div class="text-center"> <h2 class="title-section"><span class="title-regular">Zahtev za uslugama</h2> </div><hr class="title-underline " />  <p>Privatne informacije su zaštićene zakonom o zaštiti ličnih informacija. <br> Hvala na poverenju!</p>';
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




function switchLanguage(){
  if(window.location.href.indexOf('masaza')!=-1){
    opis= maser_opis_srpski;
    
  }else opis=nutricionista_opis_srpski;

  if(localStorage.getItem("lang") =='en'){
    if(window.location.href.indexOf('masaza')!=-1){
      opis= maser_opis_engleski;
      
    }else opis=nutricionista_opis_engleski;
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



}