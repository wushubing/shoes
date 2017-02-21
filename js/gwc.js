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
			});


			del.click(function () {
				var ogoodnum=Number($(this).parent().find('.sp7').val());
				    osubtotal=parseInt($(this).parent().siblings('.td3').text());
			var conf = confirm('确定要删除吗？');
				if (conf) {
					$(this).closest('tr').remove();
					num -=1;
				countnum.text(num);
				price = price - osubtotal;
				pricenum.text(price);
				}

			
			})
			var num=0;
			goodsnum.each(function(){
				num += Number($(this).val());
			})
			countnum.text(num);
			var price=0;
			$('.td3').each(function(){
			price += Number($(this).text());
			})
			pricenum.text(price);
			
				
				
	})
})(jQuery);