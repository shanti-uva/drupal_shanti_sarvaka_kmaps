(function ($) { 

 Drupal.behaviors.searchPanelHeightKMaps = {
   attach: function (context, settings) {
      if (context == document) {
   
            var height = $(window).height();
            var viewheightKMaps = (height) - 240;

            viewheightKMaps = parseInt(viewheightKMaps) + 'px';
            $(".view-wrap").css('height', viewheightKMaps);

      }
    }
  };

}(jQuery));