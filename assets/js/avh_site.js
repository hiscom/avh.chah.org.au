(function ($) {

  $(function() {
    // Create TOC
    $('nav[data-toggle="toc"]').each(function(i, el) {
      var $nav = $(el);
      Toc.init($nav);
    });

    // Add scrollspy
    // This has to be done after the TOC has been created; cannot be done 
    // through data attributes in HTML
    $('body').scrollspy({target: '#toc', offset: 30});

  });

})(jQuery);
