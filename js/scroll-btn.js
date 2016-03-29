$(document).on('ready page:load', function() {
  var $panel2;
  $panel2 = $('#services');
  if ($panel2.length > 0) {
    return $('#btn-to-services').on('click', function(e) {
      e.preventDefault();
      return $('html, body').animate({
        'scrollTop': $panel2.offset().top
      }, 500);
    });
  }
});