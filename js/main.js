/** 
 * This is the main js file
 */
require.config({
    paths: {
        jquery: 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
    }
});




/** 
 * Global
 */
require(['jquery', 'libs/pinnd.min', 'libs/updown.min'], function($, pinnd, updown) {

	// Initialize updown
	updown();

	// Pin the sidebar
	var pinSidebarOpts = {
		offset_top: 70,
	}
	var pinSidebar = pinnd($('.sidebar'), pinSidebarOpts);
	
	// If we are below 768 width, disable pinning
	if($(window).width() < 768) pinSidebar.off();
	
	// Dynamically enable/disable pinning based on 768 breakpoint
	$(window).on('768.down', function() { pinSidebar.off() });
	$(window).on('768.up', function() { pinSidebar.on() });

});








/** 
 * Examples
 */

// homepage
if(window.isHomepage) {
	require(['libs/skrollr'], function(skrollr){
	    var s = skrollr.init();
	});
}

// brevity examples
if(window.brevity_example) {
	require(['libs/brevity.min'], function(brevity) {
		switch(window.brevity_example) {
			case 'basic': brevity_basic(); break;
			case 'namespace': brevity_namespace(); break;
			case 'rootnode': brevity_rootnode(); break;
			default: break;
		}
	});
}

// updown examples
if(window.updown_example) {
	require(['libs/updown.min'], function(updown) {
		switch(window.updown_example) {
			case 'basic': updown_basic(); break;
			default: break;
		}
	});
}

// imgin examples
if(window.imgin_example) {
	require(['libs/imgin.min'], function(updown) {
		switch(window.imgin_example) {
			case 'basic': imgin_basic(); break;
			case 'callbacks': imgin_callbacks(); break;
			default: break;
		}
	});
}

// pinnd examples
if(window.pinnd_example) {
	require(['libs/pinnd.min'], function(pinnd) {
		switch(window.pinnd_example) {
			case 'basic': pinnd_basic(); break;
			case 'context': pinnd_context(); break;
			case 'callbacks': pinnd_callbacks(); break;
			case 'methods': pinnd_methods(); break;
			default: break;
		}
	});
}


