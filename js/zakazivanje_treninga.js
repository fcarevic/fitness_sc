
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


     // Activate scrollspy to add active class to navbar items on scroll
     $('body').scrollspy({
        target: '#mainNav',
        offset: 75
      });
      
      // Collapse Navbar
      var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 50) {
          $("#mainNav").addClass("navbar-scrolled");
          $(".dropdown-item").css({
            "color": "black",
            "background-color": "white"
          });
          $("#mainNav").removeClass("black");
           $("#sidebarCollapse").addClass("bojaSlovaCrna");
        } else {
          $(".dropdown-item").css({
            "color": "lightgrey",
            "background-color": "black"
          });
          $("#mainNav").addClass("black");
          $("#sidebarCollapse").removeClass("bojaSlovaCrna");
          $("#mainNav").removeClass("navbar-scrolled");
        }
      };
      // Collapse now if page is not at top
      navbarCollapse();
      // Collapse the navbar when page is scrolled
      $(window).scroll(navbarCollapse);
    
      // Magnific popup calls
      $('#portfolio').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
      });
    
  // End of use strict
  
  
      $(".dropdown-item").on({
          mouseenter: function(){
              if ($("#mainNav").offset().top > 50)
               $(this).css({
                      "color" :"white",
                      "background-color" : "black" 
                  });
              else 
              $(this).css({
                  "background-color" : "white" ,
                  "color" : "black"
              });
                  },
          mouseleave: function(){
              if ($("#mainNav").offset().top > 50)
              $(this).css({
                  "color": "black",
                  "background-color" : "white"
              });
              else  $(this).css({
                  "color" :"lightgrey",
                  "background-color" : "black" 
              });
  
  
          }
  
  
      });

      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 72)
            }, 1000, "easeInOutExpo");
            return false;
          }
        }
      });
    
      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
      });
    
});