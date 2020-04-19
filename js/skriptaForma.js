/*!
    * Start Bootstrap - Creative v6.0.1 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
    */
   $(document).ready(function(){
    // Smooth scrolling using jQuery easing
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
        })
      } else {
        $(".dropdown-item").css({
          "color": "lightgrey",
          "background-color": "black"
        })
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






})