$(function () {
	$(window).scroll(function() {
	    $('.text').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("rotateInDownLeft");
	            $(this).addClass("show");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.scill').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	            $(this).addClass("show");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.travel').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	            $(this).addClass("show");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.value').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	            $(this).addClass("show");
	        }
	    });
	});
})