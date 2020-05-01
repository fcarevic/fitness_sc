function scrolled(){
    if ($("#mainNav").offset().top < 100) {
        $("#mainNav").addClass("black");
        $("#mainNav").removeClass("navbar-scrolled");
        $(".dropdown-item").addClass("black");
    }
     else 
        {$("#mainNav").removeClass("black");
        $(".dropdown-item").removeClass("black");
        $("#mainNav").addClass("navbar-scrolled");
    }
}
$(document).ready(function(){
    scrolled();
    $(window).scroll(scrolled);
    
 $(".dropdown-item").on({
            mouseenter: function(){
                if ($("#mainNav").offset().top > 100)
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
                if ($("#mainNav").offset().top > 100)
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

      $("#treningDrop").on({
            mouseenter: function(){
                $(".treningCol").collapse('show');
            },
            
            
      });

      $(".treningCol").on({
          mouseleave: function(){
              
            $(".treningCol").collapse('hide');
          }
      });






})