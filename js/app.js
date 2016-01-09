var keyisdown =false;
$(document).ready(function() {
  $('.ryu').mouseenter(function() {
  	if (!keyisdown){
    $('.ryu-still').hide();
    $('.ryu-ready').show();
	}
  })
  .mouseleave(function() {
  	if (!keyisdown) {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
	}
  })
  .mousedown(function() {
      playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show().animate(
  		{'left': '1020px'},
  			500,
  		function() {
    	$(this).hide();
    	$(this).css('left', '520px');
  		}
	);
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-still').show();
  });


  
 $(document)
 .keydown(function( event ) {
  	
  	 if ( event.which == 88 ) {
  	 keyisdown = true;
  	 $('.ryu-still').hide();
  	 $('.ryu-cool').show();
  	 $('.ryu-ready').hide();
 	   }
  	})

   .keyup(function( event ) {
   	keyisdown = false;
   	$('.ryu-cool').hide();
   	$('.ryu-still').show();
   	$('.ryu-ready').hide();
   })
});


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}