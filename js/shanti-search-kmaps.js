  // *** SEARCH *** adapt search panel height to viewport for scrolling treenav area
  Drupal.ShantiSarvaka.searchTabHeightKMaps = function() {    
    var height = $(window).height();
    var viewheightKMaps = (height) - 240;

    viewheightKMaps = parseInt(viewheightKMaps) + 'px';
    $(".view-wrap").css('height', viewheightKMaps);

  };