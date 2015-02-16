(function ($) {		
	
	Drupal.behaviors.kmapsOffCanvasToggle = {
	  attach: function (context, settings) {
			$("button.view-resources").click( function() { 		// show-hide resource side-column
			        $(this).toggleClass( "show",'fast' );
			});
	  }
	};
	
	
	
	Drupal.behaviors.kmapsOffCanvasButton = {
	  attach: function (context, settings) {
			if($(".feature-carousel-tabpanel").length ) {
				$(".btn-default.view-resources").css('display','none !important');
			}
	  }
	};

}(jQuery));