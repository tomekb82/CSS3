(function($) {

$(document).ready(function() {
  
        /* Wersja przeglaradki */
	var titleWrapper = $(".title_wrapper");
	var title = $(".title");
	if($.browser.mozilla) {
        	title.addClass("ff");
	}else if($.browser.webkit) {
        	title.addClass("webkit");
	        titleWrapper.css("height", "120px");
	}

	$("section").append("<hr/>");
});

})(jQuery);


















