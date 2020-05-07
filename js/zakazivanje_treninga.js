
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
        "yoga1":   "Karma Yoga",
        "yoga2": "Radza Yoga",
        "yoga3": "Hata Yoga",
        "pilates1": "Klasični pilates",
        "pilates2": "Reformer pilates",
        "pilates3":"Stott pilates",
        "core1": "Crossfit",
        "core2": "Abdomenalni trening",
        "core3": "Klasicni trening",
        "cardio1":"Kardio Box",
        "cardio2": "Trčanje",
        "cardio3" : "Kružni trening"

    }
     
    imenaTreningaEnglish = {
        "yoga1":"Karma Yoga"  ,
        "yoga2": "Raja Yoga",
        "yoga3":"Hata Yoga",
        "pilates1":"Classical pilates",
        "pilates2":"Reformer pilates",
        "pilates3":"Stott pilates",
        "core1":"Crossfit",
        "core2":"Abodminal trening",
        "core3":"Classical trenning",
        "cardio1":"Cardio Box",
        "cardio2":"Running",
        "cardio3": "Circular trenning"

    }
     
    if(localStorage.getItem("lang")==null){
        imenaTreninga = imenaTreningaSerbian;
        imeDugmeta = "Izaberi";
        tipBiranje = "Izaberi tip";
        tipBiranjeHeader = "Izaberite tip treninga";
        breadcrumbzak = "Zakazivanje treninga";
        textlang = "en";
    } else {
        if(localStorage.getItem("lang")=="en"){
            imenaTreninga = imenaTreningaEnglish;
            imeDugmeta = "Choose";
            tipBiranje = "Choose type";
            tipBiranjeHeader = "Choose training type";
            breadcrumbzak = "Training reservation";
            textlang = "sr";
        } else {
            imenaTreninga = imenaTreningaSerbian;
            imeDugmeta = "Izaberi";
            tipBiranje = "Izaberi tip";
            tipBiranjeHeader = "Izaberite tip treninga";
            breadcrumbzak = "Zakazivanje treninga";
            textlang = "en";
            
        }            

    }

    treninzi = ["pilates", "yoga", "core", "cardio"]
  
    for(let i = 0; i< 4; i++)
        for(let j = 1; j<=3;j++){
                        $("#" + treninzi[i] + j).text(imenaTreninga[treninzi[i]+j])
                        console.log(treninzi[i] + j)
                        console.log(imenaTreninga[treninzi[i]+j])
                    }
            
    $(".izaberiDugme").text(imeDugmeta);
    $("#buttonTip").text(tipBiranje);
    $("#izaberiteTipTeninga").text(tipBiranjeHeader);
    $("#breadcrumbzak").text(breadcrumbzak);
    $("#lang").text(textlang);



    $("#lang").click(function () {
        if($(this).text() == "en"){
            imenaTreninga = imenaTreningaEnglish;
            imeDugmeta = "Choose";
            tipBiranje = "Choose type";
            tipBiranjeHeader = "Choose training type";
            breadcrumbzak = "Training reservation";
            $(this).text("rs");
            localStorage.setItem("lang", "en");
        }else{
            imenaTreninga = imenaTreningaSerbian;
            imeDugmeta = "Izaberi";
            tipBiranje = "Izaberi tip";
            tipBiranjeHeader = "Izaberite tip treninga";
            breadcrumbzak = "Zakazivanje treninga";
            $(this).text("en");
            localStorage.setItem("lang", "rs");
        }
     
        for(let i = 0; i< 4; i++)
             for(let j = 1; j<=3;j++)
                 $("#" + treninzi[i] + j).text(imenaTreninga[treninzi[i]+j])
            
        $(".izaberiDugme").text(imeDugmeta);
        $("#buttonTip").text(tipBiranje);
        $("#izaberiteTipTeninga").text(tipBiranjeHeader);
        $("#breadcrumbzak").text(breadcrumbzak);

      })
     
     
});