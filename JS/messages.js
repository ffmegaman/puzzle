/*function show(document.getElementById('popup').style.display='block';){
  document.getElementById.("popup").innerHTML = "Hurry up, noob!";
}
//Heckler messages, can be inserted where appropriate.
setTimeout(show(), 60000);

setTimeout(function() {alert("My elderly grandma finished this faster than you!")}, 120000);

setTimeout(function() {alert("You should just stop, you have the puzzle-solving skills of a carrot.")}, 180000);
*/
$(document).on('popupafteropen', 'hi', function() {
 setTimeout(function () {
  $(this).popup('close');
 }, 5000);
});
