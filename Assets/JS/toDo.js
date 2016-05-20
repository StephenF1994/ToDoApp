$(document).ready(function(){
	$('ul').on('click', 'li', function(){							//Elements in 'ul' that may or may not be on the page when it loads. So future 'li' will have same fnctionality
		$(this).toggleClass('completed');
	})

$('ul').on('click', 'span', function(event){						//Same here, future 'span' will do the same as original 'span'
	
	$(this).parent().fadeOut(500, function(){						//on the spans parent(li), fade out .5 seconds then remove.
		$(this).remove();
	})
	event.stopPropagation();													//Stops bubbling up. When span is clicked the li, ul, div parents are not clicked aswell.
})

$("input[type= 'text']").keypress(function(event){
	if(event.which === 13){															//IF key pressed is enter
		var newTask = $(this).val();												//get value of input
		$(this).val("");															//Input box reset to blank
		$('ul').append("<li><span>X </span>" + newTask + "</li>");					//Add new li element with value of input
	}
})




})