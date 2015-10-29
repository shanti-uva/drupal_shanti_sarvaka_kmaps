(function ($) {

	Drupal.behaviors.shantiKmapsHideBreadcrumbsSubjects = {
		attach: function (context, settings) {
			if(context == window.document) {

				$(".page-title-text:contains('Subjects')").hide(".breadcrumb");

			}
		} // end context = document
	};


	Drupal.behaviors.shantiKmapsHideBreadcrumbsEarth = {
		attach: function (context, settings) {
			if(context == window.document) {

				$(".breadcrumbs a:contains('Earth')").hide();

			}
		} // end context = document
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
	
	
	
	Drupal.behaviors.kmapsOffCanvasButton = {
	  attach: function (context, settings) {
			if($(".feature-carousel-tabpanel").length ) {
				$(".btn-default.view-resources").css('display','none !important');
			}
	  }
	};

	**/



