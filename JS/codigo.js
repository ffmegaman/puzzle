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
       "height":"35.9em",
       "display":"block"
      },'slow');
    });
  });

  $('#click-about').click(function(){
    $('#about-chino, #about-phillip').show(function(){
      $(this).click().animate({
        "display":"block"
      });
    });
  });

  $('#main-about-box').mouseleave(function(){
    $(this).fadeOut(1300);
  });

  $('#main_logo').on('click', function(){
    $('#main-puzzle-box').fadeOut('slow');
  });

  $('#play_button, #puzzle-start, #click-about').click(function(){
    $('#main-header').animate({
      "opacity":"1"
    }, 'fast');
  });

  $('li').hover(function(){
    $(this).animate({
      "opacity":"1"
    }, 'fast');
  });

  $('#play_button, #puzzle-start').click(function(){
    $('#your-status').slideToggle("fast", function(){
      $('#your-status').animate({
        "width":"18%",
        "opacity":"1",
        "z-index":"998"
      }, 'fast');
    });
  });

  $('#main_logo').on('click', function(){
    $('#your-status').fadeOut();
  });

  $('.puzzle-set-1').sortable();
  $('#puzzle-set-2').sortable();

  // This hides the puzzle set
  $('#puzzle-set-2').hide();

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

  $('#play_button').on('click', insertShuffled('.puzzle-set-1'), false);


});



