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
       // "height":"35.9em",
       "display":"block",
       "float":"left"
      },'slow');
    });
  });

  $('#click-about').click(function(){
    $('#about-chino, #about-phillip, #about-trottier, #la-info').show(function(){
      $(this).click().animate({
        "display":"block"
      });
    });
  });

  $('#click-about').click(function(){
    $('#main-puzzle-box').blur();
  });

  $('.go-back').click(function(){
    $('#main-about-box').fadeOut('slow');
  });


  $('#main_logo').on('click', function(){
    $('#main-puzzle-box').fadeOut('slow');
  });

  $('#play_button, #puzzle-start, #click-about').click(function(){
    $('#main-header').animate({
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

  $('#click-about').click(function(){
    $('#puzzle-set-1').addClass('blur');
  });
  $('.go-back').click(function(){
    $('#puzzle-set-1').removeClass('blur');
  });

  $('#click-about').click(function(){
    $('#puzzle-set-2').addClass('blur');
  });

  $('.go-back').click(function(){
    $('#puzzle-set-2').removeClass('blur');
  });

  // $('#click-about').click(function(){
  //   $('.level-set').hide();
  // });

  // $('.go-back').click(function(){
  //   $('.level-set').show('slow');
  // });

  $('#main_logo').on('click', function(){
    $('#your-status').fadeOut();
  });


//  $('#puzzle-set-1').sortable();
//  $('#puzzle-set-2').sortable();

  // This hides the puzzle set
  $('#puzzle-set-2').hide();



  // ========== Shuffle Codes Below this Point ===============//


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

  $('.start-button').on('click', function(){
    insertShuffled(currentLevel);
    $(this).hide();
    $('.shuffle-button').css({'display': 'inline-block'});
  });
  $('.shuffle-button').on('click', function(){
    insertShuffled(currentLevel);
  });

  // ========== Game Codes Below This Point ===============//

  // Upon new game, instantiate a new GameRecord.
  // Start timer with timeObject.runTime(<instance variable of GameRecord>)
  // For example, if you used: var game = new GameRecord;
  // Start timer like this: timeObject.runTime(game);
  // Stop timer with timeObject.stopTime = true;
  function GameRecord() {
    this.gameOneTime = 0;
    this.gameTwoTime = 0;
  }

  var game = new GameRecord();
  var currentLevel = '#puzzle-set-1';

  var timeObject = {
    stopTime: false,
    currentSeconds: 0,
    currentTime: function(){
      var mins = Math.floor(this.currentSeconds / 60);
      var seconds = this.currentSeconds % 60;
      if (seconds < 10) {
        return mins + ":" + "0" + seconds;
      }
      else {
        return mins + ":" + seconds;
      }
    },
    messages: function(){
      if (timeObject.currentSeconds === 30) {
        $("#iq-level span").fadeIn().text("Toddler");
        $("#messages").slideDown("slow").text("Your IQ has lowered to Toddler status!");
        setTimeout(function(){
          $('#messages').empty();
        }, 5000);
      }
      else if (timeObject.currentSeconds === 60) {
        $("#iq-level span").fadeIn().text("Rugrat");
        $("#messages").slideDown("slow").text("Your IQ has lowered to Rugrat status!");
        setTimeout(function(){
          $('#messages').empty();
        }, 5000);
      }
      else if (timeObject.currentSeconds === 90) {
        $("#iq-level span").fadeIn().text("Infant");
        $("#messages").slideDown("slow").text("Your IQ has lowered to Infant status!");
        setTimeout(function(){
          $('#messages').empty();
        }, 5000);
      }
      else if (timeObject.currentSeconds === 120) {
        $("#iq-level span").fadeIn().text("Fetus");
        $("#messages").slideDown("slow").text("Your IQ has lowered to Infant status!");
        setTimeout(function(){
          $('#messages').empty();
        }, 5000);
      }
      else if (timeObject.currentSeconds === 150) {
        $("#iq-level span").fadeIn().text("Egg");
        $("#messages").slideDown("slow").text("Your IQ has lowered to Egg status!");
        setTimeout(function(){
          $('#messages').empty();
        }, 5000);
      };
    },
    runTime: function(gameRecord){
      timeObject.messages();
      if(timeObject.stopTime){
        timeObject.currentSeconds -= 1; // Adjust 1 sec time difference
        if (currentLevel == '#puzzle-set-1') {
          gameRecord.gameOneTime = timeObject.currentTime();
        }
        else {
          gameRecord.gameTwoTime = timeObject.currentTime();
        }
        currentLevel = '#puzzle-set-2';
        levelObject.nextLevel();
        $('#average-time span').text(gameRecord.gameOneTime);
        this.currentSeconds = 0;
        $('#timer span').text(timeObject.currentTime());
        console.log(gameRecord);
        timeObject.stopTime = false;
      }
      else{
        window.setTimeout(function(){
          timeObject.currentSeconds += 1;
          $('#timer span').text(timeObject.currentTime());
          timeObject.runTime(gameRecord);
        }, 1000);
      }
    }
  };


  var levelObject = {
    nextLevel: function(){
      $('#puzzle-set-1').hide();
      $(currentLevel).show();
      $('.start-button').show();
      $('.shuffle-button').css({'display': 'none'});
    },
    checkPuzzleComplete: function(){
      var unsortedPieces = [];
      var originalPieces = [];
      $(currentLevel + ' li img').each(function(){
        unsortedPieces.push($(this).attr('src'));
      });
      $(currentLevel + ' li img').each(function(){
        originalPieces.push($(this).attr('src'));
      });
      var sortedPieces = unsortedPieces.sort();
      if (sortedPieces.join() == originalPieces.join()){
        timeObject.stopTime = true;
      }
    }
  }

  function startGame(){
    $(currentLevel).sortable();
    timeObject.runTime(game);
  }

  $('.time-start').on('click', startGame);

  $('#puzzle-set-1, #puzzle-set-2').on('sortupdate', levelObject.checkPuzzleComplete);
});
