$(document).ready(function(){
  $('#puzzle-start, #play_button').click(function(){
    $('#main-puzzle-box').show(function(){
      $(this).click().animate({
        "width":"100%",
        "display":"block"
      },'fast');
    });
  });

  $('#puzzle-start').hover(function(){
    $('#main-puzzle-box').show(function(){
      $(this).click().animate({
        "width":"100%",
        "display":"block"
      },'fast');
    });
  });

  $('#main-header').mouseenter(function(){
    $('#main-header').animate({
      "opacity":".8"
    });
  });

  $('#main-puzzle-box').dblclick(function(){
    $('#main-puzzle-box').hide(function(){
      $(this).fadeOut()
    });
  });

  $('.puzzle-set').sortable();
});
