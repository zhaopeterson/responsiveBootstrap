$(function(){
	"use strict";
	var topoffset = 90;
	var slideqty = $("#featured .item").length;
	// randomizing the first active slide
	var randSlide = Math.floor(Math.random()*slideqty);
	$("#featured .item").eq(randSlide).addClass("active");

	//Activate Scrollspy
	$('body').scrollspy({
	  target: 'header .navbar',
	  offset: 90
	});

	// jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // fadeIn the homebutton once the page start to scroll
    $('.home-button').hide();
	$(window).scroll(function() {
	    var height = $(window).scrollTop(); 
	    if (height  > 100) {
	        $('.home-button').fadeIn();
	    } else {
	    	$('.home-button').fadeOut();
	    }
	});



	// add inbody class to nav once the target section is in view
	var hash = $(this).find("li.active a").attr("href");
	addInbodyClass(hash);
	$(".navbar-fixed-top").on("activate.bs.scrollspy", function(){
		var hash = $(this).find("li.active a").attr("href");
		addInbodyClass(hash)
	});

	  //Use smooth scrolling when clicking on navigation
	  $('.navbar a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') === 
	      this.pathname.replace(/^\//,'') && 
	      location.hostname === this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top-topoffset+2
	        }, 500);
	        return false;
	      } //target.length
	    } //click function
	}); //smooth scrolling

	for (var i=0; i<slideqty; i++) {
		var insertText = "<li data-target = '#featured' data-slide-to = '" + i + "'></li>";
		$("#featured .carousel-indicators").append(insertText)
	}


	$(".carousel").carousel({
		interval: false
	})
});

function addInbodyClass(a) {
	if (a !== "#featured") {
			$("header nav").addClass("inbody");
		} else {
			$("header nav").removeClass("inbody")
		}		
}

