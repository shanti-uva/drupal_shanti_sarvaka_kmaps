(function ($) {

	Drupal.behaviors.kmapsSubjectsHomepage = {
	  attach: function (context, settings) {
	  	if(context == window.document) {
			if($(".feature-carousel-tabpanel").length ) {
				$(".breadcrumb").css('display','none');
			};
		}
	  }
	};


	Drupal.behaviors.kmapsEqualHeights = {
  		attach: function (context, settings) {
			if(context == window.document) {        

			    $(document).on('ajaxSuccess', function(){
			      $('.equal-height').matchHeight({
			          target: $('.content-section.equal-height')
			      });
			    });   

    		}
  		} 
	};

}) (jQuery);


