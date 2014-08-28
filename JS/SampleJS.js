messages: function(){
      var title;
      switch(timeObject.currentSeconds){
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
        $("#messages").slideDown("slow").text("You IQ has lowered to " + title + " status!");
        setTimeout(function(){
          $("#messages").empty();
        }, 5000);
      }
    },
