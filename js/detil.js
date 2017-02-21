// $(function () {
// 	var aDiv = $('.sel').children('div');
// 	console.log(aDiv);
// 	aDiv.bind('click', function () {
// 		let iIndex = $(this).index();		
// 		// 清除所有LI的className, 当前LI添加className
// 		aDiv.removeClass('active').eq(iIndex).addClass('active');

// 		$('.panel').removeClass('active').eq(iIndex).addClass('active');
// 	});
// });







// (function($){
// 	$(function(){
// 		var oDiv = $('.sel').children('div');
// 		console.log(oDiv);
// 		oDiv.each(function(v){
// 			oDiv.eq(v).bind('click',function(){
// 				let iIndex = $(this).index();
// 				oDiv.not(v).removeClass('active').eq(v).addClass('active');

// 				// $('.panel').removeClass('active').eq(iIndex).addClass('active');
// 			});
// 		});
// 	});
// })(jQuery);



(function($){
$(function () {
	let oDiv = $('.sel').children('div');
	
	oDiv.bind('click',function () {
		let iIndex = $(this).index();
		oDiv.removeClass('active');
		$(this).addClass('active');
		$('.panel').removeClass('active').eq(iIndex).addClass('active');

	});
});


$(function() {
	let oBuynav = $('.main .buynav'),
		oSel= $('.sel').offset().top;
		$(window).scroll(function(){
			if ($(this).scrollTop() > oSel) {
				oBuynav.css({
					"display":"block"
				})
			}else{
				oBuynav.css({
					"display":"none"
				})
			}
		});
});


$(function () {
	var oTip    = $('.tip'),
		oSidebar= $('.sidebar'),
		oLogo   = $('.logo');

	$(oLogo).mouseover(function () {
		oTip.animate({right:'25px'},300);
	});
	$(oLogo).mouseout(function () {
		oTip.animate({right:'47px'},200)
	});
	})


})(jQuery);






(function ($) {
	$(function () {
	var countnum= $('.count2'),
		aBody   =$('tbody'),
		tr      =aBody.children(),
		leng    = tr.length,
		goodsnum=$('.sp7'),
		pricenum=$('.total'),
		subtotal=$('.td3'),
		submon  =$('.td2'),
		reduce  =$('.sp8'),
		add     =$('.sp9'),
		del     =$('.del'),
		price   =0;
		num     = 0;


			goodsnum.each(function(){
				num += Number($(this).val());
			});
			countnum.text(num);
			$('.td3').each(function(){
			price += Number($(this).text());
			pricenum.text(price);
			})


		
		var	osubtotal = 0;
			add.click(function () {
			
			var ogoodnum=Number($(this).parent().find('.sp7').val());
			var osubto  =parseInt($(this).parent().prev().text());
			 	osubtotal=parseInt($(this).parent().siblings('.td3').text());
				ogoodnum+=1;
				osubtotal=osubto + osubtotal;
				$(this).parent().find('.sp7').val(ogoodnum);				
				$(this).parent().siblings('.td3').empty().append(osubtotal);
				num +=1;
				countnum.text(num);
				price = price + osubto;
				pricenum.text(price);
			});
				

			reduce.click(function() {
			var ogoodnum=Number($(this).parent().find('.sp7').val());
			var osubto  =parseInt($(this).parent().prev().text());
			 	osubtotal=parseInt($(this).parent().siblings('.td3').text());
			 	if (ogoodnum < 0) {
			 		ogoodnum = 0;
			 	}else{
			 		ogoodnum-=1;
			 	}

				osubtotal=osubtotal - osubto;
				$(this).parent().find('.sp7').val(ogoodnum);				
				$(this).parent().siblings('.td3').empty().append(osubtotal);
				num -=1;
				countnum.text(num);
				price = price - osubto;
				pricenum.text(price);
			}
			);
			});

})(jQuery);
