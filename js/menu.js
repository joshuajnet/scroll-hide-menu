$(document).ready(function() {
	
	//throttle
	 
	$.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : $.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = $.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };		
	

//scroll hide	
		var lastScrollTop = 0;		
				    
	    $(document).on('scroll', $.throttle(function() {
	        
	        var stop = $(this).scrollTop();
				        
	        if (stop > lastScrollTop){
	            console.log('down');
	            // scrolling down
		        if($('#menu').hasClass('menu-min'))
		        {
		            $('#menu').addClass('menu-close');
		            $('#menu').removeClass('menu-min');
		        }
		    }
	        else
	        {
		    	// scrolling up
		        if($('#menu').hasClass('menu-close'))
		        {
		            console.log('up');
		            $('#menu').addClass('menu-min');
		            $('#menu').removeClass('menu-close');
		        } 
	        } 
	        lastScrollTop = stop;
		        
	    }, 100));

});