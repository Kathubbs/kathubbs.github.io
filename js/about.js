$('.sitenav li').on('click', function(){
	$(this).addClass('selected')
	$(this).siblings().removeClass('selected')
	if($(this).hasClass('about')){
		var view = $('article.about')
	}else if($(this).hasClass('abc')){
		var view = $('article.abc')
	}else if($(this).hasClass('portfolio')){
		var view = $('article.portfolio')
	}else if($(this).hasClass('resume')){
		var view = $('article.resume')
	}
	view.show()
	view.siblings().hide()
});

$('.abcnav li').on('click', function() {
	var selection = $(this).html()

	$('.capital').html(selection)
	$('.drawing').html(selection)
	$('.drawing').attr('data-content', selection)
	$('.lowercase').html(selection)
});

$('.abcnav li').on('click', function(){
	$('.abcnav li').removeClass('abcselected')
	$(this).addClass('abcselected')
});

$('img.button').on('click', function(){
	var currentLetter = $('li.abcselected');
	var inc = $(this).hasClass('right') ? 1 : -1;
	var letters = $('.abcnav li');
	var currentIndex = letters.index(currentLetter)
	if($(this).hasClass('left') && currentIndex == 0){
		letters.last().click()
	}else if($(this).hasClass('right') && currentIndex == (letters.length - 1)){
		letters.first().click();
	} else {	
		$(letters[currentIndex + inc]).click();
	}
});

$('.portdisplay li').on('click', function(){
	$('.portdisplay li').removeClass('portactive')
	$(this).addClass('portactive')
});


//on click function for ABC nav
	//get letter in the a href
	//change the html of class "capital" and "lowercase" to that letter


//mobile on click function for ABC nav
	//start at letter A
	//left arrow moves to previous letter
	//right arrow moves to next letter
	//right arrow for letter Z moves to letter A
	//left arrow for letter A moves to letter Z

//Maybe I should reconsier the nav design to be consistent between mobile and desktop?



	
