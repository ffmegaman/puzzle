

// Upon new game, instantiate a new GameRecord.
// Start timer with timeObject.runTime(<instance variable of GameRecord>)
// For example, if you used: var game = new GameRecord;
// Start timer like this: timeObject.runTime(game);
// Stop timer with timeObject.stopTime = true;
function GameRecord() {
  this.totalTime = 0;
}

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
    if(timeObject.stopTime === false){
      window.setTimeout(function(){
        timeObject.currentSeconds += 1;
        $('#timer span').text(timeObject.currentTime());
        timeObject.runTime(gameRecord);
      }, 1000);
    }
    else{
      gameRecord.totalTime = timeObject.currentTime();
      this.currentSeconds = 0;
    }
  }
};

function startGame1(){
  timeObject.runTime(function(){
    var game1 = new GameRecord();
  });
}

$('#play_button').on('click', startGame1(), false);
