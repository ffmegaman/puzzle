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


});

/*const PUZZLE_DIFFICULTY = 4;  //holds # of pieces in puzzle (16 total here)
const PUZZLE_HOVER_TINT = '#009900';

var canvas;  //reference the our canvas */
var stage;

var img; //for the loaded image

var puzzleWidth;
var puzzleHeight;
var pieceWidth;
var pieceHeight;
// var currentPiece;
// var currentDropPiece;

var mouse;

/*function init(){
    img = new Image();
    img.addEventListener('load',onImage,false);
    img.src = "mke.jpg";
}
*/
/*
function shufflePuzzle(){
    pieces = shuffleArray(pieces);
    stage.clearRect(0, 0, puzzleWidth, puzzleHeight);
    var i;
    var piece;
    var xPos = 0;
    var yPos = 0;
    for(i = 0; i < pieces.length; i++){
        piece = pieces[i];
        piece.xPos = xPos;
        piece.yPos = yPos;
        stage.drawImage(img, piece.sx, piece.sy, pieceWidth, pieceHeight, xPos, yPos, pieceWidth, pieceHeight);
        stage.strokeRect(xPos, yPos, pieceWidth,pieceHeight);
        xPos += pieceWidth;
        if(xPos >= puzzleWidth){
            xPos = 0;
            yPos += pieceHeight;
        }
    }
    document.onmousedown = onPuzzleClick;
}
*/

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
