$(document).ready(function(){

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
    currentTime: 0,
    runTime: function(gameRecord){
      if(timeObject.stopTime === false){
        window.setTimeout(function(){
          timeObject.currentTime += 1;
          console.log(timeObject.currentTime)
          timeObject.runTime(gameRecord);
        }, 1000);
      }
      else{
        gameRecord.totalTime = timeObject.currentTime;
        this.currentTime = 0;
      }
    }
  }
});
