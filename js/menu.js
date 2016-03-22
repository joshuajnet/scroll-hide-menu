$(document).ready(function() {

//scroll hide	
		var lastScrollTop = 0;		
				    
	    $(document).scroll(function(){
	        
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
		        
	    });

});