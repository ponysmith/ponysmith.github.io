/** 
 * This is the main js file
 */
require.config({
    paths: {
        jquery: 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min',
        // brevity: 'https://rawgit.com/ponysmith/brevity/master/brevity.min',
        // updown: 'https://rawgit.com/ponysmith/updown/master/updown.min',
        // imgin: 'https://rawgit.com/ponysmith/imgin/master/imgin.min',
    }
});


// Check if there are examples to run
// If there are, require the appropriate library and call the appropriate function (from js/project-<project>.js)

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


