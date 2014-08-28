

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
