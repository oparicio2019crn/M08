/*! menu - v1.2.0 - 2019-4-24
* menu is a responsive off-canvas navigation menu using CSS transforms & transitions.
* https://github.com/christophery/menu/
* by Christopher Yee */

(function ($) {
	var menu = $('.menu'), //menu css class
		body = $('body'),
		container = $('#container'), //container css class
		push = $('.push'), //css class to add menu capability
		menuLeft = 'menu-left', //css class for left menu position
		menuOpenLeft = 'menu-open-left', //css class when menu is open (left position)
		menuOpenRight = 'menu-open-right', //css class when menu is open (right position)
		siteOverlay = $('.site-overlay'), //site overlay
		menuBtn = $('.menu-btn, .menu-link'), //css classes to toggle the menu
		menuBtnFocus = $('.menu-btn'), //css class to focus when menu is closed w/ esc key
		menuLinkFocus = $(menu.data('focus')), //focus on link when menu is open
		menuSpeed = 200, //jQuery fallback menu speed
		menuWidth = menu.width() + 'px', //jQuery fallback menu width
		submenuClass = '.menu-submenu',
		submenuOpenClass = 'menu-submenu-open',
		submenuClosedClass = 'menu-submenu-closed',
		submenu = $(submenuClass);

	//close menu w/ esc key
	$(document).keyup(function(e) {
		//check if esc key is pressed
		if (e.keyCode == 27) {

			//check if menu is open
			if( body.hasClass(menuOpenLeft) || body.hasClass(menuOpenRight) ){
				if(cssTransforms3d){
					closemenu(); //close menu
				}else{
					closemenuFallback();
					opened = false; //set menu state
				}

				//focus on menu button after menu is closed
				if(menuBtnFocus){
					menuBtnFocus.focus();
				}

			}

		}
	});

	function togglemenu(){
		//add class to body based on menu position
		if( menu.hasClass(menuLeft) ){
			body.toggleClass(menuOpenLeft);
		}else{
			body.toggleClass(menuOpenRight);
		}

		//focus on link in menu after css transition ends
		if(menuLinkFocus){
			menu.one('transitionend', function() {
				menuLinkFocus.focus();
			});
		}

	}

	function closemenu(){
		if( menu.hasClass(menuLeft) ){
			body.removeClass(menuOpenLeft);
		}else{
			body.removeClass(menuOpenRight);
		}
	}

	function openmenuFallback(){
		//animate menu position based on CSS class
		if( menu.hasClass(menuLeft) ){
			body.addClass(menuOpenLeft);
			menu.animate({left: "0px"}, menuSpeed);
			container.animate({left: menuWidth}, menuSpeed);
			//css class to add menu capability
			push.animate({left: menuWidth}, menuSpeed);
		}else{
			body.addClass(menuOpenRight);
			menu.animate({right: '0px'}, menuSpeed);
			container.animate({right: menuWidth}, menuSpeed);
			push.animate({right: menuWidth}, menuSpeed);
		}

		//focus on link in menu
		if(menuLinkFocus){
			menuLinkFocus.focus();
		}
	}

	function closemenuFallback(){
		//animate menu position based on CSS class
		if( menu.hasClass(menuLeft) ){
			body.removeClass(menuOpenLeft);
			menu.animate({left: "-" + menuWidth}, menuSpeed);
			container.animate({left: "0px"}, menuSpeed);
			//css class to add menu capability
			push.animate({left: "0px"}, menuSpeed);
		}else{
			body.removeClass(menuOpenRight);
			menu.animate({right: "-" + menuWidth}, menuSpeed);
			container.animate({right: "0px"}, menuSpeed);
			push.animate({right: "0px"}, menuSpeed);
		}
	}

	function toggleSubmenu(){
		//hide submenu by default
		$(submenuClass).addClass(submenuClosedClass);

		$(submenuClass).on('click', function(e){
	        var selected = $(this);

	        if( selected.hasClass(submenuClosedClass) ) {
				//hide same-level opened submenus
				selected.siblings(submenuClass).addClass(submenuClosedClass).removeClass(submenuOpenClass);
	            //show submenu
				selected.removeClass(submenuClosedClass).addClass(submenuOpenClass);
	        }else{
	            //hide submenu
	            selected.addClass(submenuClosedClass).removeClass(submenuOpenClass);
			}
			// prevent event to be triggered on parent
			e.stopPropagation();
	    });
	}

	//checks if 3d transforms are supported removing the modernizr dependency
	var cssTransforms3d = (function csstransforms3d(){
		var el = document.createElement('p'),
		supported = false,
		transforms = {
		    'webkitTransform':'-webkit-transform',
		    'OTransform':'-o-transform',
		    'msTransform':'-ms-transform',
		    'MozTransform':'-moz-transform',
		    'transform':'transform'
		};

		if(document.body !== null) {
			// Add it to the body to get the computed style
			document.body.insertBefore(el, null);

			for(var t in transforms){
			    if( el.style[t] !== undefined ){
			        el.style[t] = 'translate3d(1px,1px,1px)';
			        supported = window.getComputedStyle(el).getPropertyValue(transforms[t]);
			    }
			}

			document.body.removeChild(el);

			return (supported !== undefined && supported.length > 0 && supported !== "none");
		}else{
			return false;
		}
	})();

	if(cssTransforms3d){
		//toggle submenu
		toggleSubmenu();

		//toggle menu
		menuBtn.on('click', function(){
			togglemenu();
		});
		//close menu when clicking site overlay
		siteOverlay.on('click', function(){
			togglemenu();
		});
	}else{
		//add css class to body
		body.addClass('no-csstransforms3d');

		//hide menu by default
		if( menu.hasClass(menuLeft) ){
			menu.css({left: "-" + menuWidth});
		}else{
			menu.css({right: "-" + menuWidth});
		}

		//fixes IE scrollbar issue
		container.css({"overflow-x": "hidden"});

		//keep track of menu state (open/close)
		var opened = false;

		//toggle submenu
		toggleSubmenu();

		//toggle menu
		menuBtn.on('click', function(){
			if (opened) {
				closemenuFallback();
				opened = false;
			} else {
				openmenuFallback();
				opened = true;
			}
		});

		//close menu when clicking site overlay
		siteOverlay.on('click', function(){
			if (opened) {
				closemenuFallback();
				opened = false;
			} else {
				openmenuFallback();
				opened = true;
			}
		});
	}
}(jQuery));
