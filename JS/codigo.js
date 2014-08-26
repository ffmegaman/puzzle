$(document).ready(function(){
  $('#puzzle-start, #play_button').click(function(){
    $('#main-puzzle-box').show(function(){
      $(this).click().animate({
       "width":"100%",
       "display":"block"
      },'fast');
    });
  });

    $('#click-about').click(function(){
    $('#main-about-box').show(function(){
      $(this).click().animate({
      "height":"31.9em",
      "display":"block",
      "z-index":"1000"
      },'slow');
    });
  });

  $('#main-about-box').mouseleave(function(){
    $(this).fadeOut(1300);
  });


  $('#back-button').on('click', function(){
    $('#main-puzzle-box').fadeOut('slow');
  });

  $('.puzzle-set-1').sortable();
  $('.puzzle-set-2').sortable();

function shuffleArray(o){
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function insertShuffled(puzzleSet) {
  var pieces = $(puzzleSet + '> li');
  $(puzzleSet).empty();
  $.each(shuffleArray(pieces), function(index, piece){
    $(puzzleSet).append(piece);
  });
}

insertShuffled('.puzzle-set-1');


});



