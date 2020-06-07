
$(document).ready(function () {

    

    $("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $("#pilates").click(function(){


        $(".pilatesTip").show();
        $(".coreTip").hide();
        $(".yogaTip").hide();
        $(".cardioTip").hide();
         // open or close navbar
         $('#sidebar').toggleClass('active');
         // close dropdowns
         $('.collapse.in').toggleClass('in');
         // and also adjust aria-expanded attributes we use for the open/closed arrows
         // in our CSS
         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    
    })
    
    $("#yoga").click(function(){
    
    
        $(".pilatesTip").hide();
        $(".coreTip").hide();
        $(".yogaTip").show();
        $(".cardioTip").hide();
         // open or close navbar
         $('#sidebar').toggleClass('active');
         // close dropdowns
         $('.collapse.in').toggleClass('in');
         // and also adjust aria-expanded attributes we use for the open/closed arrows
         // in our CSS
         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    
    })
    
    $("#core").click(function(){
    
    
        $(".pilatesTip").hide();
        $(".coreTip").show();
        $(".yogaTip").hide();
        $(".cardioTip").hide();
         // open or close navbar
         $('#sidebar').toggleClass('active');
         // close dropdowns
         $('.collapse.in').toggleClass('in');
         // and also adjust aria-expanded attributes we use for the open/closed arrows
         // in our CSS
         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    
    })
    $("#cardio").click(function(){
    
    
        $(".pilatesTip").hide();
        $(".coreTip").hide();
        $(".yogaTip").hide();
        $(".cardioTip").show();
         // open or close navbar
         $('#sidebar').toggleClass('active');
         // close dropdowns
         $('.collapse.in').toggleClass('in');
         // and also adjust aria-expanded attributes we use for the open/closed arrows
         // in our CSS
         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    
    })




    imenaTreningaSerbian = {
        "yoga1":   "Karma Joga",
        "yoga2": "Radža Joga",
        "yoga3": "Hata Joga",
        "pilates1": "Klasični pilates",
        "pilates2": "Reformer pilates",
        "pilates3":"Stott pilates",
        "core1": "Crossfit",
        "core2": "Abdomenalni trening",
        "core3": "Klasični trening",
        "cardio1":"Kardio Boks",
        "cardio2": "Trčanje",
        "cardio3" : "Kružni trening"
    
    }
     
    imenaTreningaEnglish = {
        "yoga1":"Kharma Yoga"  ,
        "yoga2": "Raja Yoga",
        "yoga3":"Hatha Yoga",
        "pilates1":"Classic pilates",
        "pilates2":"Reformer pilates",
        "pilates3":"Stott pilates",
        "core1":"Crossfit",
        "core2":"Abodminal training",
        "core3":"Classic training",
        "cardio1":"Cardio Box",
        "cardio2":"Running",
        "cardio3": "Circular training"
    
    }

    tipoviSerbian  = {
        "c": "Core",
        "p": "Pilates",
        "y":"Joga",
        "cardio":"Kardio"
    }

    tipoviEnglish = {
        "c": "Core",
        "p": "Pilates",
        "y":"Yoga",
        "cardio":"Cardio"
    }
   
     
    if(localStorage.getItem("lang")==null){
        imenaTreninga = imenaTreningaSerbian;
        imeDugmeta = "Izaberi";
        tipBiranje = "Izaberi tip";
        tipBiranjeHeader = "Izaberite tip treninga";
        breadcrumbzak = "Zakazivanje treninga";
        textlang = "en";
        tipovi = tipoviSerbian;


    } else {
        if(localStorage.getItem("lang")=="en"){
            imenaTreninga = imenaTreningaEnglish;
            imeDugmeta = "Choose";
            tipBiranje = "Choose type";
            tipBiranjeHeader = "Choose training type";
            breadcrumbzak = "Training reservation";
            textlang = "rs";
            tipovi = tipoviEnglish;
        } else {
            imenaTreninga = imenaTreningaSerbian;
            imeDugmeta = "Izaberi";
            tipBiranje = "Izaberi tip";
            tipBiranjeHeader = "Izaberite tip treninga";
            breadcrumbzak = "Zakazivanje treninga";
            textlang = "en";
            tipovi = tipoviSerbian;
        }            

    }

    $("#pilates").text(tipovi["p"]);
    $("#yoga").text(tipovi["y"]);
    $("#core").text(tipovi["c"]);
    $("#cardio").text(tipovi["cardio"]);

    treninzi = ["pilates", "yoga", "core", "cardio"]
  
    for(let i = 0; i< 4; i++)
        for(let j = 1; j<=3;j++){
                        $("#" + treninzi[i] + j).text(imenaTreninga[treninzi[i]+j])
                      
                    }
            
    $(".izaberiDugme").text(imeDugmeta);
    $("#buttonTip").text(tipBiranje);
    $("#izaberiteTipTeninga").text(tipBiranjeHeader);
    $("#breadcrumbzak").text(breadcrumbzak);
    $("#lang").text(textlang);
    document.title = "Fitness/" + breadcrumbzak;


    $("#lang").click(function () {
        if($(this).text() == "en"){
            imenaTreninga = imenaTreningaEnglish;
            imeDugmeta = "Choose";
            tipBiranje = "Choose type";
            tipBiranjeHeader = "Choose training type";
            breadcrumbzak = "Training reservation";
            $(this).text("rs");
            localStorage.setItem("lang", "en");
            tipovi = tipoviEnglish;
        }else{
            imenaTreninga = imenaTreningaSerbian;
            imeDugmeta = "Izaberi";
            tipBiranje = "Izaberi tip";
            tipBiranjeHeader = "Izaberite tip treninga";
            breadcrumbzak = "Zakazivanje treninga";
            $(this).text("en");
            localStorage.setItem("lang", "rs");
            tipovi = tipoviSerbian;
        }
     
        for(let i = 0; i< 4; i++)
             for(let j = 1; j<=3;j++)
                 $("#" + treninzi[i] + j).text(imenaTreninga[treninzi[i]+j])
            
        $(".izaberiDugme").text(imeDugmeta);
        $("#buttonTip").text(tipBiranje);
        $("#izaberiteTipTeninga").text(tipBiranjeHeader);
        $("#breadcrumbzak").text(breadcrumbzak);

        $("#pilates").text(tipovi["p"]);
        $("#yoga").text(tipovi["y"]);
        $("#core").text(tipovi["c"]);
        $("#cardio").text(tipovi["cardio"]);
        document.title = "Fitness/" + breadcrumbzak;
      })
     
     
});