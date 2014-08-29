// Shows the main PuzzleBox
$(document).ready(function(){
  $('#puzzle-start, #play_button').click(function(){
    $('#main-puzzle-box').show(function(){
      $(this).click().animate({
       "width":"100%",
       "display":"block"
      },'fast');
    });
  });
// Shows the AboutBox
  $('#click-about').click(function(){
    $('#main-about-box').show(function(){
      $(this).click().animate({
       "display":"block",
       "float":"left"
      },'slow');
    });
  });
// Shows content inside the AboutBox
  $('#click-about').click(function(){
    $('#about-chino, #about-phillip, #about-trottier, #la-info').show(function(){
      $(this).click().animate({
        "display":"block"
      });
    });
  });
// Blur the image behind the AboutBox
  $('#click-about').click(function(){
    $('#main-puzzle-box').blur();
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
// hides the AboutBox
  $('.go-back').click(function(){
    $('#main-about-box').effect("drop" ,'slow');
  });
// hides the PuzzleBox
  $('#main_logo').on('click', function(){
    $('#main-puzzle-box').effect("drop" ,'slow');
  });
// hides and shows the timer
  $('#play_button, #puzzle-start').click(function(){
    $('#your-status').slideToggle("fast", function(){
      $('#your-status').effect("pulsate", 'fast');
    });
  });
// hides the timer along with the PuzzleBox
  $('#main_logo').on('click', function(){
    $('#your-status').fadeOut('fast');
  });
// This hides the puzzle set
  $('#puzzle-set-2').hide();
// You are the future infinite effect
  setInterval(function(){
    $('.red').effect("pulsate", 3000)
  });
// Hides the completion message after the ned of the game
  $('.close-button').on('click', function(){
    $('.upon-completion').fadeOut('slow');
    levelObject.reset();
  });
// this is temporary
 // $('#your-status').hover(function(){
 //   $('.upon-completion').fadeIn(1080,function(){
 //     $('.upon-completion').animate({
 //       "display":"block"
 //     });
 //   });
 // });
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
  };

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
    this.gameOneIQ = 'Kid';
    this.gameTwoIQ = 'Kid';
  }

  // Global Variables
  var game = new GameRecord();
  var currentLevel = '#puzzle-set-1';

  //Timer
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

    //Heckler Message function
    messages: function(gameRecord){
      var title;
      switch(timeObject.currentSeconds){
        case 1:
          title = "Kid";
          break;
        case 30:
          title = "Toddler";
          break;
        case 60:
          title = "Rugrat";
          break;
        case 90:
          title = "Infant";
          break;
        case 120:
          title = "Fetus";
          break;
        case 150:
          title = "Egg";
          break;
        default:
          title = "none";
      }
      if(title !== "none"){
        $("#iq-level span").fadeIn().text(title);
        if(title !== 'Kid'){
          $("#messages").slideDown("slow").text("You IQ has lowered to " + title + " status!");
          setTimeout(function(){
            $("#messages").empty();
          }, 5000);
        }
        if(currentLevel === '#puzzle-set-1') {
          game.gameOneIQ = title;
        }
        else{
          game.gameTwoIQ = title;
        }
      }
    },

  // All time related methods
    runTime: function(gameRecord){
      timeObject.messages(gameRecord);
      if(timeObject.stopTime){
        timeObject.currentSeconds -= 1; // Adjust 1 sec time difference
        if (currentLevel == '#puzzle-set-1') {
          gameRecord.gameOneTime = timeObject.currentTime();
          $('#p1-time-stat').text(gameRecord.gameOneTime);
          $('#p1-iq-stat').text(gameRecord.gameOneIQ);
        }
        else {
          gameRecord.gameTwoTime = timeObject.currentTime();
          $('#p2-time-stat').text(gameRecord.gameTwoTime);
          $('#p2-iq-stat').text(gameRecord.gameTwoIQ);
        }
        if(currentLevel == '#puzzle-set-2'){
          levelObject.complete();
        }
        currentLevel = '#puzzle-set-2';
        levelObject.nextLevel(gameRecord);
        $('#average-time span').text(gameRecord.gameOneTime);
        this.currentSeconds = 0;
        $('#timer span').text(timeObject.currentTime());
        $('#iq-level span').text('kid');
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

  // All level control related methods
  var levelObject = {
    reset: function(){
      localStorage.clear();
      location.reload();
    },
    clear: function(){
      localStorage.clear();
    },
    complete: function(){
      $('.upon-completion').fadeIn(1080,function(){
        $('.upon-completion').animate({
          "display":"block"
        });
      });
      $('#p1-time-stat').text(gameRecord.gameOneTime);
      $('#p1-iq-stat').text(gameRecord.gameOneIQ);
    },
    nextLevel: function(gameRecord){
      $('#puzzle-set-1').hide();
      $(currentLevel).show();
      $('.start-button').show();
      $('.shuffle-button').css({'display': 'none'});
      storageObject.save(gameRecord)
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
    },
    levelCheck: function(){
      if(localStorage.length > 0){
        currentLevel = '#puzzle-set-2';
        $('#puzzle-set-1').hide();
        $('#puzzle-set-2').show();
        game = JSON.parse(localStorage.getItem('game'));
        $('#average-time span').text(game.gameOneTime);
        $('#p1-time-stat').text(game.gameOneTime);
        $('#p1-iq-stat').text(game.gameOneIQ);
      }
    }
  }

  // All storage related methods
  var storageObject = {
    save: function(gameRecord) {
      var stringRecord = JSON.stringify(gameRecord);
      localStorage.setItem('game', stringRecord);
    },
    lastGame: function() {
      JSON.parse(localStorage.getItem('game'));
    }
  }

  // Master game object
  var gameMaster = {
    startGame: function(){
      $(currentLevel).sortable();
      timeObject.runTime(game);
    }
  }


  $('#play_button').on('click', levelObject.levelCheck());

  $('.reset-level').on('click', levelObject.reset);

  $('.time-start').on('click', gameMaster.startGame);

  $('#puzzle-set-1, #puzzle-set-2').on('sortupdate', levelObject.checkPuzzleComplete);
});


