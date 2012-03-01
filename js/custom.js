$(document).ready(function(){  
	var top_val = $('#menu li a').css('left');
	$('#menu li').hover(
		function () {
			$(this).children('a').stop().animate({left:0}, {easing: 'easeOutQuad', duration:300}).animate({backgroundPosition:'100% 0px'},{queue:false, duration:0, easing: 'linear'});
		},
		function () {
			$(this).children('a').stop().animate({left:top_val}, {easing: 'easeOutQuad', duration:50}).animate({backgroundPosition:'0px 0px'},0);
		}    
	);
	$("#slider").easySlider({
		auto: false, 
		continuous: false,
		numeric: true
	});
	$(".tab_content").hide();
	$(".tab_content:first").show();
	$("ul#menu li").click(function() {
		$(".tab_content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
	$("a.fancybox").fancybox({
		'titleShow'    : false,
		'transitionIn' : 'elastic',
		'transitionOut': 'elastic'
	});
});
