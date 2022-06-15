$(function () {
	$("a.scrol").click(function() {
	    var elementClick = $(this).attr("href")
	    var destination = $(elementClick).offset().top;
	    jQuery("html:not(:animated),body:not(:animated)").animate({
	      scrollTop: destination
	    }, 800);
	    return false;
	  });


	
	$('.callbtn').click(function (e) {
		swal("Вот мой номер телефона", "+7 (495) 234-43-65", "")
		// body...
	})
	// $(".ghostbtn2").click(function (e) {
	// 	e.preventDefault()
	// 	$(".places2").toggleClass('bounceOutUp')
	// 	$(".places2").toggleClass('anshow')
	// })
	$(".ghostbtn1").click(function (e) {
		e.preventDefault()
		$(".cart-wrap").toggleClass('show')
		$(".places2").toggleClass('animate__bounceInDown')
		
	})
	


	$(window).scroll(function() {
	    $('.ttitle').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+450) {
	            $(this).addClass("animate__backInLeft");
	            $(this).addClass("anshow");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.cw').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+450) {
	            $(this).addClass("animate__slideInDown");
	            $(this).addClass("anshow");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.titleus').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+450) {
	            $(this).addClass("animate__fadeInLeftBig");
	            $(this).addClass("anshow");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.about-text').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+450) {
	            $(this).addClass("animate__fadeInLeftBig");
	            $(this).addClass("anshow");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.weimg').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+450) {
	            $(this).addClass("animate__fadeInRightBig");
	            $(this).addClass("anshow");
	        }
	    });
	});

})
jQuery(document).ready(function() {
  var btn = $('.abutton');  
  $(window).scroll(function() {     
    if ($(window).scrollTop() > 300) {
       btn.addClass('bshow');
     } else {
       btn.removeClass('bshow');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
   var btn = $('.abutton');
   $(window).scroll(function() {
     if ($(window).scrollTop() > 300) {
       btn.addClass('bshow');
     } else {
       btn.removeClass('bshow');
     }
   });
   $(window).scroll(function() { 
   if ($(window).scrollTop() > 300) {
       btn.addClass('bshow');
     } else {
       btn.removeClass('bshow');
     }  
     if ($(window).scrollTop() > 300) {
       btn.addClass('bshow');
     } else {
       btn.removeClass('bshow');
     } 
    })
     btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  }); 
      $('html, body').animate({scrollTop:0}, '300'); 
});
