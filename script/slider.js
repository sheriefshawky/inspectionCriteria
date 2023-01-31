	const bodyDir = document.getElementsByTagName("body")[0].dir;
	
	if(bodyDir == 'rtl'){
		$('.autoplay').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 2000,
			rtl: true,
			initialSlide:-1,
			swipeToSlide: true,
			lazyLoad: "progressive",
			responsive: [
				{
					breakpoint: 900,
					settings: {
					  slidesToShow: 4,
					  slidesToScroll: 1,
					}
				  
				  },
				{
				  breakpoint: 700,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				  }
				
				}
			  ]
		  });
	
		$('.bottomList').not('.slick-initialized').slick({
			slidesToShow: 10,
			slidesToScroll: 2,
			autoplay: false,
			autoplaySpeed: 2000,
			initialSlide:-1,
			rtl: true,
			swipeToSlide: true,
			responsive: [
				{
					breakpoint: 900,
					settings: {
					  slidesToShow: 7,
					  slidesToScroll: 1,
					}
				  
				  },
				{
				  breakpoint: 700,
				  settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				  }
				
				}
			  ]
		});
	}
	else{
		$('.autoplay').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 2000,
			rtl: false,
			initialSlide:-1,
			swipeToSlide: true,
			lazyLoad: "progressive",
			responsive: [
				{
					breakpoint: 900,
					settings: {
					  slidesToShow: 4,
					  slidesToScroll: 1,
					}
				  
				  },
				{
				  breakpoint: 700,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				  }
				
				}
			  ]
		  });
	
		$('.bottomList').not('.slick-initialized').slick({
			slidesToShow: 10,
			slidesToScroll: 2,
			autoplay: false,
			autoplaySpeed: 2000,
			initialSlide:-1,
			rtl: false,
			swipeToSlide: true,
			responsive: [
				{
					breakpoint: 900,
					settings: {
					  slidesToShow: 7,
					  slidesToScroll: 1,
					}
				  
				  },
				{
				  breakpoint: 700,
				  settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				  }
				
				}
			  ]
		});
	}
	
	



	function itemsChanged()
	{ 
		$('.bottomList').slick('removeSlide', null, null, true);
		$('.bottomList').slick('refresh');
	}

	async function itemsChangedTop(slideNumber)
	{ 
		$('.autoplay').slick('removeSlide', null, null, true);
		await $('.autoplay').slick('refresh',slideNumber - 1);
		$('.autoplay').slick("slickGoTo",slideNumber - 1);

	}


	async function itemsChangedBottom(slideNumber)
	{ 
		$('.bottomList').slick('removeSlide', null, null, true);
		await $('.bottomList').slick('refresh',slideNumber - 1);
		$('.bottomList').slick("slickGoTo",slideNumber - 1);

	}

	 function itemsChangedBottomCase()
	{ 
		$('.bottomList').slick('removeSlide', null, null, true);
		 $('.bottomList').slick('refresh');
		

	}


      
// var slider = document.getElementById("myRange");

// slider.oninput = function() {
//   rotate(slider.value);

// }