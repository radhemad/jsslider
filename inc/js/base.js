"use strict";

(function() {
	
	var Carousel = {
		props:{
			current_slide: 0,
			total_slides: 3
		},
		init:function(){
			//ADD INITIALIZER CODE HERE
			Carousel.bindEvents();
			Carousel.update();
		},
		bindEvents:function(){
			$(".carousel-next").on("click",function(){
				Carousel.next();
			});
			$(".carousel-prev").on("click",function(){
				Carousel.previous();
			});


			//SLIDER WITH ARROW KEYS
			//Window or Document can be used
			$(window).on("keydown", function(e) {

				if (e.which === 37) {
					Carousel.previous();
				} 

				if (e.which === 39) {
					Carousel.next();
				} 
			});
		},
		next:function(){
			//ADD NEXT CODE HERE
			Carousel.props.current_slide++;
			Carousel.update();
		},
		previous:function(){
			//ADD PREVIOUS CODE HERE
			Carousel.props.current_slide--;
			Carousel.update();
		},
		update:function(){

			var total_slides_div = document.getElementsByTagName("article");

			if (Carousel.props.current_slide >= Carousel.props.total_slides) {
				Carousel.props.current_slide = 0;
			}

			if (Carousel.props.current_slide < 0) {
				Carousel.props.current_slide = Carousel.props.total_slides -1;
			}
			for (var i = 0; i < total_slides_div.length; i++) {
			 total_slides_div[i].style.display = "none";
			}

			total_slides_div[Carousel.props.current_slide].style.display = "flex";  
		}
	}
	$(function(){
		Carousel.init();
	})

})(window);
