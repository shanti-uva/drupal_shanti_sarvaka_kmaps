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

	 Drupal.behaviors.searchPanelHeightKMaps = {
   	   attach: function (context, settings) {
        if (context == document) {

          // *** SEARCH *** adapt search panel height to viewport for scrolling treenav area
          Drupal.ShantiSarvaka.searchTabHeightKMaps = function() {    
            var height = $(window).height();
            var viewheightKMaps = (height) - 240;

            viewheightKMaps = parseInt(viewheightKMaps) + 'px';
            $(".view-wrap").css('height', viewheightKMaps);

          };

	      Drupal.ShantiSarvaka.searchTabHeightKMaps();
	       $(window).bind('load orientationchange resize', Drupal.ShantiSarvaka.searchTabHeightKMaps );


        }
       }
  	};





/*
	Drupal.behaviors.shantiKmapsEqualHeights = {
	  attach: function (context, settings) { 
	    if(context == window.document) {  

	        $(window).load(function() {
		        	function set_equal_heights() {
			          	$('.main-col .equal-height').matchHeight({
			              target: $('main.main-wrapper')
			          	});
		            }; 
		            window.setTimeout( set_equal_heights, 1000 );	             
	        });


	         // $(window).bind('load orientationchange resize', Drupal.behaviors.shantiEqualHeights );

	    }
	  } 
	};
*/



	
/*
	Drupal.behaviors.shantiKmapsEqualHeightsAccordionAction = {
	  attach: function (context, settings) {
	  	if(context == window.document) {

            $('#accordion').on('shown.bs.collapse', function (e) {
            	
            	var positionScrollTop = $(window).scrollTop();

    			$('.main-col .equal-height').matchHeight({
	              	target: $('.equal-height.col-md-9')
	          	});

	    //     	$('.equal-height.col-md-9').height(function (index, height) {
		//		    return (height + 100);
		//		});

	          	$(window).scrollTop(positionScrollTop);

	          	return false;
			});


            $('#sidebar-first a.use-ajax').on( 'click', function() {
		                
				$(document).ajaxSuccess(function() {
		        	// $(document).on('ajaxSuccess', function(){
		          $('.main-col .equal-height').matchHeight({
		              target: $('.equal-height.col-md-9')
		          });
		        });  
            });


		}
	  }
	};
*/


/*	Drupal.behaviors.shantiKmapsHideBreadcrumbsSubjects = {
	attach: function (context, settings) {
	  if(context == window.document) {

	    $( window ).load(function() {
	      if($(".front.page-subjects").length ) { 
	           $(this).find(".breadwrap").remove();
	      }
	    });

	  }
	} 
	};
*/

}) (jQuery);

