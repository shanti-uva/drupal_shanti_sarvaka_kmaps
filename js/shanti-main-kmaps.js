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
	              target: $('.equal-height.col-xs-12')
	          });
	        });    
	       
	            // $(document).ajaxSuccess(function() {
	            $('.content-resources a').bind( 'click', function() {
	              $(document).on('ajaxSuccess', function(){
	                $('.main-col .equal-height').matchHeight({
	                  target: $('.equal-height.col-xs-12')
	                }); 
	              });
	            });  

	            $('.panel-group a').bind( 'click', function() {
	                $('.main-col .equal-height').matchHeight({
	                  target: $('.equal-height.col-xs-12')
	                }); 
	            }); 

	         // $(window).bind('load orientationchange resize', Drupal.behaviors.shantiEqualHeights );  
	    }
	  } 
	};	

}) (jQuery);


