$(document).ready(function(){
  $('.ryu').mouseenter(function() {
  	$('.ryu-still').toggleClass('active inactive');
  	$('.ryu-ready').toggleClass('active inactive');
  })
  .mouseleave(function() {
  	$('.ryu-ready').toggleClass('active inactive');
  	$('.ryu-still').toggleClass('active inactive');
  })
  .mousedown(function() {
   	playHadouken(); 	
   	$('.ryu-ready').toggleClass('active inactive');
  	$('.ryu-throwing').toggleClass('active inactive');
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
  	$('.ryu-throwing').toggleClass('active inactive');
  	$('.ryu-ready').toggleClass('active inactive');
  	// ryu goes back to his ready position
  });
});

$(document).keydown(function(event) {
  	if (event.keyCode == 88 ) {
  		$('.ryu-ready').toggleClass('active inactive');
      console.log('x down');
  		//$('.ryu-throwing').finish().hide();
  		//$('.ryu-still').finish().hide();
  		$('.ryu-cool').toggleClass('active inactive');
      //event.preventDefault();
    }
});

$(document).keyup(function(event) {
    if (event.keyCode == 88 ) {
      $('.ryu-ready').toggleClass('active inactive');
      console.log('x up');
      //$('.ryu-throwing').finish().hide();
      //$('.ryu-still').finish().hide();
      $('.ryu-cool').toggleClass('active inactive');
      //event.preventDefault();
    }
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.2;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}