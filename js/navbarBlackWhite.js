function scrolled(){
    if ($("#mainNav").offset().top < 100) {
        $("#mainNav").addClass("black");
        $("#mainNav").removeClass("navbar-scrolled");
        $(".dropdown-item").addClass("black");
        $(".dropdown-item").removeClass("white");
        $("#lang").addClass("langColor");
        $("#lang").removeClass("whiteTrans");
    }
     else 
        {$("#mainNav").removeClass("black");
        $("#mainNav").addClass("navbar-scrolled");
      
        $(".dropdown-item").addClass("white");
        $(".dropdown-item").removeClass("black");
      
        $("#lang").addClass("whiteTrans");
        $("#lang").removeClass("langColor");
    }
}

$(document).ready(function(){
    scrolled();
    $(window).scroll(scrolled);
   
    
 $(".dropdown-item").on({
            mouseenter: function(){
                if ($("#mainNav").offset().top >= 100){
                        $(this).removeClass("white");
                        $(this).addClass("black");

                }
                
                else {
                    $(this).removeClass("black");
                    $(this).addClass("white");
                    }
                },
            mouseleave: function(){
                if ($("#mainNav").offset().top >= 100)
               {
                   $(this).removeClass("black");
               $(this).addClass("white");

               }
                else  {
                    $(this).removeClass("white");
                        $(this).addClass("black");
                }


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







});

