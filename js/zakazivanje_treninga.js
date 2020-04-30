
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
        $(".crossfitTip").hide();
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
        $(".crossfitTip").hide();
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
        $(".crossfitTip").hide();
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
        $(".crossfitTip").show();
         // open or close navbar
         $('#sidebar').toggleClass('active');
         // close dropdowns
         $('.collapse.in').toggleClass('in');
         // and also adjust aria-expanded attributes we use for the open/closed arrows
         // in our CSS
         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    
    })
});