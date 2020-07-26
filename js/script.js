//BURGER MENU
$(document).ready(function() {
  "use strict";

  $("#mob").click(function() {
      $(this).toggleClass("active");
      $(".header__link").toggleClass('active');
  });

});
//BURGER MENU


//BUTTON
$('#btnfl, #btnfle').hover(
  function() {
  $(this).html('free lesson');
  $(this).css({
    'background-color':'#fff',
    'color':'#FE2345',
    'transition':'all .5s ease'
  });
},
  function() {
  $(this).html('Бесплатный урок');
  $(this).css({
    'background-color':'#FE2345',
    'color':'#fff',
    'transition':'all .5s ease'
  });
}
);
//BUTTON

