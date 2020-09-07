jQuery(document).ready(function(){
	jQuery('.burger').click(function(){
		jQuery('.nav').addClass('active');
	})
	jQuery('.close').click(function(){
		jQuery('.nav').removeClass('active');
	})
	jQuery(".courses-items>.item").click(function(){
		let name = jQuery(this).attr('data-name');
		showModal(name);
	})
	jQuery(".modal>.close").click(function(){
		jQuery(this).parent().removeClass('active');
	})
})


function showModal(name){
	jQuery(`#${name}`).addClass('active');
}