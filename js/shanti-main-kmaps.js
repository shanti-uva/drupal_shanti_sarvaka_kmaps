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

	        $(window).load(function() {
	        	// $(document).on('ajaxSuccess', function(){
		        	// $('.front.logged-in .equal-height, .page-search .equal-height, .page-node-edit.sidebar-second .equal-height').matchHeight({
		        	function set_equal_heights() {
			          	$('.main-col .equal-height').matchHeight({
			              target: $('.equal-height.col-md-9')
			          	});
		            }; 
		            window.setTimeout( set_equal_heights, 1000 );
	            // });
		             
	        });

/*	       
            $('#sidebar-first a, .og-grid a, .og-grid .og-close').bind( 'click', function() {
              $(document).on('ajaxSuccess', function(){
                $('.main-col .equal-height').matchHeight({
                  target: $('.equal-height.col-md-9')
                }); 
              });
            });
*/
	         // $(window).bind('load orientationchange resize', Drupal.behaviors.shantiEqualHeights );  
	    }
	  } 
	};	

/*
	Drupal.behaviors.shantiKmapsEqualHeightsAccordionAction = {
	  attach: function (context, settings) {
	  	if(context == window.document) {

            $('#accordion').on('shown.bs.collapse', function (e) {
            	
            	var positionScrollTop = $(window).scrollTop();

    			$('.main-col .equal-height').matchHeight({
	              	target: $('.equal-height.col-md-9')
	          	});

	          	$('.equal-height.col-md-9').height(function (index, height) {
				    return (height + 100);
				});

	          	$(window).scrollTop(positionScrollTop);

	          	return false;
			});

		}
	  }
	};
*/

}) (jQuery);


/*

            $('#accordion').on('shown.bs.collapse', function (e) {

    			$('.main-col .equal-height').matchHeight({
	              target: $('.main-wrapper')
	          	});
			})

*/


