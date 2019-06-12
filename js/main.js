/** 
 * This is the main js file
 */
require.config({
    paths: {
				jquery: '/js/libs/jquery-1.11.1.min',
				pinnd: '/js/libs/pinnd.min',
				updown: '/js/libs/updown.min',
				tabletrim: '/js/libs/tabletrim.min',
				brevity: '/js/libs/brevity.min',
				shyft: '/js/libs/shyft.min',
				imgin: '/js/libs/imgin.min'
    }
});




/** 
 * Global
 */
require(['jquery', 'pinnd', 'updown', 'tabletrim'], function($, pinnd, updown) {

	// Set tabletrim on tables
	$('#page-content table.tabletrim').each(function() {
		tabletrim($(this), { breakpoint: 600 });
	});

	// Initialize updown
	updown();

	// Pin the sidebar
	var pinSidebarOpts = {
		offset_top: 80,
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

}

// brevity examples
if(window.brevity_example) {
	require(['brevity'], function(brevity) {
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
	require(['updown'], function(updown) {
		switch(window.updown_example) {
			case 'basic': updown_basic(); break;
			default: break;
		}
	});
}

// imgin examples
if(window.imgin_example) {
	require(['imgin'], function(updown) {
		switch(window.imgin_example) {
			case 'basic': imgin_basic(); break;
			case 'methods': imgin_methods(); break;
			case 'callbacks': imgin_callbacks(); break;
			default: break;
		}
	});
}

// pinnd examples
if(window.pinnd_example) {
	require(['pinnd'], function(pinnd) {
		switch(window.pinnd_example) {
			case 'basic': pinnd_basic(); break;
			case 'context': pinnd_context(); break;
			case 'callbacks': pinnd_callbacks(); break;
			case 'methods': pinnd_methods(); break;
			default: break;
		}
	});
}

// shyft examples
if(window.shyft_example) {
	require(['shyft', 'imgin'], function(shyft) {
		imgin();
		switch(window.shyft_example) {
			case 'basic': shyft_basic(); break;
			case 'options': shyft_options(); break;
			case 'callbacks-methods': shyft_callbacks_methods(); break;
			default: break;
		}
	});
}

// tabletrim examples
if(window.tabletrim_example) {
	require(['tabletrim'], function(tabletrim) {
		switch(window.tabletrim_example) {
			case 'basic': tabletrim_basic(); break;
			case 'controls': tabletrim_controls(); break;
			case 'methods': tabletrim_methods(); break;
			case 'callbacks': tabletrim_callbacks(); break;
			default: break;
		}
	});
}


