

var treninzi = ['Crossfit','Klasični pilates',  'Kružni trening'];

$(document).ready(function(){

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
                    "background-color" : "transparent" 
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
////////////////////////////////////////////////////
  $("#0 ,#1 , #2").on({
        mouseenter: function(){
            this.style.opacity= 0.5;
        },
        mouseleave: function(){
            this.style.opacity=1;
        },
        click: function(){
              let ind = parseInt(this.id);
                sessionStorage.setItem('kategorija',treninzi[ind]);
                loadPage("prikazKategorije");
        }

  })
  





})