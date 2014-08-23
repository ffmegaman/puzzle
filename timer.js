$(document).ready(function(){

  function GameRecord () {
    this.totalTime = 0;
  }

  var timeObject = {
    stopTime: false,
    currentTime: 0
  }

  function incrementTime() {
    timeObject['currentTime'] += 1;
    console.log(timeObject.currentTime)
    runTime();
  }

  function runTime(){
    if(timeObject.stopTime === false){
      window.setTimeout(incrementTime, 1000);
    }
    else{
      updateRecord();
      timeObject.currentTime = 0;
    }
  }

});
