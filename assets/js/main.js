jQuery(document).ready(function($){	 



	$(".bs-sidebar ul li a[href^='#']").on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $(this.hash).offset().top }, 800); 
   // edit: Opera and IE requires the "html" elm. animated
	});
	
	$('.bs-sidebar ul li').click(function() {
      $("li.active").removeClass("active");
      $(this).addClass('active');
	});


/*// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

    var jQuerywindow = jQuery(window)
    var jQuerybody   = jQuery(document.body)

    var navHeight = jQuery('.navbar').outerHeight(true) + 10

    jQuerybody.scrollspy({
      target: '.bs-sidebar',
      offset: navHeight
    })

    jQuery('.bs-docs-container [href=#]').click(function (e) {
      e.preventDefault()
    })

    jQuerybody.on('click', '.bs-sidenav [href^=#]', function (e) {
      var jQuerytarget = jQuery(this.getAttribute('href'))

      e.preventDefault() // prevent browser scroll

   jQuery('html, body').animate({ scrollTop: jQuery(this.hash).offset().top }, 800);


    })*/



 









});