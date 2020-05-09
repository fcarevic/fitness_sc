positionsSerbian = {

    "position1":{
        "ime": "Lični Trener", 
         "opis":"Nesto lepo o njemu, sta je radio"
    }
,
    
    "position2":{
        "ime": "Lični Trener", 
         "opis":"Nesto lepo o njemu, sta je radio"
    },

    "position3":{
        "ime": "Nutricionista", 
         "opis":"Nesto lepo o njemu, sta je radio"
    },


}

positionsEnglish = {

    "position1":{
        "ime": "Personal training", 
         "opis":"Something nice"
    }
,
    
    "position2":{
        "ime": "Personal training", 
         "opis":"Something nice"
    },

    "position3":{
        "ime": "Nutritionist", 
         "opis":"Something nice"
    },


}

nagradeSerbian={

    "2020":{
        "mesto": "Prvo mesto",
        "opis":"Nesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestu"
    },
    "2019":{
        "mesto": "Drugo mesto",
        "opis":"Nesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestu"
    },
    "2018":{
        "mesto": "Treče mesto",
        "opis":"Nesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestu"
    },
    "2017":{
        "mesto": "Počeli sa radom",
        "opis":"Nesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestuNesto o mestu"
    }

}
nagradeEnglish={

   "2020":{
        "mesto": "First place",
        "opis":"Something about placeSomething about placeSomething about placeSomething about placeSomething about placeSomething about placeSomething about placeSomething about placeSomething about place"
    },
    "2019":{
        "mesto": "Second place",
        "opis":"Something about placeSomething about placeSomething about placeSomething about placeSomething about place"
    },
    "2018":{
        "mesto": "Third place",
        "opis":"Something about placeSomething about placeSomething about placeSomething about placeSomething about place"
    },
    "2017":{
        "mesto": "First open",
        "opis":"Something about placeSomething about placeSomething about placeSomething about placeSomething about placeSomething about place"
    }

}

var bread1 = "ONama";
var title1 = "Mi smo ono sto vam treba";
var title2 = "Nas<br>Tim"
var kontaktAdr = "Kontakt adresa"
var kontakUS = "Kontaktirajte nas"
var callUS = "Pozovite nas"
var officeLocation = "Adesa"

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
                officeLocation = "Adesa"
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
                 $("#lang").text("rs");
        


}

$("#bread1").text(bread1);
$("#title").text(title1);
$("#ourtim").html(title2);
$("#callUS").text(callUS);
$("#office").text(officeLocation);
$("#kontaktirajteNas").text(kontakUS);
$("#kontaktAdress").text(kontaktAdr);


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
    officeLocation = "Adesa"
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

for(let i = 0; i<=3; i++){
    $("#" + (2020-i)+"title").text(nagrade[(2020-i)+""]["mesto"]);
    $("#" + (2020-i)+"body").text(nagrade[(2020-i)+""]["opis"]);
}


for(let i = 1; i<=3;i++){
    $("#position" + i).text(positions["position" + i]["ime"]);
    $("#positionDescription" + i).text(positions["position" + i]["opis"]);
}

})

for(let i = 0; i<=3; i++){
    $("#" + (2020-i)+"title").text(nagrade[(2020-i)+""]["mesto"]);
    $("#" + (2020-i)+"body").text(nagrade[(2020-i)+""]["opis"]);
}


for(let i = 1; i<=3;i++){
    $("#position" + i).text(positions["position" + i]["ime"]);
    $("#positionDescription" + i).text(positions["position" + i]["opis"]);
}
