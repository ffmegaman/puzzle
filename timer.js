

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
    runTime: function(gameRecord){
      if(timeObject.stopTime === false){
        window.setTimeout(function(){
          timeObject.currentSeconds += 1;
          $('#timer > span').text(timeObject.currentTime());
          timeObject.runTime(gameRecord);
        }, 1000);
      }
      else{
        gameRecord.totalTime = timeObject.currentTime();
        this.currentSeconds = 0;
      }
    }
  }

if (timeObject.currentSeconds === 30) {
  $("#iq-level span").fadeIn().text("Toddler");
}
else if (timeObject.currentSeconds === 60) {
  $("#iq-level span").fadeIn().text("Rugrat");
}
else if (timeObject.currentSeconds === 90) {
  $("#iq-level span").fadeIn().text("Infant");
}
else if (timeObject.currentSeconds === 120) {
  $("#iq-level span").fadeIn().text("Fetus");
}
else (timeObject.currentSeconds === 150) {
  $("#iq-level span").fadeIn().text("Egg");
};

