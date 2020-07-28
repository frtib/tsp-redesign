jQuery(document).ready(function ($) {

// *Navigation*

    $(window).stellar();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
	


    slide.waypoint(function (direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }
		
		

    });
	
	slide.waypoint(function (direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'up') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
		
		

    }, {offset: -450});  
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"] ').offset().top+450
        }, 2000, 'easeInOutQuint');
		 //  htmlbody.animate({
//            scrollTop: $('.slide-last[data-slide="' + dataslide + '"] ').offset().top+450
//        }, 2000, 'easeInOutQuint');
    }
	




    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });
	
	
// *Payroll PopUp*
	
	$("#extra-info").mouseenter(function() {
    $("#payrollPopUp").fadeIn();
});
$("#extra-info").mouseleave(function() {
    $("#payrollPopUp").fadeOut();
});


});