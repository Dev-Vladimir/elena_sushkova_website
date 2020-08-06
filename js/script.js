jQuery(document).ready(function(){
	jQuery('.burger').click(function(){
		jQuery('.nav').addClass('active');
	})
	jQuery('.close').click(function(){
		jQuery('.nav').removeClass('active');
	})
})