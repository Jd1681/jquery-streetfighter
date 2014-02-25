$(document).ready(function(){
  $('.ryu').mouseenter(function() {
  	$('.ryu-still').hide();
  	$('.ryu-ready').show();
  })
  .mouseleave(function() {
  	$('.ryu-ready').hide();
  	$('.ryu-still').show();
  })
  .mousedown(function() {
   	playHadouken(); 	
   	$('.ryu-ready').hide();
  	$('.ryu-throwing').show();
  	$('.hadouken').finish().show()
  	.animate(
  		{'left': '1100px'},
  		500,
  		function()  {
  			$(this).hide();
  			$(this).css('left','500px');
  		});
  })
  .mouseup(function()  {
  	$('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  	// ryu goes back to his ready position
  });
});

$(document).keydown(function(event) {
  	if (event.keyCode == 88 ) {
  		$('.ryu-ready').hide();
  		//$('.ryu-throwing').finish().hide();
  		//$('.ryu-still').finish().hide();
  		$('.ryu-cool').show();
      event.preventDefault();
    }
});

$(document).keyup(function(event) {
    if (event.keyCode == 88 ) {
      $('.ryu-ready').show();
      //$('.ryu-throwing').finish().hide();
      //$('.ryu-still').finish().hide();
      $('.ryu-cool').hide();
      event.preventDefault();
    }
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}