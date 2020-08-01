// jQuery(document).scroll(function(){
// 	let scroll = jQuery(window).scrollTop();
// 		breakpoint1 = 0;
// 		breakpoint2 = jQuery('.about-text').offset().top;
// 		breakpoint3 = jQuery('.channel-article-text>a.w-light').offset().top;
// 		breakpoint4 = jQuery('.popular').offset().top;
// 	if (scroll > breakpoint1){lineParallax(jQuery('.about>.line'), scroll / 10)}
// 	if (scroll > breakpoint2){lineParallax(jQuery('.channel .line'), (scroll - breakpoint2) / 5)}
// 	if (scroll > breakpoint3){lineParallax(jQuery('.blog>.line'), (scroll - breakpoint3) / 5)}
// 	if (scroll > breakpoint4){lineParallax(jQuery('.courses .line'), (scroll - breakpoint4) / 5)}

// 	// lineParallax(line, scroll);

// })

// function lineParallax(line, scroll){
// 	line.css({"transform": `translateY(${scroll}px)`})
// }