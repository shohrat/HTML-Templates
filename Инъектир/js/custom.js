// Created by Bayramklychev Shohrat
jQuery(document).ready(function($){


    var flag = true;

    $("#mob-menu-btn").click(function () {
        if(flag==true)
        {
            $("#mob-menu-block").show();
            flag=!flag;
        }
        else
        {
            $("#mob-menu-block").hide();
            flag=!flag;
        }
    });


/*==================Popup===============*/
$(".top-callback").click(function(){
$("form#form_callback").show();
$("#popup-box").show();
});

$("#popup-display .fa-window-close").click(function(){
$("#popup-box").hide();
$("form#form_callback").hide();
});
/*==================/Popup===============*/

});

