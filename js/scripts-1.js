/*********************/
/*
/*	IE 10 Browser fixing	
/*
/*********************/

var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);


/*********************/
  
jQuery(window).load(function(){  

  jQuery(document).ready(function($){     
  
  
  
  $("nav").sticky({ topSpacing: 0, className: 'sticky' });	
  $('ul.sf-menu a').smoothScroll();
  $('#nav').onePageNav({
		scrollSpeed: 100,
		scrollOffset: 0
	});
 


	
	/* COLOR Style switcher */  
     
	$('.swtch-opener').click(function(e){
	  if($('#style-switcher').hasClass('swclose'))
	  {
	  	$('#style-switcher').removeClass('swclose');
	  	$('#style-switcher').addClass('swopen');
	  }
	  else
	  {
		$('#style-switcher').removeClass('swopen');
	  	$('#style-switcher').addClass('swclose');
	  }
	e.preventDefault();
	});

	
	if($.cookie("css")) {
	$('link[id="clrswitch"]').attr("href",$.cookie("css"));
	}
	
	$('.ul-colors li').click(function(){
	color=($(this).attr('id'));
	if(color=='color1')
	{	
		$('link[id="clrswitch"]').attr('href','css/color.css');
		$.cookie('css', 'css/color.css', { expires: 1 });
	}
	else if(color=='color2')
	{
		$('link[id="clrswitch"]').attr('href','css/color/color_blue.css');
		$.cookie('css', 'css/color/color_blue.css', { expires: 1 });
	}
	else if(color=='color3')
	{
		$('link[id="clrswitch"]').attr('href','css/color/color_green.css');
		$.cookie('css', 'css/color/color_green.css', { expires: 1 });
	}
	else if(color=='color4')
	{
		$('link[id="clrswitch"]').attr('href','css/color/color_orange.css');
		$.cookie('css', 'css/color/color_orange.css', { expires: 1 });
	}
	else if(color=='color5')
	{
		$('link[id="clrswitch"]').attr('href','css/color/color_pink.css');
		$.cookie('css', 'css/color/color_pink.css', { expires: 1 });
	}	
	else if(color=='color6')
	{
		$('link[id="clrswitch"]').attr('href','css/color/color_red.css');
		$.cookie('css', 'css/color/color_red.css', { expires: 1 });
	}
	else if(color=='color7')
	{
		$('link[id="clrswitch"]').attr('href','css/color/color_violet.css');
		$.cookie('css', 'css/color/color_violet.css', { expires: 1 });
	}
	else if(color=='color8')
	{
		$('link[id="clrswitch"]').attr('href','css/color/color_vividora.css');
		$.cookie('css', 'css/color/color_vividora.css', { expires: 1 });
	}
	else if(color=='color9')
	{
		$('link[id="clrswitch"]').attr('href','css/color/color_turquoiseblue.css');
		$.cookie('css', 'css/color/color_turquoiseblue.css', { expires: 1 });
	}
	else if(color=='color10')
	{
		$('link[id="clrswitch"]').attr('href','css/color/color_lightorange.css');
		$.cookie('css', 'css/color/color_lightorange.css', { expires: 1 });
	}
	else if(color=='color11')
	{
		$('link[id="clrswitch"]').attr('href','css/color.css');
		$.cookie('css', 'css/color.css', { expires: 1 });
	}
	else if(color=='color12')
	{
		$('link[id="clrswitch"]').attr('href','css/color.css');
		$.cookie('css', 'css/color.css', { expires: 1 });
	}
	});
	$('.stylereset').click(function(e){
		$.cookie('css', '', { expires: 1 });
		$('link[id="clrswitch"]').attr('href','css/color.css');
		e.preventDefault();
	});	
	
	/* color switcher_bg */
	if($.cookie("css")) {
	$('link[id="clrswitch_bg"]').attr("href",$.cookie("css"));
	}
	
	$('.ul-colors li').click(function(){
	color=($(this).attr('id'));
	
	if(color=='color11')
	{
		$('link[id="clrswitch_bg"]').attr('href','css/color/color_bg_white.css');
		$.cookie('css', 'css/color/color_bg_white.css', { expires: 1 });
	}
	else if(color=='color12')
	{
		$('link[id="clrswitch_bg"]').attr('href','css/color/color_bg_black.css');
		$.cookie('css', 'css/color/color_bg_black.css', { expires: 1 });
	}
	});
	

	$('.stylereset').click(function(e){
		$.cookie('css', '', { expires: 1 });
		$('link[id="clrswitch_bg"]').attr('href','css/color.css');
		e.preventDefault();
	});	
	
	/* color switcher_bg1 */
	if($.cookie("css")) {
	$('link[id="clrswitch_bg1"]').attr("href",$.cookie("css"));
	}
	
	$('.ul-colors li').click(function(){
	color=($(this).attr('id'));
	
	if(color=='color11')
	{
		$('link[id="clrswitch_bg1"]').attr('href','css/color/color_bg_white1.css');
		$.cookie('css', 'css/color/color_bg_white.css', { expires: 1 });
	}
	else if(color=='color12')
	{
		$('link[id="clrswitch_bg1"]').attr('href','css/color/color_bg_black1.css');
		$.cookie('css', 'css/color/color_bg_black1.css', { expires: 1 });
	}
	});
	

	$('.stylereset').click(function(e){
		$.cookie('css', '', { expires: 1 });
		$('link[id="clrswitch_bg1"]').attr('href','css/color.css');
		e.preventDefault();
	});	
});

});

	