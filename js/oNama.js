positionsSerbian = {

    "position1":{
        "ime": "Lični Trener", 
         "opis":"Najbolje za vase telo! Dobijte savrsenu figuru uz personalizovani plan treninga i trenera koji će pratiti vaš rad!"
    }
,
    
    "position2":{
        "ime": "Lični Trener", 
         "opis":"Najbolje za vase telo! Dobijte savrsenu figuru uz personalizovani plan treninga i trenera koji će pratiti vaš rad!"
    },

    "position3":{
        "ime": "Nutricionista", 
         "opis":"Postignite najbolje rezultate uz plan ishrane kreiran specijalno za vas!"
    },


}

positionsEnglish = {

    "position1":{
        "ime": "Personal traininer", 
         "opis": "Best for you body! Get perfect figure using training plan designed specific for you!"
    }
,
    
    "position2":{
        "ime": "Personal trainer", 
         "opis":"Best for you body! Get perfect figure using training plan designed specific for you!"
    },

    "position3":{
        "ime": "Nutritionist", 
         "opis":"Get best result using nutrition plan designed specific for you!"
    },


}

nagradeSerbian={

    "2020":{
        "mesto": "Prvo mesto",
        "opis":"Najbolja teretana po oceni korisnika!" },
    "2019":{
        "mesto": "Drugo mesto",
        "opis":"Drugo mesto po najboljoj opremi u regionu!"
     },
    "2018":{
        "mesto": "Treče mesto",
        "opis":"Treće mesto po broju korisnika u regionu!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    },
    "2017":{
        "mesto": "Počeli sa radom",
        "opis": "Otvorili fitnes centar!"  }

}
nagradeEnglish={

   "2020":{
        "mesto": "First place",
        "opis":"The best fitness center by users expectation!"
    },
    "2019":{
        "mesto": "Second place",
        "opis":"The second place by quality of equipment in our region!"
    },
    "2018":{
        "mesto": "Thrid place",
        "opis": "Third place bt number of users in our region!&nbsp;&nbsp;&nbsp;&nbsp;"
    },
    "2017":{
        "mesto": "First open",
        "opis": "Fitness center open!"  }

}

var bread1 = "ONama";
var title1 = "Mi smo ono sto vam treba";
var title2 = "Nas<br>Tim"
var kontaktAdr = "Kontakt adresa"
var kontakUS = "Kontaktirajte nas"
var callUS = "Pozovite nas"
var officeLocation = "Adresa"
var adresa = "Bulevar kralja Aleksandra 70, 11100 Beograd"

var positions = positionsSerbian;
var nagrade = nagradeSerbian;
if(localStorage.getItem("lang")==null || localStorage.getItem("lang")=="rs"){
                positions = positionsSerbian;
                nagrade = nagradeSerbian;
                bread1 = "ONama";
                title1 = "Mi smo ono sto vam treba";
                title2 = "Nas<br>Tim"
                kontaktAdr = "Kontakt adresa"
                kontakUS = "Kontaktirajte nas"
                callUS = "Pozovite nas"
                officeLocation = "Adresa"
                adresa = "Bulevar kralja Aleksandra 70, 11100 Beograd"
                $("#lang").text("en");
        



}else{
                 positions = positionsEnglish;
                 nagrade = nagradeEnglish;
                 bread1 = "AboutUs";
                 title1 = "We are the best for all your needs";
                 title2 = "Our<br>Team"
                 kontaktAdr = "Contact Adress"
                 kontakUS = "Contact US"
                 callUS = "Call US"
                 officeLocation = "Adress"
                 adresa = "Bulevar kralja Aleksandra 70, 11100 Belgrade"
                 $("#lang").text("rs");
        


}

$("#bread1").text(bread1);
$("#title").text(title1);
$("#ourtim").html(title2);
$("#callUS").text(callUS);
$("#office").text(officeLocation);
$("#kontaktirajteNas").text(kontakUS);
$("#kontaktAdress").text(kontaktAdr);
$("#adresa").text(adresa)
document.title = "Fitness/" + bread1;

$("#lang").click(function(){

if($(this).text()=="en"){
    positions = positionsEnglish;
    nagrade = nagradeEnglish;
    bread1 = "AboutUs";
    title1 = "We are the best for all your needs";
    title2 = "Our<br>Team"
    kontaktAdr = "Contact Adress"
    kontakUS = "Contact US"
    callUS = "Call US"
    officeLocation = "Adress"
    adresa = "Bulevar kralja Aleksandra 70, 11100 Belgrade"
    $("#lang").text("rs");
    localStorage.setItem("lang", "en");

} else{
    positions = positionsSerbian;
    nagrade = nagradeSerbian;
    bread1 = "ONama";
    title1 = "Mi smo ono sto vam treba";
    title2 = "Nas<br>Tim"
    kontaktAdr = "Kontakt adresa"
    kontakUS = "Kontaktirajte nas"
    callUS = "Pozovite nas"
    adresa = "Bulevar kralja Aleksandra 70, 11100 Beograd"
    officeLocation = "Adresa"
    $("#lang").text("en");
    localStorage.setItem("lang", "rs");
}

$("#bread1").text(bread1);
$("#title").text(title1);
$("#ourtim").html(title2);
$("#callUS").text(callUS);
$("#office").text(officeLocation);
$("#kontaktirajteNas").text(kontakUS);
$("#kontaktAdress").text(kontaktAdr);
$("#adresa").text(adresa);
document.title = "Fitness/" + bread1;

for(let i = 0; i<=3; i++){
    $("#" + (2020-i)+"title").text(nagrade[(2020-i)+""]["mesto"]);
    $("#" + (2020-i)+"body").html(nagrade[(2020-i)+""]["opis"]);
}


for(let i = 1; i<=3;i++){
    $("#position" + i).text(positions["position" + i]["ime"]);
    $("#positionDescription" + i).text(positions["position" + i]["opis"]);
}

})

for(let i = 0; i<=3; i++){
    $("#" + (2020-i)+"title").text(nagrade[(2020-i)+""]["mesto"]);
    $("#" + (2020-i)+"body").html(nagrade[(2020-i)+""]["opis"]);
}


for(let i = 1; i<=3;i++){
    $("#position" + i).text(positions["position" + i]["ime"]);
    $("#positionDescription" + i).text(positions["position" + i]["opis"]);
}
