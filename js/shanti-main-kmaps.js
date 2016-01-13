(function ($) {

	/***

	Drupal.behaviors.kmapsOffCanvasToggle = {
	  attach: function (context, settings) {
			$("button.view-resources").click( function() { 		// show-hide resource side-column
			        $(this).toggleClass( "show",'fast' );
			});
	  }
	};
	**/
	
	
	Drupal.behaviors.kmapsOffCanvasButton = {
	  attach: function (context, settings) {
	  	if(context == window.document) {
			if($(".feature-carousel-tabpanel").length ) {
				$("body").addClass('carousel');
			};
		}	
	  }
	};

	


}) (jQuery);
