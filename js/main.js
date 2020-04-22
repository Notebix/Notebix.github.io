//@prepros-append jq-start.js
//@prepros-append script.js
//@prepros-append jq-end.js

$(document).ready(function() {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('.body').toggleClass('lock');
   });
});

