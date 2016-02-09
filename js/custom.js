$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

        $('html, body').stop().animate({
             'scrollTop': $target.offset().top
        }, 900, 'swing');
	});
    var offset = 250;

    var duration = 300;

    jQuery(window).scroll(function() {

    if (jQuery(this).scrollTop() > offset) {

    jQuery(‘.back-to-top’).fadeIn(duration);

    } else {

    jQuery(‘.back-to-top’).fadeOut(duration);

    }

    });

    &nbsp;

    jQuery(‘.back-to-top’).click(function(event) {

    event.preventDefault();

    jQuery(‘html, body’).animate({scrollTop: 0}, duration);

    return false;

    })
});


 