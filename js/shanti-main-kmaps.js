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
			
			if($(".nav-pills a.active:contains('Audio-Video')").length ) {
				$("body").addClass("tab-video");

			} else {

			if($(".nav-pills a.active:contains('Images')").length ) {
				$("body").addClass("tab-images");
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
