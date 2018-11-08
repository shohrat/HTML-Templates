$(document).ready(function(){
/*==================Popup===============*/
$("button.callback").click(function(){
$("form#form_callback").show();
$("#popup-box").show();
});

$("button.writeus").click(function(){
$("form#form_contact_us").show();
$("#popup-box").show();
});

$("#popup-display .fa-window-close").click(function(){
$("#popup-box").hide();
$("form#form_callback").hide();
$("form#form_contact_us").hide();
});
/*==================/Popup===============*/

});