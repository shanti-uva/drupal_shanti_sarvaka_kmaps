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

	Drupal.behaviors.kmapsVideoTabID = {
	  attach: function (context, settings) {
	  	if(context == window.document) {

				if($(".nav-pills li.active a:contains('Audio-Video')").length > 0 ) {
					$("body").addClass("tab-video");
				
				} else {
					
					if($(".nav-pills li.active a:contains('Audio-Video')").length < 0 ) {

						$("body").removeClass("tab-video");
					}

				}
		  	
		}
	  }
	};

}) (jQuery);




/***

Drupal.behaviors.kmapsOffCanvasToggle = {
  attach: function (context, settings) {
		$("button.view-resources").click( function() { 		// show-hide resource side-column
		        $(this).toggleClass( "show",'fast' );
		});
  }
};
**/
