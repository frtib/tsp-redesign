 // JavaScript Document

$(document).ready(function() {

	$(window).scroll(function() {
	
// *Fred* 

	

	
	//if ($(this).scrollTop() > 0) { 
//	    $(".fred-plain").css({ "position": "fixed", "top": "335px"});
//		$(".fred-business").css({ "position": "fixed", "top": "335px"});
//		$(".fred-retire").css({ "position": "fixed", "top": "335px"});
//	} else {
//	    $(".fred-plain").css({ "position": "absolute", "top": "300px" });
//		 $(".fred-business").css({ "position": "absolute", "top": "300px" });
//		  $(".fred-retire").css({ "position": "absolute", "top": "300px" });
//	} 
	
	if ($(this).scrollTop() < 2000) { 
	    $(".fred-plain").css({ "display": "block"});
		

	} else {
	    $(".fred-plain").css({ "display": "none"});
		 
		 
	} 
	
	if (($(this).scrollTop() > 2000) && ($(this).scrollTop() < 8500)) { 
	    $(".fred-business").css({ "display": "block"});

	} else {
	    $(".fred-business").css({ "display": "none"});
		 
	} 
	
	 if ($(this).scrollTop() > 8500) { 
	    $(".fred-retire").css({ "display": "block"});
		

	} else {
	    $(".fred-retire").css({ "display": "none"});
		 
		 
	} 
	
});
	
//*Fred PopUps* - When main text for each slide is scrolled to the center of the viewport, Fred's PopUp will appear


function isScrolledIntoView(elem) {
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();
	
	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();
	
	    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
		}  
		


	//function isScrolledIntoView(elem) {
//	    var docViewTop = $(window).scrollTop();
//	    var docViewMid = docViewTop + ($(window).height() / 2);
//	
//	    var elemTop = $(elem).offset().top;
//	    var elemBottom = elemTop + $(elem).height();
//	
//	    return ((elemBottom >= docViewTop) && (elemTop <= docViewMid));
//		}  
		
		var myelement1 = $('.blue-1');
		var myelement2 = $('.grey-1');
		var myelement3 = $('.red-1');
		var myelement4 = $('.green-1');
		var myelement5 = $('.blue-2');
		var myelement6 = $('.white-1');
		
		var mymessage1 = $('#article-1');
		var mymessage2 = $('#article-2');
		var mymessage3 = $('#article-3');
		var mymessage4 = $('#article-4');
		var mymessage5 = $('#article-5');
		var mymessage6 = $('#article-6');
		var myretirement = $('#retirement');
		var myarrow = $('#keepscrolling');
		var fred = $('.fred');
		$(window).scroll(function() {
		    if(isScrolledIntoView(myelement1)) {
		        mymessage1.fadeIn('500');
				myarrow.fadeIn('500'); 
				
		    }
		     else {
		        mymessage1.fadeOut('200');
				myarrow.fadeOut('200');
		    }
		});
		
		$(window).scroll(function() {
		    if(isScrolledIntoView(myelement2)) {
		        mymessage2.fadeIn('500'); 
				
		    }
		     else {
		        mymessage2.fadeOut('200');
		    }
		});
		
			$(window).scroll(function() {
		    if(isScrolledIntoView(myelement3)) {
		        mymessage3.fadeIn('500'); 
				
		    }
		     else {
		        mymessage3.fadeOut('200');
		    }
		});
		
			$(window).scroll(function() {
		    if(isScrolledIntoView(myelement4)) {
		        mymessage4.fadeIn('500'); 
				
		    }
		     else {
		        mymessage4.fadeOut('200');
		    }
		});
		
			$(window).scroll(function() {
		    if(isScrolledIntoView(myelement5)) {
		        mymessage5.fadeIn('500'); 
				
		    }
		     else {
		        mymessage5.fadeOut('200');
		    }
		});
			$(window).scroll(function() {
		    if(isScrolledIntoView(myelement6)) {
		        mymessage6.fadeIn('500'); 
				
		    }
		     else {
		        mymessage6.fadeOut('200');
		    }
		});
		
	
				


});



