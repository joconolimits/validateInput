(function( $ ){
	$.fn.validateInput = function() {
			var placeholder = $(this).attr("placeholder");
			$(this).on( "keyup", function () {
				var animateName = 'animated shake';
				var animateEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				value = $(this).val();
				if (isNaN(value)|| value<0) {

					$(this).css("background-color", "rgb(255, 0, 0)");
					$(this).val("");
					$(this).attr("placeholder",  "Please enter only digits");
					$(this).addClass(animateName).one(animateEnd, function(){
						$(this).removeClass();
					});
				}
				else { 
					$(this).css("background-color", "rgb(255, 255, 255)");
					$(this).attr("placeholder",  placeholder);
					
				}	
			});	
		
	};
})( jQuery );