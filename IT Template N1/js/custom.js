jQuery(document).ready(function($){


    var flag = true;

    $(".mob-menu-btn").click(function () {
        if(flag==true)
        {
            $(".top-menu").show();
            flag=!flag;
        }
        else
        {
            $(".top-menu").hide();
            flag=!flag;
        }
    });
});