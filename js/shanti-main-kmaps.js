(function ($) {

	Drupal.behaviors.shantiKmapsSubjectsHomepage = {
	  attach: function (context, settings) {
	  	if(context == window.document) {
			if($(".feature-carousel-tabpanel").length ) {
				$(".breadcrumb").css('display','none');
			};
		}
	  }
	};

	Drupal.behaviors.shantiKmapsEqualHeights = {
	  attach: function (context, settings) { 
	    if(context == window.document) {  

	        // $(document).ajaxSuccess(function() {
	        $(document).on('ajaxSuccess', function(){
	          $('.main-col .equal-height').matchHeight({
	              target: $('.main-wrapper')
	          });
	        });    
	       
            $('.content-resources a, .og-grid a, .og-grid .og-close').bind( 'click', function() {
              $(document).on('ajaxSuccess', function(){
                $('.main-col .equal-height').matchHeight({
                  target: $('.main-wrapper')
                }); 
              });
            });

	         // $(window).bind('load orientationchange resize', Drupal.behaviors.shantiEqualHeights );  
	    }
	  } 
	};	


	Drupal.behaviors.shantiKmapsEqualHeightsAccordionAction = {
	  attach: function (context, settings) {
	  	if(context == window.document) {

	  		var contentHeight = $('#accordion').on('shown.bs.collapse').height('.wrap-all');

            $('#accordion').on('shown.bs.collapse', function (e) {
    			$('.main-col .equal-height').matchHeight({
	              target: $.contentHeight
	          	});
			})

		}
	  }
	};

}) (jQuery);


/*

            $('#accordion').on('shown.bs.collapse', function (e) {

    			$('.main-col .equal-height').matchHeight({
	              target: $('.main-wrapper')
	          	});
			})

*/


