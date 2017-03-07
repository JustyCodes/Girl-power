var main = setInterval(function() {
  if ($('header').hasClass('white')) {
    $('header').removeClass('white');
    $('header').addClass('pink');
  } else if ($('header').hasClass('pink')) {
    $('header').removeClass('pink');
    $('header').addClass('magenta');
  } else if ($('header').hasClass('magenta')){
    $('header').removeClass('magenta');
    $('header').addClass('pink2');
  } else {
    $('header').removeClass('pink2');
    $('header').addClass('white')
  }
    
}, 1000);
$(document).ready(main);