$(document).ready(function() {
  

$("#pilates").click(function(){


    $(".pilatesTip").show();
    $(".coreTip").hide();
    $(".yogaTip").hide();
    $(".crossfitTip").hide();

})

$("#yoga").click(function(){


    $(".pilatesTip").hide();
    $(".coreTip").hide();
    $(".yogaTip").show();
    $(".crossfitTip").hide();

})

$("#core").click(function(){


    $(".pilatesTip").hide();
    $(".coreTip").show();
    $(".yogaTip").hide();
    $(".crossfitTip").hide();

})
$("#cardio").click(function(){


    $(".pilatesTip").hide();
    $(".coreTip").hide();
    $(".yogaTip").hide();
    $(".crossfitTip").show();

})


})