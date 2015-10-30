(function ($) {

	Drupal.behaviors.shantiKmapsHideBreadcrumbsSubjects = {
		attach: function (context, settings) {
			if(context == window.document) {

			$(window).load(function() {
				$(".front .page-title-text:contains('Subjects')").remove(".breadwrap");
			});	

			}
		} // end context = document
	};


	Drupal.behaviors.shantiKmapsHideBreadcrumbsEarth = {
		attach: function (context, settings) {
			if(context == window.document) {

			$(window).load(function() {
				$(".breadcrumb a:contains('Earth')").parents("li").remove();
			});

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



